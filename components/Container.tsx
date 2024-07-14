import React from "react";
import HeroSection from "./HeroSection";
import heroBg from "@/public/images/hero_bg.png";
import Quests from "./Quests";
import { learnerNFTData, questsData } from "@/utils/data";
import LearnerNFT from "./LearnerNFT";
import Community from "./Community";
import TopProjects from "./TopProjects";
import CryptoDictionary from "./CryptoDictionary";
import FloatButton from "./FloatButton";
import Footer from "./Footer";

type Props = {};

const Container = (props: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full">
            <div
                className="bg-cover min-w-full bg-center h-screen mt-16"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            >
                <HeroSection />

                <div className="w-screen md:max-w-[100rem] flex items-center justify-center">
                    <div className="w-full sm:flex sm:flex-col sm:items-center sm:justify-center">
                        <div className="px-1 md:px-10 mt-[-6rem] relative z-3">
                            <Quests questsData={questsData[0]} />
                            <div className="absolute bottom-0 right-3 md:right-14 mt-[22rem] md:mt-40">
                                <LearnerNFT learnerData={learnerNFTData[0]} />
                            </div>
                        </div>
                        <div className="px-1 md:px-10 relative mt-[22rem] md:mt-[16rem]">
                            <div className="absolute bottom-0 right-[23%]">
                                <Quests questsData={questsData[1]} />
                            </div>
                            <LearnerNFT learnerData={learnerNFTData[1]} />
                        </div>
                        <div className="mt-16">
                            <Community />
                        </div>
                    </div>
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

                <div className="mt-10">
                    <CryptoDictionary />
                </div>

                <div className="mt-16 w-full">
                    <Footer />
                </div>
            </div>
            {/* <div className="bottom-7 fixed z-50">
                <FloatButton />
            </div> */}
        </div>
    );
};

export default Container;
