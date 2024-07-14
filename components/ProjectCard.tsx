import Image from "next/image";
import React from "react";
import reelIcon from "@/public/reel-icon.svg";

interface cardData {
    name: string;
    img: string;
}

interface Props {
    projectCard: cardData;
}

const ProjectCard: React.FC<Props> = ({ projectCard }) => {
    return (
        <div className="w-[20rem] h-[28rem] relative rounded-2xl">
            <div className="relative rounded-2xl overflow-hidden h-full">
                <Image
                    src={projectCard.img}
                    alt="Card image"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 h-32 blur-2xl bg-gray-800 w-full">
                    Vishal
                </div>
                <p className="absolute bottom-0 text-white text-2xl font-semibold px-2">
                    {projectCard.name}
                </p>
                <div className="absolute cursor-pointer top-3 right-3 p-2.5 rounded-full bg-bgPrimary opacity-80 bg-transparent/80">
                    <Image src={reelIcon} alt="reelIcon" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
