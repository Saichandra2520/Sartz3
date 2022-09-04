import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">SARTZ.3</h1>

            <ul className="footer__list"> 
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#order" className="footer__link">Order</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/_sartz.3_/" className="footer__social-link" target='_blank '>
                    <i class="bx bxl-instagram-alt"></i>
                </a>
                <a href="https://www.facebook.com/saisathwik.bojja" className="footer__social-link" target='_blank '>
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://wa.me/919493540710?text=" className="footer__social-link" target='_blank '>
                    <i class="bx bxl-whatsapp"></i> 
                </a>
            </div>
        </div>
    </footer>
  )
}

export default footer