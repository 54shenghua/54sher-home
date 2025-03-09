"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                优秀的团队 <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">共同成长与进步</span>
              </h1>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/placeholder.svg?height=64&width=64`}
                      alt="团队成员"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">团队成员 {i}</h3>
                    <p className="text-neutral-400">技术负责人</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  "在升华工作室，我不仅提升了技术能力，更收获了宝贵的团队协作经验和终身的友谊。"
                </p>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}

