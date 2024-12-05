"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import type { SanityDocument } from "next-sanity";

export function Navbar({ className, projects }: { className?: string, projects: SanityDocument[] }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed inset-x-0 mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="justify-start items-start text-left">23123</div>
                <MenuItem setActive={setActive} active={active} item="了解我们">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about"> 关于我们 </HoveredLink>
                        <HoveredLink href="/about-54sh"> 关于升华工作室 </HoveredLink>
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
                        <HoveredLink href="/history"> 升华历史时间线 </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="更多">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="mailto:grtsinry43@outlook.com"> 联系我们 </HoveredLink>
                        <HoveredLink href="/message"> 留言板 </HoveredLink>
                        <HoveredLink href="https://joinus.54sher.com"> 加入我们 </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
