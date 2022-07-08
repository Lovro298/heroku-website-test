import {React, useEffect} from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Footer = () => {

  useEffect(()=> {
    Aos.init({duration:1000})
  })

  return (
    <footer data-aos="fade-up">
        <div className='container'>
            <a href="https://instagram.com"><AiFillInstagram color='white' className='icon'/></a>
            <a href="https://github.com"><AiFillGithub color='white' className='icon'/></a>
            <a href="https://linkedin.com"><AiFillLinkedin color='white' className='icon'/></a>
        </div>

        <p>Lovro Peitl © 2022</p>
    </footer>
  )
}

export default Footer