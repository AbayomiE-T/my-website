import React from 'react'
import SkillDetail from './SkillDetail'

export default function About() {
    return (
        <section id="about">
            <h1 className="heading">About</h1>
            <div className="rule"></div>
            <div className="content">
                <div className="about-me-container">
                    <div className="about-me">
                        <span>Image of me</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui dicta. Id, vitae repudiandae suscipit consequuntur officiis quia voluptatem
                        voluptates culpa pariatur ratione modi nisi reiciendis, enim ipsam sapiente ullam praesentium commodi ex nesciunt adipisci nulla natus, libero ipsa! Nobis
                        repudiandae laboriosam eos cumque id officia debitis reiciendis nihil esse quaerat quasi, expedita eligendi rerum rem saepe quae quas, repellendus, incidunt modi.
                        Magnam harum eos cum odit deserunt, itaque a vitae explicabo enim repellat. Labore inventore, accusantium enim dolore sunt esse cum sed ad pariatur voluptatum
                        quisquam ipsam quia obcaecati corrupti numquam nobis perspiciatis distinctio fugiat? Nulla quia voluptas ab.
                    </p>
                </div>

                <div className="skills">
                    <SkillDetail skillName="CSS" percentage="90" width="w9" />
                    <SkillDetail skillName="HTML" percentage="90" width="w9" />
                    <SkillDetail skillName="Javascript" percentage="90" width="w9" />
                    <SkillDetail skillName="React" percentage="90" width="w9" />
                    <SkillDetail skillName="Redux" percentage="90" width="w9" />
                    <SkillDetail skillName="Bootstrap" percentage="90" width="w9" />
                    <SkillDetail skillName="Django" percentage="90" width="w9" />
                    <SkillDetail skillName="Python" percentage="90" width="w9" />
                    <SkillDetail skillName="Java" percentage="90" width="w9" />
                    <SkillDetail skillName="C++" percentage="90" width="w9" />
                    <SkillDetail skillName="Github" percentage="90" width="w9" />
                </div>
            </div>
        </section>
    )
}
