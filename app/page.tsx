import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
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
            </div>
        </div>
    );
}
