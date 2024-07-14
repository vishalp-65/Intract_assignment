import Community from "@/components/Community";
import CryptoDictionary from "@/components/CryptoDictionary";
import HeroSection from "@/components/HeroSection";
import LearnerNFT from "@/components/LearnerNFT";
import Navbar from "@/components/Navbar";
import Quests from "@/components/Quests";
import TopProjects from "@/components/TopProjects";
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

                <div className="relative flex items-center justify-center mt-20">
                    <div className="bg-[#dbd7fb] absolute -z-10 h-3 w-full blur-3xl" />
                    <div className="border border-[#424242] w-full" />
                </div>

                <div className="mt-20">
                    <TopProjects />
                </div>

                {/* Line break */}
                <div className="w-full border border-gray-800 mt-14" />

                <div className="mt-16">
                    <CryptoDictionary />
                </div>

                {/* For testing */}
                <div className="mt-96">
                    <p>Vishal</p>
                </div>
            </div>
        </div>
    );
}
