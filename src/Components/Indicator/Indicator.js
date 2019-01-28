import React from 'react'
import Dot from './Dot';

//return an indicator component (dots-container) with a list of dots (dotsGroup) 

const Indicator = ({ index, images, dotClick }) => {
  
  const dotsGroup = images.map((image, i) => {
    let active = (i === index) ? true : false
    return (
      <Dot
        key={i}
        id={i}
        active={active}
        dotClick={dotClick}
      />
    )
  })

  return (
    <div className="dots-container">
      { dotsGroup }
    </div>
  )
}


export default Indicator