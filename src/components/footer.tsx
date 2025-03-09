import { Github, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">升华工作室</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-md">
              中南大学团委网络信息部下属技术团队，致力于校园信息化建设与技术创新，为师生提供优质的网络服务。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/csu-54sh"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@54sher.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  项目展示
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  发展历程
                </Link>
              </li>
              <li>
                <Link
                  href="/message"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  留言板
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="text-neutral-600 dark:text-neutral-400">地址：湖南省长沙市岳麓区中南大学</li>
              <li className="text-neutral-600 dark:text-neutral-400">邮箱：contact@54sher.com</li>
              <li className="text-neutral-600 dark:text-neutral-400">QQ群：123456789</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} 中南大学团委网络信息部 - 升华工作室. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}

