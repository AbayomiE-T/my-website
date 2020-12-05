import React from 'react';
import SkillDetail from './SkillDetail';

import me from '../bg-image/me.jpg';

export default function About() {
    return (
        <section id="about">
            <h1 className="heading">About</h1>
            <div className="rule"></div>
            <div className="content">
                <div className="about-me-container">
                    <div className="about-me">
                        <img src={me} alt="" />
                    </div>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Who am I?</h2>
                    <p>
                        It's "Ah-ba-yummy". I am a software developer based in Ottawa, Ontario. I have experience in both front-end and back-end developemnt. As a recent Computer Science graduate,
                        i'm ready to apply my skills to the software industry, take on new challenges and also learn from experts who have been in the field longer than I have. In my downtime, you can find me listening
                        to the same Smashing Pumpkins albums over again or enjoying video games.
                    </p>
                </div>

                <div className="skills">
                    <SkillDetail skillName="CSS" percentage="90" width="90%" />
                    <SkillDetail skillName="HTML" percentage="90" width="90%" />
                    <SkillDetail skillName="Javascript" percentage="90" width="90%" />
                    <SkillDetail skillName="React" percentage="80" width="80%" />
                    <SkillDetail skillName="Redux" percentage="80" width="80%" />
                    <SkillDetail skillName="Bootstrap" percentage="60" width="60%" />
                    <SkillDetail skillName="Django" percentage="60" width="60%" />
                    <SkillDetail skillName="Python" percentage="75" width="75%" />
                    <SkillDetail skillName="Java" percentage="70" width="70%" />
                    <SkillDetail skillName="C++" percentage="70" width="70%" />
                    <SkillDetail skillName="Github" percentage="70" width="70%" />
                </div>
            </div>
        </section>
    )
}
