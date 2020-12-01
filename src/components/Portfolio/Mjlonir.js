import React, { useEffect } from 'react'

import logo from '../../portfolio-images/Mjlonir/Logo.png'
import banner from '../../portfolio-images/Mjlonir/home.png'
import about from '../../portfolio-images/Mjlonir/about.png'
import brewery from '../../portfolio-images/Mjlonir/brewery.png'
import events from '../../portfolio-images/Mjlonir/events.png'
import contact from '../../portfolio-images/Mjlonir/contact.png'

export default function Mjlonir() {

    useEffect(() => {
        document.title = 'Mjlonir | Abayomi'
    }, [])

    return (
        <div>
            <div className="portfolio-logo">
                <img src={logo} alt="" />
            </div>

            <div className="portfolio-banner">
                <img className="portfolio-banner" src={banner} alt="" />
            </div>

            <div className="portfolio-content">
                <div className="description">
                    <h2>Mjlonir</h2>
                    <p>I was tasked by my friend and designer <a href="https://www.wrightd3sign.com/">Rebecca Wright</a> to bring her brewery website design mockup to life. She has a fascination
                    with Norse Mythology and what better way to represent that appreciation than to create a Nordic inspired beer brand?</p>
                    <br></br>
                    <p>All assets were designed by her and provided to me to work with.</p>
                </div>

                <div className="description">
                    <h2>Technologies used</h2>
                    <p>For this project, I used React and CSS to replicate the design.</p>
                </div>

                <div className="description-image">
                    <img src={banner} alt="" />
                </div>

                <div className="description">
                    <h2>Home Page</h2>
                    <p>Upon loading the website, you are greeted with this page. It's got a sticky navigation bar and you get to see the beer in all its glory. I used CSS Flexbox to give the images
                     an even amount of space between them.</p>
                </div>

                <div className="description">
                    <h2>Navigation</h2>
                    <p>As stated earlier, this navigation is sticky on desktops. I used the React library "react-scroll" to implement a smooth scrolling feature. Clicking on any of the navigation links
                    will instantly take you to its respective section on the page using a smooth scrolling effect.</p>
                </div>

                <div className="description-image">
                    <img src={about} alt="" />
                </div>

                <div className="description">
                    <h2>About Page</h2>
                    <p>The about page shows you how the beer is made.</p>
                </div>

                <div className="description-image">
                    <img src={brewery} alt="" />
                </div>

                <div className="description">
                    <h2>Brewery</h2>
                    <p>The brewery page gives the user the option of buying tour tickets.</p>
                </div>

                <div className="description-image">
                    <img src={events} alt="" />
                </div>

                <div className="description">
                    <h2>Events Page</h2>
                    <p>The events page shows various events available. There's a bar that gives you the option to filter the events according to options provided like dates. Clicking on
                    an event reveals an event form to register for an event.</p>
                </div>

                <div className="description-image">
                    <img src={contact} alt="" />
                </div>

                <div className="description">
                    <h2>Contact Page</h2>
                    <p>Users can easily message the brewery company through the website using this form.</p>
                </div>

                <div className="description">
                    <h2>Github</h2>
                    <p>You can view the code <a href="https://github.com/AbayomiE-T/Mjlonir-Clone">here</a> and install the application into your computer following the instructions in the
                    README file.</p>
                </div>
            </div>
        </div>
    )
}

