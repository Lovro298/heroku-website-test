import React, { useEffect } from 'react'
//---icons---
import logo from '../logo/Logo.svg'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {CgScrollV} from 'react-icons/cg'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

/*===Aos====*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    const [click, setClick] = useState([false, "black"])

    function toggleMenu() {
        setClick(prev=>[!prev[0], prev[1]==="#4046E3"? "black": "#4046E3"])
    }

    useEffect(()=> {
        Aos.init({duration:1000})
    })



  return (
    <main id='home'>
        {windowWidth> 800 ? 
        <nav data-aos="fade-down">
            <div className="logo">
                <a href="#home"><img src={logo} alt="lovro peitl logo"/></a>
            </div>

            <div className="navbar">
                <ul>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>

            <div className="contact">
                <div><a href="#contact-section">Contact</a></div>
            </div>
        </nav> :
        <nav className="burger-navbar">
            <AiOutlineMenu color={click[1]} className="burger-menu" onMouseEnter={()=> toggleMenu()}/>
            <div className={click[0]? 'opened-menu': 'opened-menu closed'} onMouseLeave={()=> toggleMenu()}>
                <ul>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
            
            <div className="logo">
                <a href="#home"><img src={logo} alt="lovro peitl logo"/></a>
            </div>
        </nav>
        }

        <div className='container1'>

            <section className='hero-section' data-aos="fade-left">
                <h1>Hello there!</h1>
                <p>I'm Lovro <span>Peitl</span>, <br /> UX/UI Designer and Web Developer</p>
                <div className="media-links">
                    <a  className="line left" rel="noreferrer" href="https://www.instagram.com/" target="_blank">Instagram</a>
                    <a  className="line" rel="noreferrer" href="https://www.linkedin.com/" target="_blank">Linkedin</a>
                    <a rel="noreferrer" href="https://www.github.com/" target="_blank">GitHub</a>
                </div>
                
                <p className='lets-talk-btn'>Let's talk!</p>
            </section>

            <section className='illustration-section' data-aos="fade-right">
                <div className='sphere-illustration' data-aos="flip-left">
                    <div className='skill-logos'>
                        <AiFillHtml5 className='skill-logo'/>
                        <IoLogoJavascript className='skill-logo'/>
                        <DiSass className='skill-logo'/>
                        <DiReact className='skill-logo'/>
                    </div>
                </div>
                <div className='shadow'></div>
            </section>
        </div>
        <a href="#reviews"><CgScrollV data-aos="fade-up" className='scroll' color='rgb(73, 73, 73)'/></a>
        <div className='divider-line'></div>
    </main>
  )
}

export default Home