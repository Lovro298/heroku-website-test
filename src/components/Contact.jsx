import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {

    useEffect(()=> {
        Aos.init({duration:1000})
    })

    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            message:""
        }
    })

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Lovro Gmail', 'contact_form', e.target, '7baGFV2wOrHoSP3BP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

  return (
    <section className='contact-section' id='contact-section'>
        <h1 className='contact' data-aos="fade">Contact</h1>

        <div className='container'>
            <div className='contact-container' data-aos="flip-left">
                <form onSubmit={sendEmail}>
                    <div className='firstname-lastname'>

                        <div className='first-name-container'>
                            <p>FIRST NAME</p>
                                <input
                                    name="firstName" 
                                    type="text"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    required 
                                />
                        </div>

                        <div className='last-name-container'>
                            <p>LAST NAME</p>
                                <input
                                    name="lastName" 
                                    type="text"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    required
                                />
                        </div>

                    </div>

                    <div className='email-container'>
                        <p>EMAIL</p>
                            <input
                                name="email" 
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                    </div>

                    <div className='message-container'>
                        <p>MESSAGE</p>
                            <textarea name="message" cols="30" rows="10"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

            <div className='help-container' data-aos="fade-left">

                <div className="help">
                    <p>How can I help you?</p>
                </div>
                <div className='info'>

                    <div className='container' data-aos="fade-left">
                        <div className='callme'>
                            <p className='bold'>Call me</p>
                            <p>+386 31 448 593</p>
                        </div>

                        <div className='location'>
                            <p className='bold'>Location</p>
                            <a target="_blank"href="https://www.google.com/maps/place/Novi+dom+29,+1420+Trbovlje/@46.1511799,15.0493439,17z/data=!3m1!4b1!4m5!3m4!1s0x47656b589f4419cd:0x60352eafbf7f1621!8m2!3d46.1511799!4d15.0515326">Novi dom 29 <br /> 1420 Trbovlje</a>
                        </div>

                        <div className='email'>
                            <p className='bold'>Email</p>
                            <a href="mailto:lovro.peitl@gmail.com">lovro.peitl@gmail.com</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact