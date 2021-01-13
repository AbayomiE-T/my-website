import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioThumbnail = ({ route, thumbnail, styles, websiteLink }) => {


    const display = websiteLink ? 'inner-button' : 'inner-button none'

    return (
        <article className="thumbnail">
            <img className={styles} src={thumbnail} alt="" />
            <div className="inner">
                <Link to={route} className="portfolio-link">
                    <button className="inner-button">Learn more</button>
                </Link>
                <a href={websiteLink}>
                    <button className={display}>View Website</button>
                </a>
            </div>
        </article>
    )
}

export default PortfolioThumbnail
