import React, { useEffect } from 'react'
import Text from './Text'
import blogData from './blogData'

/*===Aos===*/
import Aos from 'aos'
import "aos/dist/aos.css"

const Blog = () => {

  let textMapped = blogData.map(item => {
    return (
      <Text
        key={item.id}
        {...item}
      />
    )
  })

  useEffect(()=>{
    Aos.init({duration:1000})
  })

  return (
    <section className='blog-section' id='blog'>
        <h1 className='blog' data-aos="fade">Blog</h1>
        <div className='text-container'>{textMapped}</div>
        <div className='divider-line'></div>
    </section>
  )
}

export default Blog