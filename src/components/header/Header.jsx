import React, { useState } from 'react'
import './header.css'

const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80 ) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header"); 
    })

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState('#home');
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">SARTZ.3</a>

            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" 
                            onClick={() => setActiveNav("#home")}
                            className ={
                                activeNav === "#home" ? "nav__link active-link": "nav__link"
                            }><i class="uil uil-estate nav__icon"></i> Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                            className ={
                                activeNav === "#portfolio" ? "nav__link active-link": "nav__link"
                            }><i class="uil uil-scenery nav__icon"></i> Portfolio</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")}
                            className ={
                                activeNav === "#about" ? "nav__link active-link": "nav__link"
                            }><i class="uil uil-user nav__icon"></i> About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")}
                            className ={
                                activeNav === "#contact" ? "nav__link active-link": "nav__link"
                            }><i class="uil uil-capture nav__icon"></i> Order</a>
                    </li>
                </ul>

                
            </div>
             
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}><i class="uil uil-bars"></i></div>
        </nav>
    </header>
  )
}

export default Header