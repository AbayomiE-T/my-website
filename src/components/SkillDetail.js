import React from 'react'

export default function SkillDetail({ skillName, percentage }) {

    return (
        <article className="skill">
            <span className="skill-name">{skillName}</span>
            <div className="percentage">
                <span>{percentage}%</span>
            </div>
        </article>
    )
}
