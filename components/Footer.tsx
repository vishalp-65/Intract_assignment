import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div
            className="border-t border-t-gray-700 flex mt-16 pt-16 flex-col items-center 
        justify-evenly py-8 px-2 bg-black"
        >
            <div className="flex flex-wrap items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-between gap-5">
                    <Image src={logo} alt="logo" />
                    <p className="w-[60%] text-gray-400 text-sm">
                        We are your personal guide for exploring web3 projects &
                        earning 100x rewards
                    </p>
                </div>
                <div className="flex flex-wrap justify-between items-start gap-10">
                    <div className="flex items-start justify-evenly flex-wrap gap-10">
                        <div className="flex flex-col items-start justify-between gap-2 text-gray-400">
                            <p className="text-white text-base">INTRACT</p>
                            <p>Explore Quests</p>
                            <p>Comunities</p>
                            <p>Alpha Hub</p>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2 text-gray-400">
                            <p className="text-white text-base">EARN</p>
                            <p>Refer & Earn</p>
                            <p>Leaderboard</p>
                            <p>Achievements</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-evenly flex-wrap gap-10">
                        <div className="flex flex-col items-start justify-between gap-2 text-gray-400">
                            <p className="text-white text-base">ABOUT</p>
                            <p>Product Roadmap</p>
                            <p>Affiliate Program</p>
                            <p>Sign up Program</p>
                            <p>Growth Community</p>
                            <p>Blogs</p>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2 text-gray-400">
                            <p className="text-white text-base">SUPPORT</p>
                            <p>Help Center</p>
                            <p>Create your quest</p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Community Guidelines</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 broder border-gray-700 w-full bg-gray-800 h-0.5" />

            <div className="py-14 w-full px-2">
                <p className="text-gray-400 text-wrap">
                    <span className="text-gray-100">Disclaimer: </span>Crypto
                    Products, Virtual Digital Assets, and NFTs are unregulated
                    and can be highly risky. There may be no regulatory recourse
                    for any loss from such transactions. We advise the viewer to
                    proceed with caution. Nothing in this website or any
                    communication published by us amounts to, is intended to be,
                    or should be construed as investment or purchase advice of
                    any kind or financial advice or promotion under any
                    applicable laws. Any decision made based on the content
                    provided on this website or any communication published by
                    us shall not be attributable to us.
                </p>
            </div>

            {/* <div className="mt-8 broder border-gray-700 w-full bg-gray-800 h-0.5" /> */}
        </div>
    );
};

export default Footer;
