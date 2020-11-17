import React from 'react'
import git from '../icons/git.png'
import linkedin from '../icons/linkedin-icon.png'

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="heading">Contact</h1>
            <div className="rule"></div>

            <div className="contact-container">

                <form>
                    <h1>
                        Have a question or project? Shoot me an email!
                    </h1>
                    <div className="form-item">
                        <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="form-item">
                        <input id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="form-item">
                        <input id="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-item">
                        <textarea name="message" id="message" placeholder="Message">

                        </textarea>
                    </div>
                    <div className="form-item button">
                        <button>
                            SEND MESSAGE
                    </button>
                    </div>
                </form>
            </div>

            <footer>
                <div className="social-icon">
                    <a href="https://github.com/AbayomiE-T?tab=repositories"><img src={git} alt="" /></a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/abayomi-adebowale-71010515a/"><img src={linkedin} alt="" /></a>
                </div>
            </footer>
        </section>
    )
}
