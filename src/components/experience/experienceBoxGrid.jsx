import React from "react";
import ExperienceBox from "./experienceBox";
import INFO from "../../data/user";
import "./styles/experienceBoxGrid.css";


const ExperienceBoxGrid = () => {
    return (
        <div className="all-experience-container">
            {INFO.enterprise.map((exp, index) => (
                <div className="all-experience-experience" key={index}>
                    <ExperienceBox
                        logo={exp.logo}
                        title={exp.title}
                        role={exp.role}
                        duration={exp.duration}
                        description={exp.description}
                        linkText={exp.linkText}
                        link={exp.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default ExperienceBoxGrid;
