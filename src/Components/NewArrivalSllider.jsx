import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Import CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const NewArrivalSllider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <img
          src="https://i.postimg.cc/DyrMy4S5/luis-arias-ZDy-Wum-OJo-SY-unsplash.jpg"
          alt="Slide 1"
          className="w-full h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.postimg.cc/PqgWwKcm/steward-masweneng-JSLuw23jed-Y-unsplash.jpg"
          alt="Slide 2"
          className="w-full h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.postimg.cc/QCXWQzqW/john-carlo-tubelleza-jagi-ILTQ8p-A-unsplash.jpg"
          alt="Slide 3"
          className="w-full h-96 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default NewArrivalSllider;
