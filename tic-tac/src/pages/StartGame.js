import React, { useState } from 'react'
import Button from '../components/Button'
import ChooseIcon from '../components/ChooseIcon'
import XoIcons from '../components/XoIcons'
import Board from '../pages/Board'

export default function StartGame() {
  const [hide, setHide] = useState(false);

  return (
    <>
    {hide && <Board /> }

    <div className={`${hide ? "hidden" : "flex"} w-10/12 md:w-1/2 xl:w-1/4 flex-col items-center`}>
        <XoIcons css="pb-8" />
        <ChooseIcon />
        <div className='w-full pt-8'>
          <Button text={"new game (VS CPU)"} css={"bg-myLightOrange shadow-myOrange"} setHide={setHide}/>
          <div className='pt-6'>
            <Button text={"new game (VS PLAYER)"} css={"bg-myLightBlue shadow-myBlue"} setHide={setHide} />
          </div>
        </div>
    </div>
    </>
  )
}
