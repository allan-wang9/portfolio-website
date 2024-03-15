import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import Nav from "../components/common/nav";
import Logo from "../components/common/logo";
import Slider from "../components/common/slider";
import ExperienceCardList from "../components/experience/experienceCardList";
import ExperienceBoxGrid from "../components/experience/experienceBoxGrid";
import ProjectBoxGrid from "../components/projects/projectBoxGrid";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "experience");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Experience | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="experience-page">
                <Nav active="experience"/>
                <div className="content-wrapper">
                    <div className="experience-ghost-container">
                        <div className="experience-ghost-logo">
                            <Logo width={45}/>
                        </div>
                    </div>
                    <div className="experience-container">
                        <div className="title experience-title">
                            Take a deep dive into my work experience and personal projects!
                        </div>

                        <div className="subtitle experience-subtitle">
                            Over the past few years, I have worked on highly innovative teams
                            that developed real world solutions through software engineering. I
                            have experience in full stack software development, automation
                            engineering and microservices architecture. In my free time, I strive to learn
                            new skills through my personal projects to stay adaptive to
                            new emerging trends.
                        </div>

                        <div className="sliding-skills">
                            <Slider/>
                        </div>

                        <div className="work-experience-subtitle">
                            Work Experience
                        </div>

                        <div className="work-experience-card-box">
                            <ExperienceCardList/>
                        </div>

                        <div className="enterprise-apps-subtitle">
                            Enterprise Projects
                        </div>

                        <div className="experience-box-grid">
                            <ExperienceBoxGrid/>
                        </div>

                        <div className="projects-subtitle">
                            Personal Projects
                        </div>

                        <div className="projects-box-grid">
                            <ProjectBoxGrid/>
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Experience;
