"use client"
import {motion} from "framer-motion"
import {AuroraBackground} from "@/components/ui/aurora-background"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import Link from "next/link"
import {clsx} from "clsx";
import {zhiMangXing} from "@/app/fonts/fonts";

export default function HeroSection() {
    return (
        <AuroraBackground className="h-screen">
            <div className="flex flex-col items-center justify-center h-full px-4 text-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: [0.4, 0.0, 0.2, 1]}}
                    className="space-y-6"
                >
                    <h1 className={clsx(zhiMangXing.className, "text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white")}>
                        盛世 <span className="text-red-600"> 升华 </span>，服务中南
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
                        中南大学团委网络信息部 - 升华工作室 <br/> 用技术创新赋能校园生活，打造智慧校园新体验
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#projects">
                            <Button className="px-6 py-6 text-base rounded-full bg-red-600 hover:bg-red-700 text-white">
                                查看我们的项目
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                        <Link href="#join-us">
                            <Button
                                variant="outline"
                                className="px-6 py-6 text-base rounded-full border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                            >
                                加入我们
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </AuroraBackground>
    )
}

