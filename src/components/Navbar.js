import React, { useRef, useEffect } from 'react'
import { Link, withRouter, useLocation } from "react-router-dom"

const Navbar = ({ history, bgColor }) => {

    const navRef = useRef();
    const burgerRef = useRef();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])

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
    //Might want to remove the handleClick funtion on the navlinks
    return (
        <nav style={{ backgroundColor: bgColor }}>
            <div className="logo">
                <h1><Link
                    to="/#home"
                >
                    Abayomi
                </Link>
                </h1>
            </div>

            <ul ref={navRef} style={{ backgroundColor: bgColor }} className="nav-items">
                <li className="nav-item">
                    <Link
                        onClick={handleClick}
                        to="/#services"
                    >
                        Services
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={handleClick}
                        to="/#portfolio"
                    >
                        Portfolio
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={handleClick}
                        to="/#about"
                    >
                        About
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={handleClick}
                        to="/#contact"
                    >
                        Contact
                </Link>
                </li>
            </ul>

            <div ref={burgerRef} className="burger" onClick={handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
