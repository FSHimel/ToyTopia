import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import car from "../assets/car.jpg";
import doll from "../assets/dool.jpg";

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
        <img src={car} alt="Slide 1" className="w-full h-96 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={doll} alt="Slide 2" className="w-full h-96 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.postimg.cc/HW3Z71pN/lucas-george-wendt-yx-Zj-Tv30tl8-unsplash.jpg"
          alt="Slide 3"
          className="w-full h-96 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default NewArrivalSllider;
