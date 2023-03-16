import React, { useEffect, useState } from 'react'

export default function ChooseIcon() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  
  const handleChangeBtns = () => {
    setBtn1(!btn1);
    setBtn2(!btn2);
  }

  useEffect(() => {
    console.log(btn1) 
  })

  return (
    <div className='w-full bg-myGrey shadow-lg shadow-black px-6 pt-6 pb-7 text-center'>
        <h6 className='text-myLightGrey headingXs pb-6'>PICK PLAYER 1’S MARK</h6>

        <div className='bg-myBlack flex p-2 rounded-lg'>            
            <button className={`${btn1 ? "bg-myLightGrey" : "bg-[#A8BFC9] bg-opacity-5"} w-1/2 flex justify-center rounded-lg py-3 hover:cursor-pointer`}
              onClick={() => handleChangeBtns()}
            >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z" fill={`${btn1 ? "#1A2A33" : "#A8BFC9"}`}/>
            </svg>
            </button>
            
            <button className={`${btn2 ? "bg-myLightGrey" : "bg-[#A8BFC9] bg-opacity-5"} w-1/2 flex justify-center rounded-lg py-3 hover:cursor-pointer`}
              onClick={() => handleChangeBtns()}
            >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z" fill={`${btn2 ? "#1A2A33" : "#A8BFC9"}`}/>
            </svg>
            </button>
        </div>

        <p className='text-myLightGrey body pt-4'>REMEMBER : X GOES FIRST</p>
    </div>
  )
}
