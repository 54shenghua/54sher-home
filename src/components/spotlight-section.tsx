"use client"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SpotlightSection() {
  return (
    <div
      id="about"
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          技术创新 <br /> 我们一直在路上
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          升华工作室成立于2001年，是中南大学团委网络信息部下属的技术团队，致力于校园信息化建设与技术创新。二十余年来，我们始终坚持"用心做事，诚信做人"的理念，为学校师生提供优质的网络服务。
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/about">
            <Button className="bg-white text-black hover:bg-neutral-200">了解更多</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

