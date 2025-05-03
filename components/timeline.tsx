"use client"

import {useRef, useState} from "react"
import {motion, useInView} from "framer-motion"
import {cn} from "@/lib/utils"

interface Event {
    year: string
    title: string
    description: string
}

const events: Event[] = [
    {
        year: "2001",
        title: "网站成立",
        description: "升华网正式成立",
    },
    {
        year: "20..",
        title: "校级组织",
        description: "合并入校团委网信部，成立升华工作室",
    },
    {
        year: "2024",
        title: "部门重建",
        description: "工作室扩大招新规模，技术团队成员增至30人，项目覆盖范围扩大",
    },
    {
        year: "2025",
        title: "继续发展",
        description: "完成校内多个项目，故事还在继续书写...",
    },
]

export default function Timeline() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true, amount: 0.1})
    const [active, setActive] = useState(events.length - 1)

    return (
        <section className="w-full py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        发展历程
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        见证我们的成长与变革
                    </motion.p>
                </div>

                <div ref={ref} className="mt-10">
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 right-0 h-0.5 top-8 bg-border"/>

                            <div className="relative flex justify-between">
                                {events.map((event, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{opacity: 0, y: 30}}
                                        animate={isInView ? {opacity: 1, y: 0} : {}}
                                        transition={{duration: 0.5, delay: 0.1 * index}}
                                        className={cn(
                                            "relative flex flex-col items-center transition-all",
                                            active === index ? "scale-110" : "opacity-70 hover:opacity-100",
                                        )}
                                        onClick={() => setActive(index)}
                                    >
                    <span
                        className={cn(
                            "w-16 h-16 flex items-center justify-center rounded-full border-4 bg-background transition-colors z-10",
                            active === index ? "border-primary" : "border-muted",
                        )}
                    >
                      {event.year}
                    </span>
                                    </motion.button>
                                ))}
                            </div>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.5, delay: 0.8}}
                                className="mt-16 bg-card border border-border p-6 rounded-xl shadow-sm"
                                key={active}
                            >
                                <h3 className="text-2xl font-semibold mb-2">{events[active].title}</h3>
                                <p className="text-muted-foreground">{events[active].description}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"/>

                            <div className="space-y-8">
                                {events.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={isInView ? {opacity: 1, x: 0} : {}}
                                        transition={{duration: 0.5, delay: 0.1 * index}}
                                        className="relative pl-12"
                                    >
                                        <div
                                            className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                            <span
                                                className="text-xs font-bold text-primary-foreground">{event.year}</span>
                                        </div>
                                        <div className="bg-card border border-border p-4 rounded-lg">
                                            <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                                            <p className="text-sm text-muted-foreground">{event.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

