import React, { useEffect, useState } from 'react'
import TurnBox from '../components/TurnBox'
import XoIcons from '../components/XoIcons'
import XIcon from "../assets/Xicon.svg"
import OIcon from "../assets/Oicon.svg"
import Xplay from "../assets/Xplay.svg"
import Oplay from "../assets/Oplay.svg"
import Undo from '../components/Undo'
import {checkWin} from "../func/checkWin"

export default function Board() {
   const boardArray = [
    {
      id: 0,
      value: "",
      svg: null
    },
    {
      id: 1,
      value: "",
      svg: null
    },
    {
      id: 2,
      value: "",
      svg: null
    },
    {
      id: 3,
      value: "",
      svg: null
    },
    {
      id: 4,
      value: "",
      svg: null
    },
    {
      id: 5,
      value: "",
      svg: null
    },
    {
      id: 6,
      value: "",
      svg: null
    },
    {
      id: 7,
      value: "",
      svg: null
    },
    {
      id: 8,
      value: "",
      svg: null
    },
  ]

  const [data, setData] = useState(boardArray)
  const [turn, setTurn] = useState(true);

  useEffect(() => {
    console.log(checkWin.data)
    checkWin(data)
  })

  function handleChange(id, valueP, svgParam) {
    const newData = [...data];   
    newData[id].svg = svgParam;
    newData[id].value = valueP;
    setData(newData)
    setTurn(!turn);
  }

  return (
    <div className='w-10/12 md:w-1/2 xl:w-1/4 py-32'>
      <div className='flex items-center justify-between'>
        <XoIcons />
        <TurnBox svg={turn ? XIcon : OIcon} />
        <Undo />
      </div>

      <div className='w-full flex justify-between flex-wrap py-4 gap-x-2 gap-y-6'>
        {data.map((index) => {
          return (
            <div key={index.id} className="w-[30%] h-32 bg-myGrey flex items-center justify-center"
              onClick={() => {handleChange(index.id, turn ? "x" : "o", turn ? Xplay : Oplay)}}
            >    
              {index.svg === null ?
                " "
              :
              <img src={index.svg} alt="index"></img>
              }
            </div>
            )
        })}
      </div>
    </div>
  )
}
