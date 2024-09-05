import PropTypes from 'prop-types';
import right from "../assets/right.png";
import left from "../assets/left.png";

const ImageHeader = ({ onPrevious, onNext, onAddImage }) => {
  return (
    <div className="flex">
      {/* Gallery Title */}
      <div className="w-[149px] h-[62px] mt-[20px] ml-[20px] rounded-[20px] bg-[#171717]">
        <p className="text-[#ffffff] text-[20px] font-[500] text-center pt-[15px]">Gallery</p>
      </div>

      {/* Add Image Button */}
      <div 
        className="w-[132px] h-[46px] mt-[30px] ml-[150px] bg-[#5a6064] text-center pt-2  shadow-[6px_6px_3px_0px_rgba(0,0,0,0.4)] rounded-[30px] cursor-pointer "
      >
        <label htmlFor="imageInput" className="text-md text-white font-[400] cursor-pointer">+ ADD IMAGE</label>
        <input 
          type="file" 
          id="imageInput" 
          accept="image/*" 
          style={{ display: 'none' }} 
          onChange={onAddImage} 
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-[10px] ml-[10px]">
        <img 
          src={left} 
          alt="Previous" 
          className="w-[105px] h-[105px] cursor-pointer" 
          onClick={onPrevious}
        />
        <img 
          src={right} 
          alt="Next" 
          className="w-[105px] ml-[-40px] h-[105px] cursor-pointer" 
          onClick={onNext}
        />
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
};

export default ImageHeader;
