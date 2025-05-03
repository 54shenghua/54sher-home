"use client"

import {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {Layers, Database, Monitor, Server, Cloud, PenTool, Bot, Code} from "lucide-react"

const techStack = [
    {
        category: "前端开发",
        icon: <Monitor className="h-6 w-6"/>,
        technologies: ["Vue", "React", "Next.js", "TypeScript", "Tailwind CSS", "Vant UI"],
    },
    {
        category: "后端开发",
        icon: <Server className="h-6 w-6"/>,
        technologies: ["Node.js", "Spring Boot", "FastAPI", "Express", "Flask"],
    },
    {
        category: "数据库",
        icon: <Database className="h-6 w-6"/>,
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
        category: "云服务",
        icon: <Cloud className="h-6 w-6"/>,
        technologies: ["Alibaba Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        category: "设计工具",
        icon: <PenTool className="h-6 w-6"/>,
        technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
        category: "AI/ML",
        icon: <Bot className="h-6 w-6"/>,
        technologies: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision"],
    },
    {
        category: "开发工具",
        icon: <Code className="h-6 w-6"/>,
        technologies: ["Git", "VS Code", "WebStorm", "Apifox", "Intelij IDEA", "TAPD"],
    },
    {
        category: "架构设计",
        icon: <Layers className="h-6 w-6"/>,
        technologies: ["GraphQL", "RESTful API", "WebSocket"],
    },
]

const teamStructure = [
    {name: "前端开发组", count: 12, color: "from-blue-500 to-indigo-500"},
    {name: "后端开发组", count: 8, color: "from-green-500 to-emerald-500"},
    {name: "运维设计组", count: 6, color: "from-orange-500 to-amber-500"},
    {name: "管理组", count: 2, color: "from-purple-500 to-pink-500"},
    {name: "AI研发组", count: 2, color: "from-red-500 to-rose-500"},
]

export default function TechStack() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true, amount: 0.1})

    return (
        <section id="techstack" className="w-full py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        技术栈与团队组成
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        我们拥有全面的技术能力，能够应对各类校园信息化挑战
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Tech Stack */}
                    <div>
                        <motion.h3
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="text-2xl font-semibold mb-6 text-center lg:text-left"
                        >
                            技术栈
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {techStack.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 30}}
                                    animate={isInView ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.5, delay: 0.1 * index}}
                                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="p-2 rounded-full bg-primary/10 mr-3 text-primary">{category.icon}</div>
                                        <h4 className="text-lg font-medium">{category.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Team Structure */}
                    <div>
                        <motion.h3
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="text-2xl font-semibold mb-8 text-center lg:text-left"
                        >
                            团队组成
                        </motion.h3>
                        <div className="space-y-6">
                            {teamStructure.map((team, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, x: -50}}
                                    animate={isInView ? {opacity: 1, x: 0} : {}}
                                    transition={{duration: 0.5, delay: 0.15 * index}}
                                    className="bg-card border border-border rounded-xl p-6"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-lg font-medium">{team.name}</h4>
                                        <span className="text-muted-foreground">{team.count}人</span>
                                    </div>
                                    <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{width: "0%"}}
                                            animate={isInView ? {width: `${(team.count / 12) * 100}%`} : {}}
                                            transition={{duration: 1, delay: 0.2 + 0.1 * index}}
                                            className={`h-full bg-gradient-to-r ${team.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.8}}
                            className="mt-10 bg-card border border-border rounded-xl p-6"
                        >
                            <h4 className="text-lg font-medium mb-4">总人数统计</h4>
                            <div className="flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-muted opacity-20"
                                        />
                                        {teamStructure.map((team, i) => {
                                            const startAngle =
                                                i === 0
                                                    ? 0
                                                    : (teamStructure.slice(0, i).reduce((acc, curr) => acc + curr.count, 0) / 30) * 2 * Math.PI
                                            const endAngle = startAngle + (team.count / 30) * 2 * Math.PI

                                            const x1 = 50 + 40 * Math.cos(startAngle)
                                            const y1 = 50 + 40 * Math.sin(startAngle)
                                            const x2 = 50 + 40 * Math.cos(endAngle)
                                            const y2 = 50 + 40 * Math.sin(endAngle)

                                            const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0

                                            return (
                                                <path
                                                    key={i}
                                                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                                                    className={`fill-current ${team.color.replace("from-", "text-").split(" ")[0]}`}
                                                />
                                            )
                                        })}
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">
                      {teamStructure.reduce((acc, curr) => acc + curr.count, 0)}
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                                {teamStructure.map((team, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${team.color}`}/>
                                        <span className="text-sm">{team.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

