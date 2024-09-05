import HelpMark from '../assets/Question.png'
import Box from '../assets/Box.png'

const Help = () => {
  return (
    <div className="ml-[12px] mt-[20px]">
             <img src={HelpMark} alt="Help" />
             <img src={Box} alt="Box" className='mt-[110px]' />
   </div>
  )
}

export default Help;
