import React from 'react';
import SkillDetail from './SkillDetail';

import me from '../bg-image/me.jpg';

export default function About() {
    return (
        <section id="about">
            <h1 className="heading" style={{ color: "white" }}>About</h1>
            <div className="rule" style={{ backgroundColor: "white" }}></div>
            <p>Self-driven and collaborative early career software developer with practical experience in various industry sectors
                including telecommunications and ecommerce. Strong capability in HTML, CSS, JavaScript/Typescript and frameworks including Angular and React. Passionate
                about taking on new challenges and building interactive web applications.</p>

            <div className="about-me-wrapper">
                <div className="image-wrapper">
                    <img src={me} alt="me" />
                </div>
                <div className="skills">
                    <div className="skills-wrapper">
                        <h1 style={{ marginBottom: "20px" }}>Skills</h1>
                        <SkillDetail skillName="CSS" percentage="90" width="90%" />
                        <SkillDetail skillName="HTML" percentage="90" width="90%" />
                        <SkillDetail skillName="Javascript" percentage="90" width="90%" />
                        <SkillDetail skillName="Typescript" percentage="90" width="90%" />
                        <SkillDetail skillName="Angular 10+" percentage="90" width="80%" />
                        <SkillDetail skillName="React" percentage="80" width="80%" />
                        <SkillDetail skillName="Redux" percentage="80" width="80%" />
                        <SkillDetail skillName="Bootstrap" percentage="60" width="60%" />
                        <SkillDetail skillName="Node.js/Express" percentage="60" width="60%" />
                        <SkillDetail skillName="Python" percentage="75" width="75%" />
                        <SkillDetail skillName="Java" percentage="70" width="70%" />
                        <SkillDetail skillName="Github" percentage="70" width="70%" />
                    </div>
                </div>
            </div>
        </section>
    )
}
