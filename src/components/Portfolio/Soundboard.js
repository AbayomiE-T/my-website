import React, { useEffect } from 'react'
import banner from '../../portfolio-images/Soundboard/logo.png'

export default function Soundboard() {

    useEffect(() => {
        document.title = 'Soundboard'
    }, [])

    return (
        <section id="soundboard">
            <div className="portfolio-logo">
                <h1>Multi-Purpose soundboard</h1>
            </div>

            <div className="portfolio-banner">
                <img className="portfolio-banner" src={banner} alt="" />
            </div>

            <div className="portfolio-content">
                <div className="description">
                    <h2>My very first React application</h2>
                    <p>Music has always been an interest of mine and what better way to express
                    that interest than to indulge in a project relating to the creation of sound? A
                    soundboard is an application that contains catalogues of various sounds. The
                    sounds are provided to you at the click of a button. It has uses in many areas like
                    video games, film, TV shows and even in segments radio stations have where they
                    prank call an unsuspecting person. A problem I thought that various soundboards
                    had was that they were only used for a single purpose for specific situations. I
                    wanted to take it upon myself to create a soundboard that can be used for multiple
                purposes, hence the creation of sound profiles.</p>
                </div>
                <div className="description">
                    <h2>Technologies used</h2>
                    <p>For this project, I used React, Redux and the cloud platform Firebase to build it up.</p>
                </div>

                <div className="description">
                    <h2>What it does</h2>
                    <p>Its really simple. At the click of a button</p>
                </div>
            </div>
        </section>
    )
}
