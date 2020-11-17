import React, { Fragment } from 'react'
import Skills from './Skills'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

export default function Home() {
    return (
        <Fragment>
            <section id="home">
                <div className="banner">
                    <h1>Abayomi Adebowale</h1>
                    <span className="one">I am a front end developer</span>
                    <span className="two">And also a back end developer</span>
                    <span className="three">I live the best of both worlds</span>
                    <span className="four">I am available for hire</span>
                </div>
            </section>
            <Skills />
            <Portfolio />
            <About />
            <Contact />
        </Fragment>
    )
}
