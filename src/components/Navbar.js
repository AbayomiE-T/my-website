import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import { withRouter } from "react-router-dom"

const Navbar = ({ history }) => {

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
                <h1><Link
                    onClick={e => {
                        e.preventDefault();
                        history.push('/');
                    }}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Abayomi
                </Link>
                </h1>
            </div>

            <ul ref={navRef} className="nav-items">
                <li className="nav-item">
                    <Link
                        onClick={e => {
                            e.preventDefault();
                            history.push('/');
                        }}
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Services
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={e => {
                            e.preventDefault();
                            history.push('/');
                        }}
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Portfolio
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={e => {
                            e.preventDefault();
                            history.push('/');
                        }}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        About
                </Link>
                </li>
                <li className="nav-item">
                    <Link
                        onClick={e => {
                            e.preventDefault();
                            history.push('/');
                        }}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
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
