import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

import "./styles/experienceBox.css";

const ExperienceBox = (props) => {
    const {logo, title, duration, role, description,linkText, link} = props;

    return (
        <React.Fragment>
            <div className="exp">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                    <div className="exp-container">
                        <div className="exp-logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="exp-title">{title}</div>
                        <div className="exp-role">{role}</div>
                        <div className="exp-duration">{duration}</div>
                        <div className="exp-description">{description}</div>
                        <div className="exp-link">
                            <div className="exp-link-icon">
                                <FontAwesomeIcon icon={faLink}/>
                            </div>
                            <div className="exp-link-text">{linkText}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default ExperienceBox;
