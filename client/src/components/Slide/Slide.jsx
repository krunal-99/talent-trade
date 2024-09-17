// import React from "react";
// import "./Slide.css";
// import { cards } from "../../data";
// import CategoryCard from "../CategoryCard/CategoryCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// const Slide = () => {
//   return (
//     <div className="slide">
//       <Swiper
//         spaceBetween={500}
//         slidesPerView={10}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <div className="container">
//           <SwiperSlide>
//             {cards.map((card) => (
//               <CategoryCard item={card} key={card.id} />
//             ))}
//           </SwiperSlide>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Slide;

import React from "react";
import "./Slide.css";
import { cards } from "../../data";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slide = () => {
  return (
    <div className="slide">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10} // Adjust the space between the slides
        slidesPerView={3} // Number of slides visible at once (adjust based on design)
        onSlideChange={() => console.log("slide change")}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <CategoryCard item={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
