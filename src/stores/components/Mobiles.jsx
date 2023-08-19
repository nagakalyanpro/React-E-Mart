
import React from 'react'


import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'


const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Mobiles</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/mobiles'>
                        <img className='proImage' src={item.image} alt="" />
                   </Link>
                    </div>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Mobiles