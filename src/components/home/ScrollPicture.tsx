"use client";
import React from "react";
import {ContainerScroll} from "../ui/container-scroll-animation";
import Image from "next/image";

export function ScrollPicture() {
    return (
        <div className="dark">
            <div className="flex flex-col overflow-hidden dark:bg-black">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white ">
                                用创新赋能 <br/>
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                精心设计每一个程序
              </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/linear.webp`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </div>

    );
}
