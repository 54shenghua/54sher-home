"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Book, Github, ExternalLink, FileText, MessageSquare, Code2, Mail } from "lucide-react"

const links = [
  {
    title: "技术文档",
    description: "查阅我们的技术文档与开发指南",
    icon: <Book className="h-6 w-6" />,
    href: "https://docs.54sher.com",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "开源项目",
    description: "访问我们的开源代码仓库",
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/54shenghua",
    color: "bg-purple-500/10 text-purple-500",
  },
  // {
  //   title: "产品介绍",
  //   description: "了解我们的产品与服务",
  //   icon: <FileText className="h-6 w-6" />,
  //   href: "#",
  //   color: "bg-green-500/10 text-green-500",
  // },
  // {
  //   title: "社区论坛",
  //   description: "加入我们的技术交流社区",
  //   icon: <MessageSquare className="h-6 w-6" />,
  //   href: "#",
  //   color: "bg-orange-500/10 text-orange-500",
  // },
  // {
  //   title: "API参考",
  //   description: "查看API接口文档与使用示例",
  //   icon: <Code2 className="h-6 w-6" />,
  //   href: "#",
  //   color: "bg-pink-500/10 text-pink-500",
  // },
  // {
  //   title: "联系我们",
  //   description: "有任何问题，请与我们联系",
  //   icon: <Mail className="h-6 w-6" />,
  //   href: "mailto",
  //   color: "bg-red-500/10 text-red-500",
  // },
]

export default function QuickLinks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            快速链接
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            访问我们的资源与服务
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={link.href}
                className="group flex flex-col h-full p-6 bg-card border border-border rounded-xl transition-all hover:shadow-md"
              >
                <div className={`${link.color} p-2 rounded-lg w-fit mb-4`}>{link.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{link.description}</p>
                <div className="flex items-center text-sm font-medium text-primary">
                  查看详情
                  <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} 中南大学校团委网信部（升华工作室）. 保留所有权利.
          </p>
          {/*<div className="mt-2 flex justify-center space-x-4">*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">*/}
          {/*    关于我们*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">*/}
          {/*    隐私政策*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">*/}
          {/*    使用条款*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </motion.div>
      </div>
    </section>
  )
}

