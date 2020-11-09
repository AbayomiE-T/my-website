import React from 'react'

export default function SkillDetail({ pic, skillName }) {

    return (
        <article className="skill">
            <div>
                <img src={pic} alt="" />
            </div>
            <span>{skillName}</span>
        </article>
    )
}
