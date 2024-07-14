import Community from "@/components/Community";
import HeroSection from "@/components/HeroSection";
import LearnerNFT from "@/components/LearnerNFT";
import Navbar from "@/components/Navbar";
import Quests from "@/components/Quests";
import heroBg from "@/public/images/hero_bg.png";
import { learnerNFTData, questsData } from "@/utils/data";

export default function Home() {
    return (
        <div className="text-white font-sans">
            <Navbar />
            <div
                className="bg-cover bg-center h-screen mt-16"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            >
                <HeroSection />

                <div className="px-10 mt-[-6rem] relative z-3">
                    <Quests questsData={questsData[0]} />
                    <div className="absolute bottom-0 right-14">
                        <LearnerNFT learnerData={learnerNFTData[0]} />
                    </div>
                </div>
                <div className="px-10 relative mt-[16rem]">
                    <div className="absolute bottom-0 right-[23%]">
                        <Quests questsData={questsData[1]} />
                    </div>
                    <LearnerNFT learnerData={learnerNFTData[1]} />
                </div>

                <div className="mt-16">
                    <Community />
                </div>

                {/* For testing */}
                <div className="mt-96">
                    <p>Vishal</p>
                </div>
            </div>
        </div>
    );
}
