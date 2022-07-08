import React, { useEffect } from 'react'

/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Text = (props) => {

  useEffect(()=> {
    Aos.init({duration:1000})
  })
  return (
    <div className='text-card' data-aos={props.id==1? "fade-right" : "fade-left"}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <a href="/">Read more</a>
    </div>
  )
}

export default Text