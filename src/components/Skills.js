import React from 'react'

export default function Skills() {
    return (
        <>
            <section id="skills">
                <h1 className="heading">Skills</h1>
                <div className="skills-container">
                    <div className="frameworks">
                        <h1>Frameworks & Libraries</h1>
                        <article>
                            <i class="fab fa-react"></i>
                            <br></br>
                            <span>React</span>
                        </article>
                        <article>
                            <br></br>
                            <span>Django</span>
                        </article>
                        <article>
                            <br></br>
                            <span>Firebase</span>
                        </article>
                        <article>
                            <i class="fab fa-bootstrap"></i>
                            <br></br>
                            <span>Bootstrap</span>
                        </article>
                        <article>
                            <br></br>
                            <span>Redux</span>
                        </article>
                    </div>
                    <div className="languages">
                        <h1>Languages</h1>
                        <article>
                            <i class="fab fa-js"></i>
                            <br></br>
                            <span>Javascript</span>
                        </article>
                        <article>
                            <i class="fas fa-code"></i>
                            <br></br>
                            <span>HTML</span>
                        </article>
                        <article>
                            <i class="fab fa-css3"></i>
                            <br></br>
                            <span>CSS</span>
                        </article>
                        <article>
                            <i class="fab fa-python"></i>
                            <br></br>
                            <span>Python</span>
                        </article>
                        <article>
                            <i class="fab fa-java"></i>
                            <br></br>
                            <span>Java</span>
                        </article>
                        <article>
                            <br></br>
                            <span>C</span>
                        </article>
                        <article>
                            <span>C++</span>
                        </article>
                    </div>
                    <div className="v-control">
                        <h1>Version control</h1>
                        <article>
                            <i class="fab fa-github"></i>
                            <br></br>
                            <span>Github</span>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
