import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import live_tv from "@/public/live_tv.svg";
import { navBarNames } from "@/utils/data";
import { BiSearch } from "react-icons/bi";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 flex justify-evenly items-center gap-2 h-16 
        bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[1rem] border-b border-gray-700"
        >
            {/* Name logo */}
            <div>
                <Image src={logo} alt="logo" />
            </div>

            {/* Navbar links */}
            <div className="flex items-center justify-center gap-2 text-gray-200">
                {navBarNames.map((item, ind) => (
                    <div key={ind} className="flex items-center">
                        <p className="p-3">{item.name}</p>
                        {item.name === "Academy" ? (
                            <div className="rounded-md bg-blue-700 p-0.5 ml-[-8px] text-xs">
                                <p>New</p>
                            </div>
                        ) : (
                            <p></p>
                        )}
                    </div>
                ))}
            </div>

            {/* Search bar */}
            <div
                className="flex w-[25%] px-3 py-2 items-center justify-start rounded-full 
            gap-3 bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border border-gray-700"
            >
                <BiSearch className="h-6 w-6" />
                <input
                    className="bg-transparent bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
                    placeholder="Search for ecosystem,trending quests etc."
                />
            </div>

            {/* Auth buttons */}
            <div className="flex items-center justify-center gap-4">
                <div className="rounded-full p-3 border border-yellow-700">
                    <Image src={live_tv} alt="live_tv" />
                </div>
                <Button variant="white">Sign In</Button>
            </div>
        </div>
    );
};

export default Navbar;
