import React, { useEffect } from 'react'
import logo from '../../portfolio-images/Studio Sixty Six/logo-1.webp'
import banner from '../../portfolio-images/Studio Sixty Six/logo.PNG'
import artists from '../../portfolio-images/Studio Sixty Six/artists.png'
import artist_page from '../../portfolio-images/Studio Sixty Six/artist-page.png'
import product_page from '../../portfolio-images/Studio Sixty Six/product-page.png'

export default function StudioSixtySix() {

    useEffect(() => {
        document.title = "Studio Sixty Six"
    }, []);

    return (
        <section id="studio-sixty-six">
            <div className="portfolio-logo">
                <img src={logo} alt="" />
            </div>

            <div className="portfolio-banner">
                <img className="portfolio-banner" src={banner} alt="" />
            </div>

            <div className="portfolio-content">
                <div className="description">
                    <h2>Studio Sixty</h2>
                    <p>Studio Sixty is an art gallery based in Ottawa. They collaborate with artists from all over Canada to support their career and also sell their artwork as well.</p>
                </div>

                <div className="description">
                    <h2>My duties</h2>
                    <p>During their transition to a new Shopify theme, I wrote custom HTML and CSS for various pages and adjusted the look of already existing pages within the
                     new Shopify theme to their needs. I also fixed some bugs that were present in the theme during the transition.</p>
                </div>

                <div className="description-image">
                    <img src={artists} alt="" />
                </div>

                <div className="description">
                    <h2>Artists</h2>
                    <p>This is one of the pages I worked on. I was tasked with retrieving the artists from the database and display them in a grid-like format. Each artists appearing to
                    be in the form of a portrait and each row containing four artists. On smaller screens, each row would contain two artists. I was able to achieve this type of layout using
                    CSS grid layout.</p>
                </div>

                <div className="description-image">
                    <img src={artist_page} alt="" />
                </div>

                <div className="description">
                    <h2>Artist Page</h2>
                    <p>Upon clicking on each artist, you are lead to the artist page with this layout. Initially all the content was displayed in a single column, with the blurb appearing
                    underneath the image. I was asked by the client to revamp the look. They wanted the blurb to appear next to the artist image instead. Again, with CSS Grid coming to the rescue,
                    I was able to easily achieve this with a 2 column layout and tweaking the gap between the columns to the specification of the client.</p>
                </div>

                <div className="description-image">
                    <img src={product_page} alt="" />
                </div>

                <div className="description">
                    <h2>Product Page</h2>
                    <p>Each artists have their art on display in the featured section on the artist page. Clicking any of the art will lead you to the product page. Which currently has this layout.
                    Similar to the artist page, I was asked to make the container detailing the price to appear next to the product image with the gap set to what was specified.</p>
                </div>
            </div>
        </section>
    )
}
