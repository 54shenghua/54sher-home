import Hero from "@/components/hero"
import Features from "@/components/features"
import Projects from "@/components/projects"
import Team from "@/components/team"
import TechStack from "@/components/tech-stack"
import Recruitment from "@/components/recruitment"
import Timeline from "@/components/timeline"
import QuickLinks from "@/components/quick-links"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Hero/>
            <Features/>
            <Timeline/>
            <Projects/>
            {/*<Team />*/}
            <TechStack/>
            <Recruitment/>
            <QuickLinks/>
        </main>
    )
}

