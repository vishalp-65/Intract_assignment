import Image from "next/image";
import React from "react";
import web3 from "@/public/images/web3.png";
import { IoBookOutline } from "react-icons/io5";

type Props = {};

const CryptoDictionary = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-3xl text-gray-200 font-semibold">
                    Crypto Dictionary
                </p>
                <p className="text-gray-400">
                    Your one-stop to catch up on all crypto terms
                </p>
            </div>

            <div className="relative flex items-center justify-center rounded-xl">
                <Image src={web3} alt="web3 image" className="rounded-xl" />

                <div className="absolute bottom-3 right-5 p-5 rounded-full bg-bgPrimary border border-gray-700 opacity-60">
                    <IoBookOutline className="w-6 h-6" />
                </div>

                <div className="absolute bottom-1 left-2 blur-3xl bg-black w-80 h-20" />

                <div className="absolute bottom-3 left-3 flex flex-col items-start justify-between gap-0.5">
                    <p className="text-2xl text-gray-300 font-semibold">
                        Web3 + Degen Glossary
                    </p>
                    <p className="text-gray-400">Your own crypto dictionary</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoDictionary;
