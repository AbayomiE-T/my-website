import React from 'react'
import { Link } from 'react-router-dom'
import sixty_six from '../portfolio-images/Studio Sixty Six/logo-1.webp'
import mjlonir from '../portfolio-images/Mjlonir/Logo.png'
import soundboard from '../portfolio-images/Soundboard/logo.png'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h1 className="heading">Portfolio</h1>
            <div className="rule"></div>

            <div className="portfolio-container">
                <div className="thumbnail">
                    <Link className="portfolio-link">
                        <img src={sixty_six} alt="" />
                    </Link>
                </div>
                <div className="thumbnail">
                    <Link to="/Mjlonir" className="portfolio-link">
                        <img className="mjlonir" src={mjlonir} alt="" />
                    </Link>
                </div>
                <div className="thumbnail">
                    <Link className="portfolio-link">
                        <img src={soundboard} alt="" />
                    </Link>
                </div>
                <div className="thumbnail">
                    <Link className="portfolio-link"></Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;