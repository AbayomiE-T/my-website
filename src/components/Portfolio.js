import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h1 className="heading">Portfolio</h1>
            <div className="rule"></div>

            <div className="portfolio-container">
                <div className="thumbnail">
                    <Link className="portfolio-link"></Link>
                </div>
                <div className="thumbnail">
                    <Link className="portfolio-link"></Link>
                </div>
                <div className="thumbnail">
                    <Link className="portfolio-link"></Link>
                </div>
                <div className="thumbnail">
                    <Link className="portfolio-link"></Link>
                </div>
            </div>
        </section>
    )
}
