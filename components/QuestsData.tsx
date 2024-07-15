import Image from "next/image";
import React from "react";
import { MdDone } from "react-icons/md";

interface Quest {
    name: string;
    tasks: string;
    img: string;
}

interface Props {
    questsData: Quest[];
}

const QuestsData: React.FC<Props> = ({ questsData }) => {
    return (
        <div
            className="bg-[#101010] flex flex-col gap-2 p-3 w-[23rem] md:w-[31rem] text-gray-400 h-[22rem] 
        overflow-y-scroll rounded rounded-b-3xl"
        >
            {questsData.map((quest, index) => (
                <div
                    key={index}
                    className="flex bg-[#171717] rounded-xl justify-between items-center gap-4 px-3 
                    py-2 hover:bg-[#202020] cursor-pointer"
                >
                    <Image
                        src={quest.img}
                        alt={quest.name}
                        width={120}
                        height={120}
                        className="object-cover rounded-xl"
                    />
                    <div className="flex flex-col w-[50%] items-start justify-between gap-5">
                        <p className="font-bold text-nowrap overflow-hidden">
                            #{index}: {quest.name}
                        </p>
                        <div className="w-full border border-b-gray-500 border-dashed"></div>
                        <div className="flex w-full items-center gap-2">
                            <p className="text-sm text-gray-500 text-nowrap">
                                {quest.tasks} Tasks
                            </p>
                            <div className="w-full py-1.5 border rounded-full border-gray-600 bg-[#252525] shadow-inner transition-shadow shadow-black" />
                        </div>
                    </div>
                    <div className="bg-[#282828] p-1 rounded-full mt-16">
                        <MdDone />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuestsData;
