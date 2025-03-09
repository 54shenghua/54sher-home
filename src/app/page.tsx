import {Navbar} from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import {SpotlightSection} from "@/components/spotlight-section"
import {ProjectsSection} from "@/components/projects-section"
import {DepartmentSection} from "@/components/department-section"
import {TeamSection} from "@/components/team-section"
import {JoinUsSection} from "@/components/join-us-section"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <HeroSection/>
            <SpotlightSection/>
            <ProjectsSection/>
            <DepartmentSection/>
            <TeamSection/>
            <JoinUsSection/>
            <Footer/>
        </main>
    )
}

