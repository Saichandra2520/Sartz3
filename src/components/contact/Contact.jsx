import React, { useState } from 'react'
import './contact.css';
import axios from 'axios';


const Contact = () => {
    const [name , setName] =useState('');
    const [mail , setMail] =useState('');
    const [message , setMessage] =useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,mail,message);
        const data = {
            Name: name,
            Mail: mail,
            Message: message
        }
        axios.post('https://sheet.best/api/sheets/85d66e4b-6a7a-4106-97eb-1983b29e1a20',data).then((response) => {
            console.log(response);

            setName('');
            setMail('');
            setMessage('');
        })
    }

  return (
    <div className="contact section" id="contact">
        <h2 className="section__title">Turn Your Image Into Art!!</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to Me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i class='bx bxs-contact' ></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">saisathwik.b@gmail.com</span>

                        <a href="mailto:saisathwik.b@gmail.com?subject=SARTZ.3&body=" className="contact__button">Write Me{" "} <i class='bx bx-right-arrow-alt contact__button-icon' ></i></a>
                    </div>

                    <div className="contact__card">
                        <i class='bx bxl-whatsapp' ></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+91 9493540710</span>

                        <a href="https://wa.me/919493540710?text=" className="contact__button">Write Me{" "} <i class='bx bx-right-arrow-alt contact__button-icon' ></i></a>
                    </div>

                    <div className="contact__card">
                        <i class='bx bxl-instagram'></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">_sartz.3_</span>

                        <a href="https://www.instagram.com/_sartz.3_/" className="contact__button">Write Me{" "} <i class='bx bx-right-arrow-alt contact__button-icon' ></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write Your Comment!!</h3>

                <form action="" className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className='contact__form-input' 
                        onChange={(e) => setName(e.target.value)} value={name} placeholder='Insert your Name'/>

                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name="name" className='contact__form-input' placeholder='Insert your Mail Id' onChange={(e) => setMail(e.target.value)} value={mail}/>
                        
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Comment</label>
                        <textarea name="Comment " cols="30" rows="10" className='contact__form-input' placeholder='Write Your Comment!!' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                        
                    </div>
                    
                    <button href="#contact" className="button button--flex" >
                        Send Message
                        <svg
                        class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact