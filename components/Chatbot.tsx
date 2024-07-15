import React from "react";
import chatBotImg from "@/public/chatbot.svg";
import Image from "next/image";

type Props = {};

const Chatbot = (props: Props) => {
    return (
        <div className="p-3 text-black bg-white rounded-full">
            <Image src={chatBotImg} alt="chatbot" className="h-6 w-6" />
        </div>
    );
};

export default Chatbot;
