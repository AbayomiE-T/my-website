import React, { Fragment, useEffect } from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Testimonials from './Testimonials'

export default function Home() {
    useEffect(() => {
        document.title = "Home | Abayomi"
    }, []);
    return (
        <Fragment>
            <div className="wrap">
                <section id="home">

                    <div className="slogan">
                        <p>Creating something beautiful...</p>
                        <p>One line of code at a time.</p>
                    </div>

                    <Navbar />
                </section>
                <Services />
            </div>
            <Portfolio />
            <div className="wrap">
                <About />
                <Testimonials />
            </div>
            <Contact />
        </Fragment>
    )
}
