import React from "react";
import Github from "../components/Github";

const Project = ({title, description, github, skills, link}) => {
    return (
        <div className="flex flex-col gap-1 projects rounded-lg p-3 max-w-80 shadow-lg shadow-neutral-200">
            <div className="flex justify-between">
                <h3 className="flex flex-row gap-1 items-center font-semibold">
                    <a target="_blank" className={`flex hover:${link ? 'underline' : 'none'}`} href={link}>
                        {title}
                    </a>
                    {link && <span className="size-1 rounded-full bg-green-700"></span>}
                </h3>
                <div className="justify-end">
                    <Github link={github}/>
                </div>
            </div>
            <p className="text-[12px]">{description}</p>
            <div className="flex flex-wrap gap-1 mt-4">
                {skills.map(skill =>
                    <div className="rounded-[5px] bg-[#f3f4f6]">
                        <div className="font-mono text-[10px] font-semibold my-[2px] mx-[5px]">
                            {skill}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
