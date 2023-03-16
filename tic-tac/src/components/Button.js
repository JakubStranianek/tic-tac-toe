import React, { useState } from 'react'

export default function Button({text, css, setHide}) {
  const handleHide = () => {
    setHide(true)
  }

  return (
    <div className={`hover:cursor-pointer py-4 shadow-customShadow text-myBlack uppercase w-full text-center rounded-2xl headingS font-bold ${css}`}
      onClick={handleHide}
    >
        {text}
    </div>
  )
}
