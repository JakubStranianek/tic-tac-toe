import React, { useState } from 'react'

export default function Button({text, css, setHide}) {

  return (
    <div className={`hover:cursor-pointer py-4 shadow-customShadow text-myBlack uppercase w-full text-center rounded-2xl headingS font-bold ${css}`}
    >
        {text}
    </div>
  )
}
