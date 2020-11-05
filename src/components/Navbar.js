import React, { useRef } from 'react'

export default function Navbar() {

    const navRef = useRef()
    const burgerRef = useRef()

    const handleClick = () => {
        //For toggling the nav
        navRef.current.classList.toggle("nav-active")
        const navLinks = Array.from(navRef.current.childNodes)

        //Animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        })

        //Animate the burger
        burgerRef.current.classList.toggle('toggle-burger')
    }

    return (
        <nav>
            <div className="logo">
                <h1>Abayomi</h1>
            </div>

            <ul ref={navRef} className="nav-items">
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="works">Works</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>

            <div ref={burgerRef} className="burger" onClick={handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
