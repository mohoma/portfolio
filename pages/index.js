import React from "react";
import World from "../components/World";
import Email from "../components/Email";
import Github from "../components/Github";
import Linkedin from "../components/Linkedin";
import X from "../components/X";
import HeadTitle from "../components/HeadTitle";
import WorkCard from "@/components/WorkCard";
import Skills from "@/components/Skills";
import {skills, experiences} from "@/components/constants";

const HomePage = () => {
    return (
        <div>
            {/* Name & Pic */}

            <div className="flex flex-row justify-between items-center  ">
                <div className="flex flex-col gap-2 pr-36 Introduction-text">
                    <h1 className="text-2xl font-bold">Mazin Mazinani</h1>
                    <p>
                        Software Engineer | Java & Spring
                    </p>
                    <a
                        className="w-full hover:underline"
                        href="https://maps.app.goo.gl/Q9gPE5vDsuLruQfA8"
                    >
                        <div className="w-full flex flex-row items-center gap-2">
                            <World/>
                            <p className="text-[13px]">Istanbul, Turkey</p>
                        </div>
                    </a>
                    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                        <Email/>
                        {/*<Phone/>*/}
                        <Github/>
                        <Linkedin/>
                        <X/>
                    </div>
                </div>
                <div className="pic-size">
                    <img
                        src="/images/mo.png"
                        alt="profile picture"
                        className="rounded-[15px] w-full"
                    />
                </div>
            </div>


            {/* About section */}

            <div className="w-full flex flex-col mt-7 gap-3 ">
                <HeadTitle title="About"/>
                <p>
                    A software engineer with over 6 years of experience,
                    specializing in core Java and the Spring Ecosystem,
                    as well as Identity and Access Management (IAM) systems.
                </p>
            </div>

            {/* Work Experience Section */}

            <div className="flex flex-col w-full mt-6">
                <HeadTitle title="Work Experience"/>
                {experiences.map(e => (
                    <WorkCard
                        remote={e.remote}
                        title={e.title}
                        link={e.link}
                        date={e.date}
                        introduce={e.introduce}
                        description={e.description}
                        tech={e.tech}
                    />
                ))}
            </div>

            <div className="mt-6 flex flex-col">
                <HeadTitle title="Education"/>
                <WorkCard title="Shahid Beheshti University (SBU) / Tehran-Iran" date="2012 - 2016"/>
                <p>Bachelor's Degree in Software Engineering</p>
            </div>

            <div className="w-full mt-6">
                <HeadTitle title="Skills"/>
            </div>
            <div className="flex flex-wrap w-full items-center gap-1 mt-3">
                {skills.map((item, index) => (
                    <Skills key={index} title={item}/>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
