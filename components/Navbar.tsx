import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <div>
                <Image src={logo} alt="logo" />
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;
