import React from "react";
import "./AboutUs.css";
import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <Fade cascade damping={0.2} delay={100}>
                    <div className="typed-container">
                        <h1>
                            <span className="highlight">Possibility</span> to{" "}
                            <ReactTyped
                                strings={["Reality"]}
                                typeSpeed={100}
                                backSpeed={80}
                                backDelay={5000}
                                startDelay={500}
                                loop
                                className="typed-text"
                            />
                        </h1>
                    </div>
                    <div className="description">
                        <p className="intro">
                            Introducing LikeLion <span>UW-Madison</span>
                        </p>
                        <h2 className="slogan">
                            <span className="slogan-word">Create</span>
                            <span className="bullet">•</span>
                            <span className="slogan-word">Collaborate</span>
                            <span className="bullet">•</span>
                            <span className="slogan-word">Conquer</span>
                        </h2>
                        <p className="main-text">
                            LikeLion UW-Madison empowers individuals with
                            resources, mentorship, and a collaborative
                            environment to turn unique ideas into impactful
                            realities. We foster creativity, teamwork, and the
                            tools to bring your vision to life.
                        </p>
                        <p className="end-text">
                            Let's bring your ideas to life, together!
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default AboutUs;
