import React from 'react'

export default function SkillDetail({ skillName, percentage, width }) {

    return (
        <article className="skill">
            <p>{skillName}</p>
            <div>
                <div className="barfill" style={{ width: width }}></div>
            </div>
        </article>
    )
}
