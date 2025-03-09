"use client"
import {useState} from "react"
import {HoveredLink, Menu, MenuItem, ProductItem} from "@/components/ui/navbar-menu"
import {cn} from "@/lib/utils"
import {Code, Users, Clock, MessageSquare} from "lucide-react"
import Image from "next/image"
import logoUrl from "@/assets/logo.png"

export function Navbar({className, projects}: { className?: string; projects: any[] }) {
    const [active, setActive] = useState<string | null>(null)

    return (
        <div
            className={cn("fixed inset-x-0 mx-auto z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md flex justify-center items-center", className)}>
            <Menu setActive={setActive}>
                <div className="flex items-center justify-start">
                    <Image src={logoUrl} alt="升华工作室" width={20} height={20} className="mr-2"/>
                    <span className="text-lg font-bold text-primary"> 升华工作室 </span>
                </div>
                <MenuItem setActive={setActive} active={active} item="了解我们">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about" icon={<Users className="h-4 w-4 mr-2"/>}>
                            {" "}
                            关于我们 {" "}
                        </HoveredLink>
                        <HoveredLink href="/about-54sh" icon={<Code className="h-4 w-4 mr-2"/>}>
                            {" "}
                            关于升华工作室 {" "}
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="近期作品">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        {projects.slice(0, 4).map((project) => (
                            <ProductItem
                                key={project._id}
                                title={project.projectName}
                                href={project.deployUrl}
                                src={project.screenshotUrl}
                                description={project.description}
                            />
                        ))}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="时间线">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/history" icon={<Clock className="h-4 w-4 mr-2"/>}>
                            {" "}
                            升华历史时间线 {" "}
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="更多">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="mailto:contact@54sher.com" icon={<MessageSquare className="h-4 w-4 mr-2"/>}>
                            {" "}
                            联系我们 {" "}
                        </HoveredLink>
                        <HoveredLink href="/message" icon={<MessageSquare className="h-4 w-4 mr-2"/>}>
                            {" "}
                            留言板 {" "}
                        </HoveredLink>
                        <HoveredLink href="https://joinus.54sher.com" icon={<Users className="h-4 w-4 mr-2"/>}>
                            {" "}
                            加入我们 {" "}
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

