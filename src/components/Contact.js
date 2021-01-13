import React, { useRef } from 'react';
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
        <>
            <section id="contact">
                <div className="contact-container">
                    <h1 className="heading">Contact</h1>
                    <div className="rule h-colour-1"></div>

                    <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>Shoot me an email with your project details. I would love to hear from you!</p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-item">
                            <input name="name" type="text" placeholder="Name" />
                        </div>
                        <div className="form-item">
                            <input name="email" type="text" placeholder="Email" />
                        </div>
                        <div className="form-item">
                            <input name="subject" type="text" placeholder="Subject" />
                        </div>
                        <div className="form-item-message">
                            <textarea name="message" placeholder="Message">

                            </textarea>
                        </div>
                        <div className="form-item-button">
                            <button className="form-button">
                                SUBMIT
                    </button>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <a href="https://www.linkedin.com/in/abayomiadebowale/"><i className='fab fa-linkedin-in'></i></a>
                <a href="https://github.com/AbayomiE-T?tab=repositories"><i className='fab fa-github'></i></a>
            </footer>
        </>
    )
}
