import  { useState } from 'react';
import ImageHeader from './ImageHeader';
import ImageContainer from './ImageContainer';
import defaultImage from "../assets/Image.png";

const Gallery = () => {
  const [images, setImages] = useState([defaultImage, defaultImage, defaultImage]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle adding a new image via file input
  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  // Show the previous image
  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Show the next image
  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <ImageHeader onPrevious={showPrevious} onNext={showNext} onAddImage={addImage} />
      <ImageContainer images={visibleImages} />
    </div>
  );
};

export default Gallery;
