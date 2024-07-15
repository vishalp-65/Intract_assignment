import { topCreator } from "@/utils/data";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const TopProjects = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-between gap-12">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-3xl text-center md:text-start text-gray-200 font-semibold">
                    Top Crypto Creators and Projects to Follow
                </p>
                <p className="text-gray-400">
                    Answers to your crypto doubts, straight from the experts
                </p>
            </div>

            {/* Project cards */}
            <div className="flex flex-wrap items-center justify-evenly gap-4">
                {topCreator.map((item, ind) => (
                    <ProjectCard key={ind} projectCard={item} />
                ))}
            </div>
        </div>
    );
};

export default TopProjects;
