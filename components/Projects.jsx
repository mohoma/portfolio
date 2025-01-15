import React from "react";

const Projects = ({title, description, skills, link}) => {
    return (
        <div className="flex flex-col gap-1 projects rounded-lg p-3">
            <h3 className="flex flex-row gap-1 items-center font-semibold">
                <a target="_blank" className={`flex hover:${link ? 'underline' : 'none'}`} href={link}>
                    {title}
                </a>
                <span className={`size-1 rounded-full bg-${link ? 'green-700' : 'white'}`}></span>
            </h3>
            <p className="text-[12px]">{description}</p>
            <div className="flex flex-wrap gap-1 mt-4">
                {skills.map(skill =>
                    <div className={`rounded-[5px] bg-${skills ? "[#f3f4f6]" : '[#fff]'}`}>
                        <div className="font-mono text-[10px] font-semibold my-[2px] mx-[5px]">
                            {skill}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
