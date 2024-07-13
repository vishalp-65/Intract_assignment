import HeroSection from "@/components/HeroSection";
import LearnerNFT from "@/components/LearnerNFT";
import Navbar from "@/components/Navbar";
import Quests from "@/components/Quests";
import heroBg from "@/public/images/hero_bg.png";
import Image from "next/image";

export default function Home() {
    return (
        <div className="text-white font-sans">
            <Navbar />
            <div
                className="bg-cover bg-center h-screen mt-16"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            >
                <HeroSection />

                <div className="px-10 mt-[-6rem] relative z-10">
                    <Quests />
                    <div className="absolute bottom-32 right-14">
                        <LearnerNFT />
                    </div>
                </div>
            </div>
        </div>
    );
}
