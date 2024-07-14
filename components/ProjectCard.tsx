import Image from "next/image";
import React from "react";
import reelIcon from "@/public/reel-icon.svg";
import { FaPlay } from "react-icons/fa";

interface cardData {
    name: string;
    img: string;
}

interface Props {
    projectCard: cardData;
}

const ProjectCard: React.FC<Props> = ({ projectCard }) => {
    return (
        <div className="group w-[18rem] h-[26rem] relative rounded-2xl cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden h-full">
                <Image
                    src={projectCard.img}
                    alt="Card image"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* For shadow on hover */}
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-40 transition-opacity h-full w-full bg-black" />

                <div className="absolute bottom-0 h-20 w-full rounded-xl backdrop-blur-3xl" />
                <p className="absolute bottom-0 text-white text-2xl p-3">
                    {projectCard.name}
                </p>
                <div className="absolute cursor-pointer top-3 right-3 p-2.5 rounded-full bg-bgPrimary opacity-80 bg-transparent/80">
                    <Image src={reelIcon} alt="reelIcon" />
                </div>

                <div className="absolute top-[41%] left-[40%] hidden group-hover:block group-hover:translate-x-1 group-hover:delay-150">
                    <div
                        className="border rounded-full p-6 border-gray-500 
                    bg-bgPrimary opacity-75"
                    >
                        <FaPlay className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
