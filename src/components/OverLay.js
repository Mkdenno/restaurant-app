import React from 'react'

export const OverLay = (show, food) => {
if(!show){
    return null;
}

  return (
    <>
   <div className='overlay'>
     <div className='overlay-inner'>
        <button className='close'><i class="fas fa-times"></i></button>
        <div className='inner-box'>
            <img src={food.image} alt=''/>
            <div>
                <h3>Food.name</h3>
                <h4>food.price</h4>
                <a href='#'><button>order</button></a>
            </div>
        </div>
        <h4 className='description'>{food.description}</h4>

     </div>
   </div>
    </>
  )
}
