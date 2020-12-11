import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioThumbnail = ({ route, thumbnail, styles }) => {

    return (
        <div className="thumbnail">
            <Link to={route} className="portfolio-link">
                <img className={styles} src={thumbnail} alt="" />
            </Link>
        </div>
    )
}

export default PortfolioThumbnail
