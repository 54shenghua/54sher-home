"use client"

import {useRef, useEffect, useState} from "react"
import {motion, useScroll, useTransform} from "framer-motion"
import {ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import AnimatedBackground from "./animated-background"
import TextReveal from "./text-reveal"
import AppleCard from "./apple-card"
import {cn} from "@/lib/utils";
import {zhi_mang_xing, noto_sans} from "@/fonts/fonts";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

    // 3D objects animation
    const [rotation, setRotation] = useState({x: 0, y: 0})
    const objectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!objectsRef.current) return

            const {clientX, clientY} = e
            const {innerWidth, innerHeight} = window

            // Calculate rotation based on mouse position
            const rotateY = (clientX / innerWidth - 0.5) * 20
            const rotateX = (clientY / innerHeight - 0.5) * -20

            setRotation({x: rotateX, y: rotateY})
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div ref={containerRef}
             className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background animation */}
            <AnimatedBackground/>

            {/* 3D floating objects */}
            <div
                ref={objectsRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-3xl"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 8,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg) translateZ(50px)`,
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-24 h-24 md:w-40 md:h-40 rounded-lg bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -8, 0],
                        scale: [1, 1.03, 1],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 10,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg) translateZ(30px)`,
                    }}
                />

                <motion.div
                    className="absolute top-1/3 left-1/3 w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-3xl"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 7,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateX(${rotation.x * 0.7}deg) rotateY(${rotation.y * 0.7}deg) translateZ(70px)`,
                    }}
                />
            </div>

            <motion.div style={{opacity, scale, y}} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        type: "spring",     // <--- 设置类型为 spring
                        stiffness: 300,    // <--- 调整刚度 (例如 100 到 500 之间尝试)
                        damping: 15,       // <--- 调整阻尼 (例如 10 到 40 之间尝试)
                        mass: 3,        // <--- 可以选择性调整质量
                        delay: 0.1         // <--- 保持或调整延迟
                        // 注意：通常 spring 类型不需要设置 duration，它的时长由物理参数决定
                    }}
                >
                        <span
                            className={cn(
                                "text-5xl md:text-7xl font-bold tracking-tight",
                                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600",
                                zhi_mang_xing.className
                            )}
                        >
                            盛世升华，服务中南
                        </span>
                </motion.div>

                <TextReveal
                    text="中南大学校团委网络信息技术中心，致力于校园信息化建设与技术创新"
                    className={cn("mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto", noto_sans.className)}
                    delay={0.4}
                    staggerChildren={0.01}
                />

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <AppleCard className="overflow-visible p-0 bg-transparent">
                        <Link href={"#features"}>
                            <Button
                                size="lg"
                                className="group relative z-10 bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:from-indigo-600 hover:to-purple-700"
                            >
                                了解更多
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                            </Button>
                        </Link>
                    </AppleCard>

                    <AppleCard className="overflow-visible p-0 bg-transparent">
                        <Link href={"#recruitment"}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group relative z-10 backdrop-blur-sm bg-white/10 border-white/20"
                            >
                                加入我们
                            </Button>
                        </Link>
                    </AppleCard>
                </motion.div>
            </motion.div>

            {/* Bottom scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{y: [0, 10, 0]}}
                transition={{repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut"}}
            >
                <div className="w-8 h-12 rounded-full border-2 border-muted flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-muted rounded-full mt-2"
                        animate={{y: [0, 15, 0]}}
                        transition={{repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut"}}
                    />
                </div>
            </motion.div>
        </div>
    )
}

