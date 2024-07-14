import React from "react";

type Props = {};

const FloatButton = (props: Props) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-72 flex bg-gray-800/15 items-center rounded-full border border-gray-700 backdrop-blur-md">
                <div
                    className="w-36 font-semibold px-3 py-1 text-whit cursor-pointer 
                 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-md"
                >
                    <p>Essentials</p>
                </div>
                <div
                    className="w-36 font-semibold px-3 py-1 cursor-pointer text-gray-400 rounded-full 
                flex justify-center items-center hover:bg-white/10 hover:text-gray-300"
                >
                    <p>Alpha Hub</p>
                </div>
            </div>
        </div>
    );
};

export default FloatButton;
