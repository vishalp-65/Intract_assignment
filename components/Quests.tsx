"use client";
import Image from "next/image";
import React, { useState } from "react";
import coinImg from "@/public/coin.svg";
import { VscTriangleUp } from "react-icons/vsc";
import QuestsData from "./QuestsData";
import { questsData } from "@/utils/data";

interface Questses {
    name: string;
    tasks: string;
    img: string;
}

interface Quest {
    name: string;
    descrption: string;
    img: string;
    xp: string;
    totalQuests: string;
    questses: Questses[];
}

interface Props {
    questsData: Quest;
}

const Quests: React.FC<Props> = ({ questsData }) => {
    const [isUp, setIsUp] = useState(false);

    const togglePosition = () => {
        setIsUp((prev) => !prev);
    };

    return (
        <div className="w-screen md:w-[31rem]">
            <div
                className={`relative bg-bgPrimary opacity-90 border-gray-300 p-5 cursor-pointer
                 hover:bg-[#232323] z-40 ${isUp} ? rounded-t-2xl rounded-b-none: rounded-2xl`}
                onClick={togglePosition}
            >
                <div className="flex justify-between items-center gap-6">
                    <div className="p-2 rounded-2xl border border-gray-700">
                        <Image
                            src={questsData.img}
                            alt="crypto"
                            width={160}
                            height={144}
                            className="object-cover rounded-2xl w-40 h-36"
                        />
                    </div>
                    <div className="flex flex-col justify-between items-start gap-5">
                        <p className="text-2xl font-semibold">
                            {questsData.name}
                        </p>
                        <p className="text-gray-300 text-wrap text-sm">
                            {questsData.descrption}
                        </p>

                        <div className="flex bg-[#2e2e2e] items-center justify-center rounded-full px-2 py-1 gap-1">
                            <Image
                                src={coinImg}
                                alt="coin Image"
                                className="w-4 h-4"
                            />
                            <p className="text-sm text-gray-300">
                                {questsData.xp} XPs
                            </p>
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
            {isUp ? (
                <div className="block">
                    <QuestsData questsData={questsData.questses} />
                </div>
            ) : (
                <div className="invisible">
                    <QuestsData questsData={questsData.questses} />
                </div>
            )}
        </div>
    );
};

export default Quests;
