import PropTypes from 'prop-types';

const ImageContainer = ({ images }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center gap-[20px] ml-2 mt-[20px]">
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`Image ${index + 1}`} 
          className="w-[190px] h-[180px] rounded-[24px] object-cover"
        />
      ))}
    </div>
  );
};

ImageContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageContainer;
