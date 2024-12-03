"use client";

import React from 'react';
import {motion} from "motion/react"
import {AuroraBackground} from "@/components/ui/aurora-background";
import {clsx} from "clsx";
import {zhiMangXing} from "@/app/fonts/fonts";

const TitleAnimation = () => {
    return (
        <div className="dark">
            <AuroraBackground>
                <motion.div
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div
                        className={clsx(zhiMangXing.className, "text-3xl md:text-7xl font-bold dark:text-white text-center")}>
                        盛世升华，服务中南
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        中南大学团委网络信息部
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        Debug now
                    </button>
                </motion.div>
            </AuroraBackground>
        </div>
    );
};

export default TitleAnimation;
