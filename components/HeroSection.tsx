import React from "react";
import { Button } from "./ui/button";
import arrowImage from "@/public/arrow_icon.svg";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-10">
            <div className="text-start">
                <p className="text-xl text-gray-200">Intract</p>
                <p className="font-serif text-6xl font-bold">Academy</p>
            </div>

            <p className="w-[40%] text-lg text-center text-gray-100 text-wrap font-semibold">
                Intract users{" "}
                <span className="text-gray-400">
                    have together made more than
                </span>{" "}
                $100 million{" "}
                <span className="text-gray-400">in web3. Join them and</span>{" "}
                learn how to earn crypto!
            </p>

            <Button className="group flex gap-3 w-60 bg-violet-700 hover:bg-violet-900 ">
                <div className="flex items-center gap-2 justify-center group-hover:translate-x-1 group-hover:duration-150">
                    Get Started <Image src={arrowImage} alt="arrow" />{" "}
                </div>
            </Button>
        </div>
    );
};

export default HeroSection;
