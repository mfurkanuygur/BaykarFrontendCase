import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Slides } from '../Constant/constant';

const Deneme = () => {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView:3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
        ref={swiperRef}
      >
        {
          Slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex gap-20">
              <div className="rounded-[20px] bg-red-500">
                <div className="p-8 flex flex-col justify-evenly ">
                  <div className="flex items-center gap-2 py-4">
                    <img src={slide.slideLogo} alt={slide.title} />
                    <h3>{slide.title}</h3>
                  </div>
                  <p className="text-2xl">{slide.text}</p>
                  <div className="flex items-center gap-4 pt-4">
                    <img src={slide.userImg} alt={slide.userName} />
                    <div>
                      <h4>{slide.userName}</h4>
                      <h6>{slide.userJob}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={slidePrev}>Previous</button>
        <button onClick={slideNext}>Next</button>
      </div>
    </>
  )
}

export default Deneme