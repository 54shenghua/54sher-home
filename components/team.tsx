"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "张明",
    title: "指导老师",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责工作室整体规划与发展方向指导",
  },
  {
    name: "李晓华",
    title: "技术总监",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责工作室技术团队管理与项目技术指导",
  },
  {
    name: "王思源",
    title: "前端组长",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责前端开发团队管理与技术选型",
  },
  {
    name: "赵云",
    title: "后端组长",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责后端开发团队管理与架构设计",
  },
  {
    name: "吴佳丽",
    title: "UI设计师",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责产品UI设计与用户体验优化",
  },
  {
    name: "陈浩",
    title: "项目经理",
    avatar: "/placeholder.svg?height=400&width=400",
    about: "负责项目规划、进度管理与需求分析",
  },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            团队成员
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            充满激情与创造力的技术团队，致力于校园信息化建设
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-muted-foreground mb-4">{member.about}</p>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">Github</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

