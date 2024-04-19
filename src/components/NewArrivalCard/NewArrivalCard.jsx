import React from 'react'
import "./NewArrivalCard.css"

const NewArrivalCard = ({src, collectiontext, collectiondesc}) => {
  return(
  
    <div className='newArr_card'>
      
      <img src={src}/>
     
        
        <div className='newArr_text'>
          <p className='newArr_heading'>New Arrivals</p>
          <div>
          <p className='newArr_title'>{collectiontext}</p>
          <p className='newArr_desc'>{collectiondesc}</p>
          </div>
        </div>
    </div>
  )
}

export default NewArrivalCard