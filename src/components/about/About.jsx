import React from 'react'
import "./about.css";
import sat2 from "../../imgs/sat2.jpeg";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
//             <img src={sat2} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">I'm an Artist, I made many beatiful sketches, I have a very good experience and many clients are happy with my sketches</p>
                
            </div>
        </div>
    </section>
  )
}

export default About
