import React from "react";
import {HeroParallax} from "../ui/hero-parallax";
import {fetchProjects} from "@/lib/fetchProjects";
import {shuffle} from "lodash";

export async function HeroParallaxDemo() {
    const projects = await fetchProjects();
    const products = [];
    while (products.length < 16) {
        const shuffledProjects = shuffle(projects);
        products.push(...shuffledProjects);
    }
    products.length = 16; // 这里就是无论如何都显示 16 个，少的话就搞一些操作（）

    const formattedProducts = products.map((project) => ({
        title: project.projectName,
        link: project.deployUrl,
        thumbnail: project.screenshotUrl,
    }));

    return <HeroParallax products={formattedProducts}/>;
}
