import React from 'react'

import responsive from '../icons/responsive.svg'
import code from '../icons/code.svg'
import theme from '../icons/theme.svg'

export default function Services() {
    return (
        <section id="services">
            <div className="h-colour-2">
                <h1 className="heading" style={{ color: 'white' }}>Services</h1>
                <div className="rule" style={{ backgroundColor: 'white' }}></div>
            </div>

            <div>
                <div className="service-container">
                    <div className="service">
                        <img src={responsive} alt="" />
                        <h2>Responsive</h2>
                        <p>I can make your website compatible with all screens. Even ones as tiny as a pebble.</p>
                    </div>
                    <div className="service">
                        <img src={code} alt="" />
                        <h2>Development</h2>
                        <p>I like to bring your ideas to life from the ground up using the various languages of web browsers. Got any design mockups? I
                        will replicate it with code</p>
                    </div>
                    <div className="service">
                        <img src={theme} alt="" />
                        <h2>Customize Themes</h2>
                        <p>Have a theme you want tailored to your tastes? I can customize a website theme for you as well.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
