import React from 'react'

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h1 className="heading">Portfolio</h1>
            <div className="rule"></div>

            <div className="works-container">
                <div className="work">
                    <img src="https://www.placecage.com/200/300" alt="" />
                </div>
                <div className="work">
                    <img src="https://www.placecage.com/g/200/300" alt="" />
                </div>
                <div className="work">
                    <img src="https://www.placecage.com/c/200/300" alt="" />
                </div>
                <div className="work">
                    <img src="https://www.placecage.com/gif/200/300" alt="" />
                </div>
                <div className="work">
                    <img src="https://www.stevensegallery.com/200/300" alt="" />
                </div>
                <div className="work">
                    <img src="https://www.stevensegallery.com/g/200/300" alt="" />
                </div>
            </div>
        </section>
    )
}
