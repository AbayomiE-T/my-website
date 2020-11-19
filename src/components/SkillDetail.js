import React from 'react'

export default function SkillDetail({ skillName, percentage, width }) {
    const styles = `percentage ${width}`
    return (
        <article className="skill">
            <span className="skill-name">{skillName}</span>
            <div className={styles}>
                <span>{percentage}%</span>
            </div>
        </article>
    )
}
