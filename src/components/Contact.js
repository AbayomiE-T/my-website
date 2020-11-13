import React from 'react'
import email from '../icons/mail-icon.webp'
import phone from '../icons/phone-icon.png'
import address from '../icons/address-icon.png'

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="heading">Contact</h1>
            <div className="rule"></div>

            <div className="contact-container">

                <div className="contact-details">
                    <div className="contact-detail">
                        <div className="contact-icon">
                            <img src={email} alt="" />
                        </div>
                        <p>eyitouyoa3@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <div className="contact-icon">
                            <img src={address} alt="" />
                        </div>
                        <p>326 Kippen Place, Nepean, ON</p>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-icon">
                            <img src={phone} alt="" />
                        </div>
                        <p>905-923-3911</p>
                    </div>
                </div>
                <form>
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

        </section>
    )
}
