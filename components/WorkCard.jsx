import React from "react";

const WorkCard = ({link, title, remote, date, introduce, description, tech}) => {
    return (
        <>
            <div className="w-full lg:items-center items-start flex lg:flex-row flex-col justify-between mt-4">
                <div className="flex flex-row items-center gap-2">
                    <h2 className={`flex font-semibold hover:${link ? 'underline' : 'none'} text-[17px] font-semibold`}>
                        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    </h2>
                    <div
                        className={`py-[3px] px-[4px] font-semibold rounded-[7px] bg-${remote ? "[#f3f4f6]" : 'white'}`}>
                        <div className="font-mono text-[12px]">
                            {remote ? "Remote" : null}
                        </div>
                    </div>
                </div>
                <div className="text-sm tracking-widest text-gray-500">{date}</div>
            </div>
            <div className="flex font-mono mb-1 text-[14px]">
                {introduce}
            </div>
            <ul>
                {description && description.map((item, index) => (
                    <li key={index} className="list-disc ml-5">
                        <p className="text-xs/[18px]">{item}</p>
                    </li>
                ))
                }
            </ul>

            {tech && <p className="pt-2 text-[12px] font-thin">
                <span className="font-semibold">Tech: </span>
                {tech}
            </p>
            }
        </>
    );
};

export default WorkCard;
