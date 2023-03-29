import React from 'react'
import { Link } from "react-router-dom"

export default function ModalWinrate({whoWins, icon, setClose, css, resetArray, text}) {
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center'>
        <div className='bg-myGrey w-full py-16 flex justify-center items-center flex-col'>      
                <h5 className='text-myLightGrey headingXs'>{whoWins}</h5>
            <div className='flex items-center'>
              {
                icon === "tie" ?
                ""
                :
                <img src={icon} alt={"icon"}></img>
              }
              {
                
                <h3 className={`${css} headingL pl-4 font-bold`}>{text}</h3>
              }
            </div>

            <div className='pt-4 flex bg-my'>
              <Link to="/">
                <div className={`bg-myLightGrey shadow-myLightWhite hover:bg-myLightWhite hover:shadow-myLightGrey py-4 px-6 rounded-xl shadow-customSmallShadow text-base font-bold tracking-wide hover:cursor-pointer`}
                onClick={() => {setClose(false); resetArray()}}
                >
                    QUIT
                </div>
              </Link>                
              <div className='pl-4'>                
                <div className={`bg-myLightOrange shadow-myOrange hover:bg-myOrange hover:shadow-myLightOrange py-4 px-6 rounded-xl shadow-customSmallShadow text-base font-bold tracking-wide`}
                 onClick={() => {setClose(false); resetArray()}}
                >
                  NEXT ROUND
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
