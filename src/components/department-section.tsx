"use client"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Code, Palette, Database, Smartphone } from "lucide-react"

export function DepartmentSection() {
  const departments = [
    {
      title: "前端开发组",
      description:
        "负责网站和应用的用户界面开发，专注于创造流畅、美观且易用的交互体验。掌握HTML、CSS、JavaScript等前端技术，以及React、Vue等现代前端框架。",
      icon: <Code className="h-12 w-12 text-white" />,
      color: "bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]",
    },
    {
      title: "UI/UX设计组",
      description:
        "负责产品的视觉设计和用户体验设计，打造有吸引力且易用的界面。熟练使用Figma、Adobe XD等设计工具，关注用户体验和交互设计原则。",
      icon: <Palette className="h-12 w-12 text-white" />,
      color: "bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))]",
    },
    {
      title: "后端开发组",
      description:
        "负责服务器端逻辑和数据处理，构建稳定、高效的系统架构。掌握Java、Python、Node.js等后端语言，以及数据库设计和服务器运维知识。",
      icon: <Database className="h-12 w-12 text-white" />,
      color: "bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))]",
    },
    {
      title: "移动开发组",
      description:
        "专注于Android、iOS平台的应用开发，为校园用户提供便捷的移动服务。熟悉移动应用开发技术和平台特性，追求流畅的用户体验和高性能实现。",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      color: "bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]",
    },
  ]

  const content = departments.map((dept) => ({
    title: dept.title,
    description: dept.description,
    content: (
      <div className={`h-full w-full ${dept.color} flex items-center justify-center text-white rounded-xl p-6`}>
        <div className="flex flex-col items-center text-center">
          {dept.icon}
          <h3 className="text-xl font-bold mt-4">{dept.title}</h3>
        </div>
      </div>
    ),
  }))

  return (
    <section id="departments">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          了解下 <br /> 我们的部门组成
        </motion.h1>
      </LampContainer>

      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </section>
  )
}

