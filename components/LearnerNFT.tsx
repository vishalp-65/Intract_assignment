import { learnerNFTData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { MdDone } from "react-icons/md";
import { Button } from "./ui/button";
import { IoMdLock } from "react-icons/io";

type Props = {};

const LearnerNFT = (props: Props) => {
    return (
        <div className="flex flex-col items-start justify-between gap-3">
            <div className="flex relative flex-col items-center justify-between gap-3">
                <div className="text-gray-500 p-4 rounded-full border border-gray-600">
                    <MdDone />
                </div>
                <div className="border relative border-gray-600 rounded-2xl p-2">
                    <Image
                        src={learnerNFTData[0].img}
                        alt="NFT image"
                        width={150}
                        height={200}
                        className="rounded-2xl"
                    />
                    <div className="absolute bottom-[-10px] right-[-10px] p-4 rounded-full bg-bgPrimary border border-gray-600">
                        <IoMdLock className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-xl">{learnerNFTData[0].name}</p>
            <p className="text-gray-600">{learnerNFTData[0].description}</p>

            <Button
                variant="ghost"
                className="bg-bgPrimary px-16 cursor-not-allowed text-gray-400 hover:bg-bgPrimary hover:text-gray-400"
            >
                Claim
            </Button>
        </div>
    );
};

export default LearnerNFT;
