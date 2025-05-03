"use client"

import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import AppleCard from "./apple-card";
import ScrollReveal from "./scroll-reveal";
import TextReveal from "./text-reveal";
import {SanityDocument} from "next-sanity";
import {client} from "@/api/sanity/client";
import Link from "next/link";

interface ProjectDocument extends SanityDocument {
    _id: string;
    name: string;
    deployUrl?: string; // 部署链接，可选
    screenshot: {
        asset?: {
            _ref?: string;
            _type?: string;
            // 如果使用 asset->url 获取，可能直接包含 url
            url?: string;
        };
    };
    techStack: string[] | null; // 技术栈数组，可能为 null
    description: string;
    publishedAt: string; // 发布日期，字符串或 Date 类型
}

// GROQ 查询：获取图片 URL
// 注意：你需要根据 Sanity 中 screenshot 字段的实际结构调整此查询
const PROJECTS_QUERY = `*[
  _type == "project"
]|order(publishedAt desc)[0...4]{
  _id,
  name,
  deployUrl, 
  "imageUrl": screenshot.asset->url,
  techStack,
  description,
  publishedAt
}`;

// Sanity fetch 选项，设置数据重新验证时间（例如 30 秒）
const options = {next: {revalidate: 30}};

// 组件内部使用的项目数据结构类型
type Project = {
    id: string; // 项目 ID
    title: string; // 项目标题
    description: string; // 项目描述
    image: string; // 项目图片 URL
    tags: string[] | null; // 技术标签数组
    deployUrl?: string;
};

export default function Projects() {
    // useRef 用于获取 DOM 元素的引用
    const ref = useRef<HTMLDivElement>(null);
    // useState 用于管理项目数据状态，初始值为空数组
    const [projects, setProjects] = useState<Project[]>([]);
    // useState 用于管理加载状态，初始值为 true
    const [isLoading, setIsLoading] = useState(true);
    // useState 用于管理错误状态，初始值为 null
    const [error, setError] = useState<string | null>(null);

    // useInView 用于检测元素是否进入视口
    const isInView = useInView(ref, {once: true, amount: 0.1}); // once: true 表示只触发一次

    // useEffect 用于处理副作用，例如数据获取
    useEffect(() => {
        // 在 useEffect 内部定义一个异步函数来获取数据
        const fetchProjects = async () => {
            setIsLoading(true); // 开始加载，设置加载状态为 true
            setError(null); // 重置错误状态
            try {
                // 调用 Sanity client 获取数据
                const docs = await client.fetch<ProjectDocument[]>(
                    PROJECTS_QUERY, // 使用定义的 GROQ 查询语句
                    {}, // 查询参数，这里为空
                    options // fetch 选项，包含 revalidate 设置
                );

                // 将从 Sanity 获取的文档数据映射为组件内部使用的 Project 类型
                const mappedProjects: Project[] = docs.map((doc) => ({
                    id: doc._id, // Sanity 文档 ID 对应项目 ID
                    title: doc.name, // Sanity 的 name 字段对应项目 title
                    description: doc.description, // 描述
                    // 根据查询结果和 schema 结构确定图片 URL 来源
                    image: (doc as any).imageUrl || (doc as any).screenshot || "/placeholder.svg", // 优先使用 imageUrl，其次 screenshot，最后是占位图
                    tags: doc.techStack || [], // 使用 techStack，如果为 null 则设置为空数组
                    deployUrl: doc.deployUrl,
                }));

                setProjects(mappedProjects); // 更新项目状态
            } catch (err) {
                console.error("获取项目数据失败:", err); // 在控制台打印错误信息
                setError("加载项目失败，请稍后重试。"); // 设置错误状态消息
                setProjects([]); // 发生错误时清空项目数据
            } finally {
                setIsLoading(false); // 加载结束（无论成功或失败），设置加载状态为 false
            }
        };

        fetchProjects(); // 调用该异步函数执行数据获取
    }, []);

    // --- 组件渲染 ---
    return (
        <section id="projects" className="w-full py-20 relative overflow-hidden">
            {/* 背景渐变 */}
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/5 to-transparent opacity-50"/>

            <div className="container px-4 md:px-6 relative z-10">
                {/* 标题和“查看全部”按钮区域 */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        {/* 主标题文本动画 */}
                        <TextReveal
                            text="精选项目"
                            className="text-3xl md:text-4xl font-bold tracking-tight"
                            delay={0.1}
                        />
                        {/* 副标题文本动画 */}
                        <TextReveal
                            text="我们打造了多个服务校园的应用与平台"
                            className="mt-2 text-xl text-muted-foreground max-w-2xl"
                            delay={0.2}
                            staggerChildren={0.01}
                        />
                    </div>
                    {/* "查看全部项目" 按钮滚动动画 */}
                    <ScrollReveal delay={0.3} direction="left">
                        <Button variant="outline" className="mt-4 md:mt-0 group">
                            查看全部项目{" "}
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Button>
                    </ScrollReveal>
                </div>

                {/* 加载状态显示 */}
                {isLoading && <p className="text-center text-muted-foreground">正在加载项目...</p>}
                {/* 错误状态显示 */}
                {error && <p className="text-center text-red-500">{error}</p>}

                {/* 仅在非加载且无错误时渲染项目网格 */}
                {!isLoading && !error && (
                    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* 如果没有项目数据且不在加载中 */}
                        {projects.length === 0 && !isLoading && (
                            <p className="text-center text-muted-foreground col-span-1 md:col-span-2">暂无项目</p>
                        )}
                        {/* 遍历 projects 数组，为每个项目渲染一个卡片 */}
                        {projects.map((project, index) => (
                            <ScrollReveal
                                key={project.id} // 使用项目 ID 作为 key
                                delay={0.2 + index * 0.1} // 每个卡片的动画延迟不同
                                direction={index % 2 === 0 ? "right" : "left"} // 交替动画方向
                                once={true} // 动画只播放一次
                            >
                                {/* 使用 AppleCard 风格的卡片包裹 */}
                                <AppleCard className="h-full group flex flex-col"> {/* 添加 flex flex-col */}
                                    <div className="overflow-hidden rounded-t-xl">
                                        {/* 图片容器，添加悬停放大效果 */}
                                        <motion.div
                                            whileHover={{scale: 1.05}} // 悬停时放大 1.05 倍
                                            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}} // 过渡动画效果
                                        >
                                            {/* Next.js Image 组件显示项目图片 */}
                                            <Image
                                                src={project.image || "/placeholder.svg"} // 图片源，带占位图 fallback
                                                alt={project.title} // 图片替代文本
                                                width={800} // 图片宽度
                                                height={400} // 图片高度 (根据宽高比调整)
                                                className="object-cover transition-transform duration-700 w-full aspect-[2/1]" // 图片样式：覆盖、过渡、宽度、宽高比
                                                priority={index < 2} // 优先加载前两张图片 (优化 LCP)
                                            />
                                        </motion.div>
                                    </div>
                                    {/* 卡片内容区域 */}
                                    <div className="p-6 flex flex-col flex-grow"> {/* 添加 flex flex-col flex-grow */}
                                        {/* 项目标题 */}
                                        {
                                            project.deployUrl ? (
                                                <Link href={project.deployUrl}>
                                                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </Link>
                                            ) : (
                                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                            )
                                        }
                                        {/* 项目描述，限制最多显示 3 行 */}
                                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{project.description}</p> {/* 添加 flex-grow */}
                                        {/* 技术标签区域 */}
                                        <div
                                            className="flex flex-wrap gap-2 mt-auto pt-4"> {/* mt-auto 将标签推到底部, pt-4 增加与描述的间距 */}
                                            {/* 检查 tags 是否存在且有内容 */}
                                            {project.tags && project.tags.length > 0 ? (
                                                // 遍历并渲染技术标签
                                                project.tags.map((tag) => (
                                                    <span
                                                        key={tag} // 使用 tag 作为 key (假设 tag 不重复)
                                                        className="px-3 py-1 bg-secondary/50 backdrop-blur-sm text-secondary-foreground text-sm rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))
                                            ) : null}
                                        </div>
                                    </div>
                                </AppleCard>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}