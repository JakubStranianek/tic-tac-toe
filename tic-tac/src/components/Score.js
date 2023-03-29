import React from 'react'

export default function Score({scoreX, scoreTie, scoreO}) {
  return (
    <div>
        <div className='w-full flex justify-between flex-wrap py-4 gap-x-2 gap-y-6'>        
            <div className="w-[30%] h-16 bg-myBlue rounded-2xl shadow-customSmallShadow shadow-[#10212A] flex flex-col items-center justify-center">                            
                <p>X (YOU)</p>
                <h3 className='text-2xl font-bold'>{scoreX}</h3>
            </div>   

            <div className="w-[30%] h-16 bg-myLightGrey rounded-2xl shadow-customSmallShadow shadow-[#10212A] flex flex-col items-center justify-center">                            
                <p>TIES</p>
                <h3 className="text-2xl font-bold">{scoreTie}</h3>
            </div>

            <div className="w-[30%] h-16 bg-myOrange rounded-2xl shadow-customSmallShadow shadow-[#10212A] flex flex-col items-center justify-center">                            
                <p>O (CPU)</p>
                <h3 className="text-2xl font-bold">{scoreO}</h3>
            </div>                  
      </div>
    </div>
  )
}
