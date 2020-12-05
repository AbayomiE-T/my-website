import React, { Fragment, useEffect } from 'react'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

export default function Home() {
    useEffect(() => {
        document.title = "Home | Abayomi"
    }, []);
    return (
        <Fragment>
            <section id="home">
                <div className="banner">
                    <h1>Abayomi Adebowale</h1>
                    <span className="four">I am a Software Developer</span>
                </div>
            </section>
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </Fragment>
    )
}
