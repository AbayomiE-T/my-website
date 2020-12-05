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
                    <div className="slogan">
                        <h1>Abayomi Adebowale</h1>
                    </div>
                </div>
            </section>
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </Fragment>
    )
}
