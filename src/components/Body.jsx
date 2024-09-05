import Horizontal from "./Horizontal"
import Help from "./Help"
import Header from "./Header"
import side from "../assets/side.png";
import Gallery from "./Gallery";
const Body = () => {
  return (
    <div className="2xl:w-[1728px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1530px] w-[1536px] sm:h-[750px]  2xl:h-[895px] xl:h-[895px] rounded-[28px]  bg-gradient-to-b from-[#373E44] to-[#191B1F] flex">
        <div className="flex flex-col">
          <div className="w-[720px] h-[316px] sm:ml-[15px] xl:ml-[700px] lg:ml-[150px] 2xl:ml-[922px] xl:mt-[96px] sm:mt-[10px] 2xl:mt-[96px] rounded-[19px]  shadow-[6px_6px_3px_0px_rgba(0,0,0,0.4)] flex bg-[#363C43]">
             <Help/>
             <Header/>
             <img src={side} alt="" className="mt-[111px] ml-[20px] w-[15px] h-[64px]" />
          </div>
          <Horizontal/>
          <div className="w-[720px] h-[330px] sm:ml-[15px] xl:ml-[700px] lg:ml-[150px] 2xl:ml-[922px] mt-[15px] rounded-[19px] flex  shadow-[6px_6px_3px_0px_rgba(0,0,0,0.4)] bg-[#363C43]">
             <Help/>
             <Gallery/>
          </div>
          <Horizontal/>
        </div>
    </div>
  )
}

export default Body