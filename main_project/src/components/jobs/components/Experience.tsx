import React from "react";

interface ExperienceProps {
  company?: string;
  location?: string;
  jobTitle?: string;
  description?: string;
}

const Experience: React.FC<ExperienceProps> = ({ company, location }) => {
  return (
    <>
      <h2 className="c0" id="h.rfgvkg2ifhfd">
        <span className="c13">{company}, </span>
        <span className="c13 c3">{location}</span>
        <span className="c3">&nbsp;— </span>
        <span className="c3 c9">Job Title</span>
      </h2>
      <h3 className="c21" id="h.n64fgzu3lwuy">
        <span>MONTH 20XX - PRESENT</span>
      </h3>
      <p className="c7">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh.
        </span>
      </p>
    </>
  );
};

export default Experience;
