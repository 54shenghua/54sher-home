"use client"

import type React from "react"

import {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {Code2, Database, Layout, MessageSquare, PenTool, Lightbulb} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

const positions = {
    frontend: [
        {
            title: "前端开发工程师",
            description: "负责校园网站及应用的前端页面开发与维护，需要掌握React或Vue等主流前端框架",
            requirements: ["熟悉HTML、CSS、JavaScript", "了解React/Vue等前端框架", "了解响应式设计", "有良好的团队协作能力"],
            icon: <Layout className="h-6 w-6"/>,
        },
        {
            title: "UI/UX设计师",
            description: "负责产品界面与交互设计，优化用户体验，需要具备设计软件使用能力",
            requirements: ["熟悉Figma/Adobe XD等设计工具", "了解UI设计规范", "具备良好审美能力", "有交互设计经验优先"],
            icon: <PenTool className="h-6 w-6"/>,
        },
    ],
    backend: [
        {
            title: "后端开发工程师",
            description: "负责校园平台后端服务开发与维护，需要掌握至少一种服务端开发语言",
            requirements: ["会用Java/Python/Node.js等其中一门语言", "了解SQL数据库操作", "熟悉RESTful API设计", "有开发经验优先"],
            icon: <Database className="h-6 w-6"/>,
        },
        {
            title: "全栈开发工程师",
            description: "负责校园应用的全栈开发，能够独立完成小型项目",
            requirements: ["前后端技术栈均有了解", "良好的学习能力", "具备独立解决问题能力", "热爱编程与技术"],
            icon: <Code2 className="h-6 w-6"/>,
        },
    ],
    product: [
        {
            title: "管理/办公室",
            description: "负责校园产品需求分析与规划，项目管理与跟进",
            requirements: ["具备产品思维", "良好的沟通能力", "能够理解用户需求", "有项目管理经验优先"],
            icon: <Lightbulb className="h-6 w-6"/>,
        },
    ],
}

const process = [
    {title: "提交申请", description: "填写招新表单，提交个人作品与经历"},
    {title: "笔试考核", description: "参加基础知识与专业技能测试"},
    {title: "面试交流", description: "与工作室成员进行技术与项目经验交流"},
    {title: "结果通知", description: "面试后5个工作日内获得通知结果"},
]

export default function Recruitment() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true, amount: 0.1})

    return (
        <section id="recruitment" className="w-full py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        加入我们
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        寻找志同道合的技术爱好者，一起创造校园数字未来
                    </motion.p>
                </div>

                <div ref={ref} className="space-y-16">
                    {/* Positions */}
                    <div>
                        <Tabs defaultValue="frontend" className="w-full">
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={isInView ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.5, delay: 0.2}}
                                >
                                    <TabsList className="grid w-full grid-cols-3 md:w-auto">
                                        <TabsTrigger value="frontend">前端/设计</TabsTrigger>
                                        <TabsTrigger value="backend">后端/全栈</TabsTrigger>
                                        <TabsTrigger value="product">管理/办公室</TabsTrigger>
                                    </TabsList>
                                </motion.div>
                            </div>

                            <TabsContent value="frontend">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {positions.frontend.map((position, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 30}}
                                            animate={isInView ? {opacity: 1, y: 0} : {}}
                                            transition={{duration: 0.5, delay: 0.1 * (index + 1)}}
                                        >
                                            <PositionCard position={position}/>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="backend">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {positions.backend.map((position, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 30}}
                                            animate={isInView ? {opacity: 1, y: 0} : {}}
                                            transition={{duration: 0.5, delay: 0.1 * (index + 1)}}
                                        >
                                            <PositionCard position={position}/>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="product">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {positions.product.map((position, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 30}}
                                            animate={isInView ? {opacity: 1, y: 0} : {}}
                                            transition={{duration: 0.5, delay: 0.1 * (index + 1)}}
                                        >
                                            <PositionCard position={position}/>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Process */}
                    <div>
                        <motion.h3
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.4}}
                            className="text-2xl font-semibold mb-8 text-center"
                        >
                            招新流程
                        </motion.h3>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border"/>

                            <div className="space-y-8">
                                {process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 20}}
                                        animate={isInView ? {opacity: 1, y: 0} : {}}
                                        transition={{duration: 0.5, delay: 0.2 + index * 0.1}}
                                        className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                    >
                                        <div
                                            className="flex flex-1 md:w-1/2 flex-col items-center md:items-end md:pr-8 md:text-right">
                                            <div className={`md:block ${index % 2 !== 0 ? "md:hidden" : ""}`}>
                                                <div
                                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium inline-block mb-2">
                                                    步骤 {index + 1}
                                                </div>
                                                <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                                                <p className="text-muted-foreground">{step.description}</p>
                                            </div>
                                        </div>

                                        <div
                                            className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                            <span
                                                className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                                        </div>

                                        <div
                                            className="flex flex-1 md:w-1/2 flex-col items-center md:items-start md:pl-8">
                                            <div className={`md:block ${index % 2 === 0 ? "md:hidden" : ""}`}>
                                                <div
                                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium inline-block mb-2">
                                                    步骤 {index + 1}
                                                </div>
                                                <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                                                <p className="text-muted-foreground">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.8}}
                        className="text-center mt-10"
                    >
                        <Button size="lg" className="group">
                            立即报名
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </Button>
                        <p className="mt-4 text-muted-foreground">招新时间: 2025年9月10日 - 9月30日</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function PositionCard({
                          position,
                      }: {
    position: { title: string; description: string; requirements: string[]; icon: React.ReactNode }
}) {
    return (
        <Card className="h-full transition-all hover:shadow-md">
            <CardContent className="p-6">
                <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">{position.icon}</div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">{position.title}</h4>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        <div className="space-y-2">
                            <h5 className="font-medium">要求:</h5>
                            <ul className="space-y-1">
                                {position.requirements.map((req, i) => (
                                    <li key={i} className="text-sm flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5"/>
                                        </svg>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

