import React, { useEffect } from 'react'
import ReviewCards from './ReviewCards'
import reviewData from './reviewData'
import { useState } from 'react'

/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Reviews = () => {

  const [reviewsData, setReviewsData] = useState(reviewData)

  let mappedReviewCards = reviewsData.map(item => {
    return (
      <ReviewCards
        key={item.id}
        {...item}
      />
    )
  })

  useEffect(()=> {
    Aos.init({duration:1000})
  })

  return (
    <section className='reviews-section' id='reviews'>
      <h1 className='reviews' data-aos="fade">Reviews</h1>
      <div className='cards-container'>
        {mappedReviewCards}
      </div>
      <div className='divider-line'></div>
    </section>
  )
}

export default Reviews