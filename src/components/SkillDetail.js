import React from 'react'

export default function SkillDetail({ skillName, percentage, width }) {

    return (
        <article className="skill">
            <div className="bar-fill" style={{ width: `${width}` }}>
                <div className="skill-name">
                    <span>{skillName}</span>
                </div>
            </div>
            <div className="percentage">
                <span>{percentage}%</span>
            </div>
        </article>
    )
}
