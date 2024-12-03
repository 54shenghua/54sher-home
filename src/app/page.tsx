import Image from "next/image";
import {WobbleCardDemo} from "@/components/WobbleCardDemo";
import {ThreeDCardDemo} from "@/components/ThreeDCardDemo";
import {CompareDemo} from "@/components/CompareDemo";
import TitleAnimation from "@/components/home/TitleAnimation";
import {FeaturesSection} from "@/components/home/FeaturesSection";
import {BackgroundBoxes} from "@/components/home/BackgroundBoxes";
import {SpotlightTitle} from "@/components/home/SpotlightTitle";
import {ScrollPicture} from "@/components/home/ScrollPicture";

export default function Home() {
    return (
        <div className="dark">
            <TitleAnimation/>
            {/*<BackgroundBoxes/>*/}
            <FeaturesSection/>
            <SpotlightTitle/>
            <ScrollPicture/>
            <ThreeDCardDemo/>
            <CompareDemo/>
        </div>
    );
}
