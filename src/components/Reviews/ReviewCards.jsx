import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const ReviewCards = (props) => {

    let arr= []
    for(let i=1;i<=5;i++) {
        if(i<=props.rating) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }

    let a = arr.map(item =>
        item == 1 ?
        <AiFillStar color='yellow'/> :
        <AiOutlineStar color='yellow'/>
    )

    useEffect(()=> {
        Aos.init({duration:1000})
    })

  return (
    <div className='card' data-aos={props.id==2 || props.id==4? "fade-left":"fade-right"}>
        <div className='container'>
            <img className="person-img" src={props.img} alt="" />
            <div className='content'>
                <div className='rating'>{a}</div>
                <p className='description'>{props.description}</p>
                <p className='name'>{props.name}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCards