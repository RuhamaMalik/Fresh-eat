import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal with selected image
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Image Gallery */}
      <div className="flex items-center gap-[20px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="cursor-pointer w-[100px] h-[100px] object-cover"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Current Image */}
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="w-[400px] h-[400px] object-cover"
            />

            {/* Left and Right buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
              &#10095;
            </button>

            {/* Image Counter */}
            <p className="text-center mt-4">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
