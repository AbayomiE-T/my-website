import React from 'react'

import PortfolioThumbnail from './PortfolioThumbnail'

import sixty_six from '../portfolio-images/Studio Sixty Six/logo-1.webp'
import mjlonir from '../portfolio-images/Mjlonir/Logo.png'
import soundboard from '../portfolio-images/Soundboard/logo.png'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h1 className="heading">Portfolio</h1>
            <div className="rule h-colour-1"></div>

            <div className="portfolio-container">
                <PortfolioThumbnail route="/StudioSixtySix" thumbnail={sixty_six} websiteLink="https://studiosixtysix.ca/" />
                <PortfolioThumbnail route="/Mjlonir" thumbnail={mjlonir} styles="mjlonir" websiteLink="" />
                <PortfolioThumbnail route="/Soundboard" thumbnail={soundboard} websiteLink="" />
            </div>
        </section>
    )
}

export default Portfolio;