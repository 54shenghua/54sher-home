import type React from "react"
import "./globals.css"
import {notoSansSC} from "./fonts/fonts"
import {ThemeProvider} from "@/components/theme-provider"

export const metadata = {
    title: "中南大学团委网络信息部 - 升华工作室",
    description: "中南大学团委网络信息部下属技术团队，致力于校园信息化建设与技术创新",
    generator: 'v0.dev'
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const projects = await fetchProjects();
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <body className={notoSansSC.className}>
                <Navbar className="top-0" projects={projects}/>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}


import './globals.css'
import {Navbar} from "@/components/navbar";
import {fetchProjects} from "@/lib/fetchProjects"
