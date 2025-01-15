import React from "react";

const Skills = ({title}) => {
  return (
    <div className="bg-[#414652] py-[2px] px-[9px] rounded-[7px]">
      <div
        className="font-mono text-[12px] font-semibold text-white">
        {title}
      </div>
    </div>
  );
};

export default Skills;
