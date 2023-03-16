import React from 'react'

export default function ModalWinrate({deciscion, icon}) {
  return (
    <div className='absolute top-0 w-full h-screen bg-black bg-opacity-50'>
        <div className='bg-myGrey h-[286px]'>
            <h3 className='headingXs text-myLightGrey font-bold'>{deciscion}</h3>
            <div>
                <img src={icon} alt={"icon"}></img>
                <h3>TAKES THE ROUND</h3>
            </div>
        </div>
    </div>
  )
}
