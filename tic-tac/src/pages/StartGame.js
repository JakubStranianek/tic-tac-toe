import { Link } from 'react-router-dom';
import Button from '../components/Button'
import ChooseIcon from '../components/ChooseIcon'
import XoIcons from '../components/XoIcons'

export default function StartGame() {

  return (
    <>   
    <div className={`flex w-10/12 md:w-1/2 xl:w-1/4 flex-col items-center`}>
        <XoIcons css="pb-8" />
        <ChooseIcon />
        <div className='w-full pt-8'>
          <Link to={"/in-game"}>
            <Button text={"new game (VS CPU)"} css={"bg-myLightOrange shadow-myOrange"}/>
          </Link>
          <div className='pt-6'>
          <Link to={"/in-game"}>
            <Button text={"new game (VS PLAYER)"} css={"bg-myLightBlue shadow-myBlue"}/>
          </Link>
          </div>
        </div>
    </div>
    </>
  )
}
