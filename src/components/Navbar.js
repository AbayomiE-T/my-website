import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Abayomi</h1>
            </div>

            <ul className="nav-items">
                <li className="nav-item">Skills</li>
                <li className="nav-item">Works</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    )
}
