 const ImageModal = ({ images, currentIndex, closeModal, prevImage, nextImage }) => {
    return (
      <div  onClick={closeModal} className="fixed top-0 left-0 w-full h-full cursor-zoom-out bg-black bg-opacity-75 customIndex4 flex items-center justify-center">
        <div onClick={(e)=> e.stopPropagation()}  className="text-right cursor-default  bg-white px-4 py-2 rounded-lg">
          {/* Close Button */}
          <button
            className="flex   items-center justify-center my-2 ml-[85%] w-8 h-8 text-black text-4xl rounded-full bg-gray-300 hover:bg-[var(--contrast2)] hover:text-[var(--light)] "
            onClick={closeModal}
          >
            &times;
          </button>
  
          {/* Current Image */}
          <img
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="w-[200px] h-[200px] object-cover cursor-pointer"
            onClick={(e)=>nextImage(e)}
          />
  
          {/* Left and Right buttons */}
          <button
            onClick={(e)=> prevImage(e)}
            className="absolute left-4 sm:left-20  top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={(e)=>nextImage(e)}
            className="absolute right-4 sm:right-20 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          >
            &#10095;
          </button>
  
          {/* Image Counter */}
          <p className="text-center mt-4">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    );
  };
  
  
export default ImageModal;