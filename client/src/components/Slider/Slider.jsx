// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./Slider.css";

// const Slider = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(autoSlide);
//   }, [currentIndex]);

//   return (
//     <div className="slider-container">
//       <FaArrowLeft className="arrow left-arrow" onClick={prevSlide} />
//       <div className="slider">
//         {data.images.map((img) => (
//           <img key={img} src={img} />
//         ))}
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       </div>
//       <FaArrowRight className="arrow right-arrow" onClick={nextSlide} />
//       <div className="dots">
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             className={`dot ${currentIndex === idx ? "active" : ""}`}
//             onClick={() => setCurrentIndex(idx)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + data.images.length) % data.images.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <FaArrowLeft className="arrow left-arrow" onClick={prevSlide} />
      <div className="slider">
        {data.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>
      <FaArrowRight className="arrow right-arrow" onClick={nextSlide} />
      <div className="dots">
        {data.images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
