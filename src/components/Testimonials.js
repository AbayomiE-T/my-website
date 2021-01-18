import React from 'react'
import carrie from '../testimonial-images/carrie_colton.jfif'

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div>
                <h1 className="heading">Testimonials</h1>
                <div className="rule" style={{ backgroundColor: 'white' }}></div>
            </div>
            <div>
                <div className="testimonial-box">
                    <div className="t-box-item">
                        <img className="t-image" src={carrie} alt="" />
                    </div>
                    <div className="t-box-item">
                        <p>"<i>Abayomi helped us with the background coding of our Shopify website. Aba was professional, knowledgeable and a pleasure to work with.
                     He went above and beyond to achieve all our website custom coding requested functions. We look forward to working with Aba in the future.</i>"</p>
                    </div>
                    <div className="t-box-item">
                        <div className="text-wrap">
                            <p><b>Carrie Colton</b></p>
                            <p>Gallery Director, Studio Sixty Six</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
