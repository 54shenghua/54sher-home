"use client"

import {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {Code, Lightbulb, Globe, Bot, Edit, CloudCog, Book} from "lucide-react"

const features = [
    {
        title: "网站开发",
        description: "打造高质量校园网站与平台，助力校园信息建设",
        icon: <Globe className="h-8 w-8"/>,
    },
    {
        title: "设计创意",
        description: "优秀的用户界面与交互设计，提升校园信息传递效率",
        icon: <Edit className="h-8 w-8"/>,
    },
    {
        title: "技术创新",
        description: "探索前沿技术应用，为校园智能化建设提供解决方案",
        icon: <Lightbulb className="h-8 w-8"/>,
    },
    {
        title: "培训传承",
        description: "传递薪火，培养具有实践能力和创新思维的技术人才",
        icon: <Book className="h-8 w-8"/>,
    },
    {
        title: "技术支持",
        description: "为校内各组织提供专业的技术指导与支持",
        icon: <CloudCog className="h-8 w-8"/>,
    },
    {
        title: "开源协作",
        description: "积极参与开源社区，推动技术共享与协作",
        icon: <Code className="h-8 w-8"/>,
    },
]

export default function Features() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true, amount: 0.2})

    return (
        <section id="features" className="w-full py-20 bg-gradient-to-b from-background to-background/90">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        我们的使命
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        盛世升华，服务中南。我们秉着为同学服务的精神，<br/>专注于校园信息化建设，为师生提供优质的数字化服务体验
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.1 * index}}
                            className="group relative bg-card border border-border p-6 rounded-lg transition-all hover:shadow-lg overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
                            <div className="relative z-10">
                                <div
                                    className="mb-4 p-2 inline-block bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

