import React from 'react'
import reactIcon from '../icons/react-icon.png'
import django from '../icons/django.png'
import bootstrap from '../icons/bootstrap-icon.png'
import firebase from '../icons/firebase.png'
import redux from '../icons/redux.png'
import js from '../icons/js-icon.png'
import html from '../icons/html-icon.png'
import css from '../icons/css3-icon.png'
import java from '../icons/java-icon.png'
import python from '../icons/python-icon.png'
import c from '../icons/c.png'
import cplusplus from '../icons/c_plus_plus.png'
import git from '../icons/github-icon.png'
import SkillDetail from './SkillDetail'

export default function Skills() {
    return (
        <>
            <section id="skills">
                <h1 className="heading">Skills</h1>
                <div className="skills-container">
                    <div className="frameworks">
                        <h1>Frameworks & Libraries</h1>
                        <SkillDetail pic={reactIcon} skillName="React" />
                        <SkillDetail pic={django} skillName="Django" />
                        <SkillDetail pic={firebase} skillName="Firebase" />
                        <SkillDetail pic={bootstrap} skillName="Bootstrap" />
                        <SkillDetail pic={redux} skillName="Redux" />
                    </div>
                    <div className="languages">
                        <h1>Languages</h1>
                        <SkillDetail pic={js} skillName="Javascript" />
                        <SkillDetail pic={html} skillName="HTML" />
                        <SkillDetail pic={css} skillName="CSS" />
                        <SkillDetail pic={python} skillName="Python" />
                        <SkillDetail pic={java} skillName="Java" />
                        <SkillDetail pic={c} skillName="C" />
                        <SkillDetail pic={cplusplus} skillName="C++" />
                    </div>
                    <div className="v-control">
                        <h1>Version control</h1>
                        {/* <article className="skill">
                            <div>
                                <img src={ } alt="" />
                            </div>
                            <br></br>
                            <span>Github</span>
                        </article> */}
                        <SkillDetail pic={git} skillName="Github" />
                    </div>
                </div>
            </section>
        </>
    )
}
