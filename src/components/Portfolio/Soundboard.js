import React, { useEffect } from 'react'
import banner from '../../portfolio-images/Soundboard/logo.png'
import redux from '../../portfolio-images/Soundboard/redux-logo.png'
import firebase from '../../portfolio-images/Soundboard/firebase-logo.png'

export default function Soundboard() {

    useEffect(() => {
        document.title = 'Soundboard'
    }, [])

    return (
        <section id="soundboard">
            <div className="portfolio-logo">
                <h1>Multi-Purpose soundboard</h1>
            </div>

            <div className="portfolio-banner">
                <img className="portfolio-banner" src={banner} alt="" />
            </div>

            <div className="portfolio-content">
                <div className="description">
                    <h2>My very first React application</h2>
                    <p>Music has always been an interest of mine and what better way to express
                    that interest than to indulge in a project relating to the creation of sound? A
                    soundboard is an application that contains catalogues of various sounds. The
                    sounds are provided to you at the click of a button. It has uses in many areas like
                    video games, film, TV shows and even in segments radio stations have where they
                    prank call an unsuspecting person. A problem I thought that various soundboards
                    had was that they were only used for a single purpose for specific situations. I
                    wanted to take it upon myself to create a soundboard that can be used for multiple
                    purposes, hence the creation of sound profiles.</p>
                </div>
                <div className="description">
                    <h2>Technologies used</h2>
                    <p>For this project, I used React, Redux and the cloud platform Firebase to build it up.</p>
                </div>

                <div className="description">
                    <h2>What it does</h2>
                    <p>The main feature of the project is the ability to log into various profiles of
                    the program to gain access to sounds that are mapped specifically to that profile.
                    For example, we could have a profile such as “construction” which would provide
                    various amounts of sounds relating to construction.</p>
                </div>

                <div className="description-image">
                    <img src={firebase} alt="" />
                </div>

                <div className="description">
                    <h2>Firebase</h2>
                    <p>This is one of the tools I used to build this project. It is a platform that has cloud storage capabilities. It is where I stored every single sound used in the project.
                     Each profile is mapped to a collection in the firestore.</p>
                </div>

                <div className="description-image">
                    <img src={redux} alt="" />
                </div>

                <div className="description">
                    <h2>Redux</h2>
                    <p>I used this library for state management and it is what I used to map each profile component in React to the firestore. Through Redux, each component was appropriately
                     matched to their respective collections in the firestore.</p>
                </div>

                <div className="description">
                    <h2>React Router</h2>
                    <p>Each profile component also serves as a route so you are dynamically served sounds relating the profile you click on. Serving the sounds to the page was made significantly
                    easier through the power of reusable components. I had a "board" component made specifically for displaying the sounds. Each profile component has the board component. When
                     data from from the firestore has been loaded on the profile component, the data is then passed into board component to display to the user.</p>
                </div>


                <div className="description">
                    <h2>Github</h2>
                    <p>You can view the code <a href="https://github.com/AbayomiE-T/soundboard-react-app">here</a> and install the application into your computer following the instructions in the
                    README file.</p>
                </div>
            </div>
        </section>
    )
}
