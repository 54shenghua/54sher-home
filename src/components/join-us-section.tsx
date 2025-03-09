"use client"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal"
import { Code, Palette, Database, Smartphone, ChevronRight } from "lucide-react"
import Link from "next/link"

export function JoinUsSection() {
  return (
    <section id="join-us" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">加入我们</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
          如果你热爱技术，渴望在实践中成长，欢迎加入升华工作室大家庭！我们提供专业的技术培训和实战项目经验，助你在大学期间快速成长。
        </p>

        <div className="py-10 flex items-center justify-center">
          <Modal>
            <ModalTrigger className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full flex items-center justify-center group/modal-btn text-lg font-medium">
              <span className="group-hover/modal-btn:translate-x-2 transition duration-300">加入我们</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover/modal-btn:translate-x-2 transition duration-300" />
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-8">
                  选择你感兴趣的方向
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                    <Code className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                    <h5 className="text-xl font-bold mb-2">前端开发</h5>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      负责网站和应用的用户界面开发，创造流畅、美观的交互体验
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      技术栈：HTML, CSS, JavaScript, React, Vue
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                    <Palette className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
                    <h5 className="text-xl font-bold mb-2">UI/UX设计</h5>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      负责产品的视觉设计和用户体验设计，打造有吸引力且易用的界面
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">工具：Figma, Adobe XD, Photoshop</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                    <Database className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
                    <h5 className="text-xl font-bold mb-2">后端开发</h5>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      负责服务器端逻辑和数据处理，构建稳定、高效的系统架构
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      技术栈：Java, Python, Node.js, MySQL
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
                    <Smartphone className="h-10 w-10 text-orange-600 dark:text-orange-400 mb-4" />
                    <h5 className="text-xl font-bold mb-2">移动开发</h5>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      专注于Android、iOS平台的应用开发，提供便捷的移动服务
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      技术栈：Flutter, React Native, Swift, Kotlin
                    </p>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-neutral-700 dark:text-white border border-gray-300 rounded-md text-sm">
                  稍后再说
                </button>
                <Link href="https://joinus.54sher.com" target="_blank">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                    立即申请
                  </button>
                </Link>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </section>
  )
}

