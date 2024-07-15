import Image from "next/image";
import React from "react";
import { FaDiscord, FaRegClock } from "react-icons/fa";
import earndrop from "@/public/gif/earndrop.gif";
import arrowImage from "@/public/arrow_icon.svg";
import { MdDone } from "react-icons/md";
import { Button } from "./ui/button";
import { BsInfoCircle } from "react-icons/bs";
import CountdownTimer from "./CountdownTimer";

type Props = {};

const Community = (props: Props) => {
    return (
        <div className="flex items-end justify-end mr-[10%]">
            <div className="sm:flex sm:flex-col md:flex md:flex-row items-start justify-between gap-20">
                <div className="w-[21rem]">
                    <div className="p-4 border border-gray-700 rounded-lg bg-bgPrimary">
                        {/* Rewards */}
                        <div className="flex flex-col justify-between items-start gap-3">
                            <div className="flex items-center justify-start gap-3">
                                <div className="p-1 rounded-full bg-[#202020]">
                                    <FaRegClock className="h-3 w-3 text-yellow-700 " />
                                </div>
                                <p>Reward unlocks in</p>
                            </div>
                            <div className="border border-dashed w-full border-gray-400"></div>
                            <CountdownTimer />
                        </div>
                    </div>
                    <div
                        className="mt-4 text-gray-400 p-4 border border-gray-700 rounded-lg bg-bgPrimary flex 
                    flex-col items-start justify-between gap-3"
                    >
                        {/* Exclusive */}
                        <div className="relative">
                            <Image
                                src={earndrop}
                                alt="earndrop"
                                className="rounded-lg"
                            />
                            <div className="absolute top-3 right-3 px-1 py-0.5 bg-bgColour opacity-75 rounded-md">
                                <p className="text-gray-200">Lucky Draw</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <p>Exclusive Community</p>
                            <div className="flex items-center justify-evenly gap-1">
                                <div className="p-1 rounded-full bg-blue-500">
                                    <FaDiscord className="w-2.5 h-2.5 text-white" />
                                </div>
                                <p className="text-white font-semibold">
                                    Earndrop
                                </p>
                            </div>
                        </div>
                        <div className="border border-dashed w-full border-gray-400"></div>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-sm">
                                Complete all Essential quests
                            </p>
                            <div className="p-1 bg-[#202020] rounded-full">
                                <MdDone className="w-3 h-3" />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <p className="text-nowrap text-sm">
                                Complete at least 1 Alpha Hub quest today
                            </p>
                            <div className="p-1 bg-[#202020] rounded-full">
                                <MdDone className="w-3 h-3" />
                            </div>
                        </div>

                        {/* Button */}
                        <Button className="group flex gap-3 w-full bg-buttonColour opacity-75 hover:opacity-90 hover:bg-buttonColour">
                            <div className="flex items-center gap-2 justify-center group-hover:translate-x-1 group-hover:duration-150">
                                Claim Now <Image src={arrowImage} alt="arrow" />{" "}
                            </div>
                        </Button>
                    </div>
                </div>

                <div
                    className="w-[21rem] border border-gray-600 rounded-md bg-bgPrimary 
                text-gray-400 mt-16"
                >
                    <div className="flex items-center justify-start gap-1.5 border-b border-gray-600 py-3 px-5">
                        <p className="text-sm">Reward info</p>
                        <BsInfoCircle className="w-3.5 h-3.5" />
                    </div>

                    <div className="px-5 py-6 flex flex-col items-start justify-between gap-4">
                        <p className="text-gray-300">
                            Free access to paid KOL (crypto earning)
                            communities!
                        </p>
                        <p className="text-sm">
                            Win access to exclusive earning communities of some
                            of the the greatest earners in crypto for a month,
                            every 24 hours. Get access to unmatched insights, a
                            close-knit community of the best airdrop earners,
                            and more.
                        </p>
                        <p className="text-sm">
                            To win: make sure you have connected your Twitter
                            and Discord accounts - and follow our criteria!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
