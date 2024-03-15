import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faJs,
    faPython,
    faJava,
    faHtml5,
    faCss3,
    faReact,
    faAngular,
    faDocker,
    faMicrosoft,
    faGit,
    faGithub,
    faGitlab
} from '@fortawesome/free-brands-svg-icons';
import {
    SiApachekafka,
    SiExpress,
    SiGraphql, SiJest, SiKubernetes, SiMongodb,
    SiMysql, SiNodedotjs, SiPostgresql, SiRobotframework,
    SiTypescript
} from "@icons-pack/react-simple-icons";
import "./styles/slider.css";

const Slider = () => {

    return (
        <div className="skills-container">
            <div className="skills-title">
                Technical Skills
            </div>

            <ul className="skills-list">
                <li>
                    <FontAwesomeIcon icon={faJs}/> JavaScript
                </li>
                <li>
                    <SiTypescript size={13.5}/> TypeScript
                </li>
                <li>
                    <FontAwesomeIcon icon={faPython}/> Python
                </li>
                <li>
                    <FontAwesomeIcon icon={faJava}/> Java
                </li>
                <li>
                    <SiMysql size={13.5}/> SQL
                </li>
                <li>
                    <FontAwesomeIcon icon={faHtml5}/> HTML
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3}/> CSS
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact}/> React
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngular}/> Angular
                </li>
                <li>
                    <SiNodedotjs size={13.5}/> Node
                </li>
                <li>
                    <SiExpress size={13.5}/> Express
                </li>
                <li>
                    <SiGraphql size={13.5}/> GraphQL
                </li>
                <li>
                    <SiApachekafka size={13.5}/> Kafka
                </li>
                <li>
                    <SiMongodb size={13.5}/> MongoDB
                </li>
                <li>
                    <SiPostgresql size={13.5}/> PostgreSQL
                </li>
                <li>
                    <FontAwesomeIcon icon={faDocker}/> Docker
                </li>
                <li>
                    <SiKubernetes size={13.5}/> Kubernetes
                </li>
                <li>
                    <FontAwesomeIcon icon={faMicrosoft}/> Azure
                </li>
                <li>
                    <SiJest size={13.5}/> Jest
                </li>
                <li>
                    <SiRobotframework size={13.5}/> Robot Framework
                </li>
                <li>
                    <FontAwesomeIcon icon={faGit}/> Git
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub}/> GitHub
                </li>
                <li>
                    <FontAwesomeIcon icon={faGitlab}/> GitLab
                </li>
            </ul>
        </div>
    );
};

export default Slider;
