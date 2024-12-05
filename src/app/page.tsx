import Image from "next/image";
import {WobbleCardDemo} from "@/components/WobbleCardDemo";
import {ThreeDCardDemo} from "@/components/ThreeDCardDemo";
import {CompareDemo} from "@/components/CompareDemo";
import TitleAnimation from "@/components/home/TitleAnimation";
import {FeaturesSection} from "@/components/home/FeaturesSection";
import {BackgroundBoxes} from "@/components/home/BackgroundBoxes";
import {SpotlightTitle} from "@/components/home/SpotlightTitle";
import {ScrollPicture} from "@/components/home/ScrollPicture";
import {HeroParallaxDemo} from "@/components/home/HeroParallaxDemo";
import {LampTitle} from "@/components/home/LampTitle";
import {StickyScrollRevealDemo} from "@/components/home/StickyScrollRevealDemo";
import {HeroHighlightDemo} from "@/components/home/HeroHeightDemo";
import {AnimatedModalDemo} from "@/components/home/AnimatedModalDemo";

export default function Home() {
    return (
        <div>
            <TitleAnimation/>
            <HeroParallaxDemo/>
            {/*<BackgroundBoxes/>*/}
            <FeaturesSection/>
            <SpotlightTitle/>
            <ScrollPicture/>
            <LampTitle/>
            <StickyScrollRevealDemo/>
            <HeroHighlightDemo/>
            <AnimatedModalDemo/>
            <ThreeDCardDemo/>
            <CompareDemo/>
        </div>
    );
}
