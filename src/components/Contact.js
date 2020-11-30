import React, { useRef } from 'react';
import git from '../icons/git.png';
import linkedin from '../icons/linkedin-icon.png';
import emailjs from 'emailjs-com';

export default function Contact() {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2e20cp6', 'template_ywuks5c', e.target, 'user_9gjSE64fnHbpHYgE9RrRj')
            .then((result) => {
                console.log(result.text)
            }).catch((error) => {
                console.log(error.text)
            })

        formRef.current.reset();
    }

    return (
        <section id="contact">
            <h1 className="heading">Contact</h1>
            <div className="rule"></div>

            <div className="contact-container">

                <form ref={formRef} onSubmit={handleSubmit}>
                    <h1>
                        Have a question or project? Shoot me an email!
                    </h1>
                    <div className="form-item">
                        <input name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="form-item">
                        <input name="email" type="text" placeholder="Email" />
                    </div>
                    <div className="form-item">
                        <input name="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-item">
                        <textarea name="message" placeholder="Message">

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
