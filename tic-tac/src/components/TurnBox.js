import React from 'react'

export default function TurnBox({svg}) {
  return (
    <div className='bg-myGrey shadow-customSmallShadow shadow-black flex items-center justify-center text-myLightGrey pt-4 pb-5 px-6 rounded-lg headingM font-bold'>
        <img src={svg} alt="svgIcon"/>
        <h3 className='pl-3'>TURN</h3>
    </div>
  )
}
