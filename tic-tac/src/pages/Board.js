import React, { useEffect, useState } from 'react'
import TurnBox from '../components/TurnBox'
import XoIcons from '../components/XoIcons'
import XIcon from "../assets/Xicon.svg"
import OIcon from "../assets/Oicon.svg"
import Xplay from "../assets/Xplay.svg"
import Oplay from "../assets/Oplay.svg"
import XplayHover from "../assets/XplayHover.svg"
import OplayHover from "../assets/OplayHover.svg"
import Undo from '../components/Undo'
import ModalWinrate from "../components/ModalWinrate"
import Score from '../components/Score'

export default function Board() { 
  const [boardArray] = useState([
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
  ])

  const [data, setData] = useState(boardArray)
  const [scoreX, setScoreX] = useState(0)
  const [scoreTie, setScoreTie] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(true);
  const [modal, setModal] = useState(false);

  const checkWinner = (data , i) => {
    if(data[i].value === "x") {
      setWinner("x")
      setScoreX(scoreX+1)
    } else if (data[i].value === "o"){
      setWinner("o")
      setScoreO(scoreO+1)    
    }

    return (    
      null
    )
  }

  const handleCheck = (data) => {    
    
    // Check Tie
    if (handleCheckTie(data) === 9) {
      setWinner("tie")
      setScoreTie(scoreTie+1)
      setModal(true)        
    }

    // Check rows
      for (let i = 0; i < 9; i += 3) {
      if (data[i].value && data[i].value === data[i + 1].value && data[i].value === data[i + 2].value) {            
          setModal(true)
          checkWinner(data, i);
      }
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
      if (data[i].value && data[i].value === data[i + 3].value && data[i].value === data[i + 6].value) {
        setModal(true)
        checkWinner(data, i);
      }
      }

      // Check diagonals
      if (data[0].value && data[0].value === data[4].value && data[0].value === data[8].value) {
        setModal(true)
        checkWinner(data, 0);
      }
      if (data[2].value && data[2].value === data[4].value && data[2].value === data[6].value) {
        setModal(true)
        checkWinner(data, 2);
      }          

        return (
          null
        )
}
  const handleCheckTie = (data) => {
    let count = 0;

    data.map((cell) => {
      if (cell.value !== "") {
        count++;
      }
    })

    return count;
  }
  const handleReset = () => {
    const newArray = boardArray.map((index) => {      
      index.value = ""
      index.svg = null
    })

    return newArray
  }

  const handleMouseEnter = (e, i) => {
    if (i.svg === null) {
      if (turn) {
        e.currentTarget.innerHTML = `<img src="${XplayHover}" alt="index"/>`
      } else {
        e.currentTarget.innerHTML = `<img src="${OplayHover}" alt="index"/>`
      }
    }
  }  

  const handleMouseLeave = (e, i) => {
    if (i.svg === null) {
      if (turn) {
        e.currentTarget.innerHTML = null
      } else {
        e.currentTarget.innerHTML = null
      }
    }
  } 

  useEffect(() => {
    handleCheck(data);  
    console.log(winner)  
  }, [data])

  function handleChange(id, valueP, svgParam) {
    const newData = [...data];
    if (!data[id].value) {
      newData[id].value = valueP;
      setTurn(!turn);
    }  
    
    if (!data[id].svg) {
      newData[id].svg = svgParam;      
      setTurn(!turn);
    }  

    setData(newData)    
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
            <div key={index.id} className="w-[30%] h-32 bg-myGrey rounded-2xl shadow-customSmallShadow shadow-[#10212A] flex items-center justify-center"
              onClick={() => {handleChange(index.id, turn ? "x" : "o", turn ? Xplay : Oplay)}}
              onMouseEnter={(e) => {handleMouseEnter(e, index)}}
              onMouseLeave={(e) => {handleMouseLeave(e, index)}}                      
            >              
              {index.svg === null ? " " : <img src={index.svg} alt="index"/>}
            </div>
            )
        })}
       
      </div>

      <Score scoreX={scoreX} scoreTie={scoreTie} scoreO={scoreO}/>

      {
        modal ? 
        <ModalWinrate whoWins={winner === "tie" ? "" : winner === "x" ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!"}
        icon={winner === "x" ? Xplay : winner === "tie" ? "tie" : Oplay} 
        resetArray={() => {handleReset(); console.log(data)}} 
        setClose={setModal} css={winner === "x" ? "text-myLightBlue" : winner === "tie" ? "text-myLightGrey" : "text-myOrange"}
        text={winner === "tie" ? "ROUND TIED" : winner === "x" ? "TAKES THE ROUND" : "TAKES THE ROUND"}
        />
          :
        "" 
      }
    </div>
  )
}
