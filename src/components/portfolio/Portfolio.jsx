import React, { useState } from 'react';
import './portfolio.css';
import sai1 from "../../imgs/p1.jpeg";
import sai2 from "../../imgs/p2.jpeg";
import sai3 from "../../imgs/p3.jpeg";
import sai4 from "../../imgs/p4.jpeg";
import sai5 from "../../imgs/p5.jpeg";
import sai6 from "../../imgs/p6.jpeg";
import sai7 from "../../imgs/p7.jpeg";
import p8 from "../../imgs/p8.jpeg";
import p9 from "../../imgs/p9.jpeg";
import p10 from "../../imgs/p10.jpeg";
import p11 from "../../imgs/p11.jpeg";


const Portfolio = () => {
    const[ToggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My recent work</span>

        <div className="portfolio__container container grid">
            
            <div className="portfolio__sections grid">
                <div className={ToggleState===1 ?"portfolio__gallery portfolio__gallery-active":"portfolio__gallery"}>
                    <div className="portfolio__img__div">
                        <img src={sai1} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai2} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai3} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai4} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai5} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai6} className="portfolio__img" />
                    </div>
                </div>

                <div className={ToggleState===2 ?"portfolio__gallery portfolio__gallery-active":"portfolio__gallery"}>
                    <div className="portfolio__img__div">
                        <img src={sai7} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={p8} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={p9} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={p10} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={p11} className="portfolio__img" />
                    </div>
                    <div className="portfolio__img__div">
                        <img src={sai3} className="portfolio__img" />
                    </div>
                </div>

                
            </div>

            <div className="portfolio__tabs">
                <h4>See more....</h4>
                <div className ={ToggleState===1 ? "portfolio__button portfolio__active button--flex":"portfolio__button button--flex"} onClick = {()=>toggleTab(1)}>
                    1
                </div>

                  <div className={ToggleState === 2 ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick={() => toggleTab(2)}>
                      2
                  </div> 
            </div>
        </div>
    </section>
  )
}

export default Portfolio