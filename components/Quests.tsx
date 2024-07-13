"use client";
import Image from "next/image";
import React, { useState } from "react";
import crypto from "@/public/images/crypto.png";
import coinImg from "@/public/coin.svg";
import { VscTriangleUp } from "react-icons/vsc";

type Props = {};

const Quests = (props: Props) => {
    const [isUp, setIsUp] = useState(true);

    const togglePosition = () => {
        setIsUp((prev) => !prev);
    };

    return (
        <div
            className="relative w-[29rem] bg-[#151515] border-gray-300 p-5 cursor-pointer rounded-2xl hover:bg-[#232323]"
            onClick={togglePosition}
        >
            <div className="flex justify-between items-center gap-6">
                <div className="p-2 rounded-2xl border border-gray-700">
                    <Image
                        src={crypto}
                        alt="crypto"
                        className="object-cover rounded-2xl w-40 h-36"
                    />
                </div>
                <div className="flex flex-col justify-between items-start gap-5">
                    <p className="text-2xl font-semibold">Basics of Crypto</p>
                    <p className="text-gray-300 text-wrap text-sm">
                        The safest and easiest piace to start your crypto
                        journey!
                    </p>

                    <div className="flex bg-[#2e2e2e] items-center justify-center rounded-full px-2 py-1 gap-1">
                        <Image
                            src={coinImg}
                            alt="coin Image"
                            className="w-4 h-4"
                        />
                        <p className="text-sm text-gray-300">1490 XPs</p>
                    </div>
                </div>
            </div>
            <div
                className={`absolute right-4 top-4 transform transition-transform duration-300 cursor-pointer ${
                    isUp ? "rotate-0" : "rotate-180"
                }`}
            >
                <VscTriangleUp className="text-white" />
            </div>
        </div>
    );
};

export default Quests;
