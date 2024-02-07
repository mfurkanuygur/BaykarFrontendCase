import { useRef } from 'react';
import leftBtn from "../assets/images/leftBtn.png"
import rightBtn from "../assets/images/rightBtn.png"
import { Slides } from "../Constant/constant";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Section5Slider = () => {
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
        <section className=" container mx-auto  flex  ">
            <div className='w-full p-20 max-md:py-12 max-md:px-4 flex flex-col gap-20  max-md:gap-8 overflow-x-hidden'>
                <div className="relative z-20  w-full flex justify-between items-center max-md:justify-center">
                    <h1 className="font-extrabold max-md:font-bold text-[56px] max-md:text-[32px] ">Because they love us</h1>
                    <div className="flex gap-6 max-md:hidden">
                        <button onClick={slidePrev} >
                            <img src={leftBtn} alt="left" />
                        </button>
                        <button onClick={slideNext}>
                            <img src={rightBtn} alt="right" />
                        </button>
                    </div>
                </div>
                <div className="min-h-[430px] max-md:flex max-md:gap-4">
                    <Swiper className='absolute z-20 left-0 w-full  '
                        slidesPerView={3.5} spaceBetween={30} centeredSlides={true}
                        loop={true} pagination={{ clickable: true }} modules={[Navigation]} freeMode={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            769: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 100,
                            }
                        }}
                        navigation={true} ref={swiperRef}>
                        {
                            Slides.map((slide, index) => (
                                <SwiperSlide key={index} className="flex gap-20 py-4">
                                    <div className="p-8 flex flex-col justify-between rounded-[20px] shadow-lg border-2 ">
                                        <div className="flex items-center gap-2 py-4">
                                            <img src={slide.slideLogo} alt={slide.title} />
                                            <h3 className='text-[#475569] text-2xl font-bold'>{slide.title}</h3>
                                        </div>
                                        <div className='min-h-[190px] min-w-[320px] flex items-center'>
                                            <p className="text-2xl leading-[38.4px] line-clamp-5">{slide.text}</p>
                                        </div>
                                        <div className="flex items-center gap-4 pt-4">
                                            <img className="w-16 h-16" src={slide.userImg} alt={slide.userName} />
                                            <div>
                                                <h4 className='text-lg'>{slide.userName}</h4>
                                                <h6 className='text-[#475569] '>{slide.userJob}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
    
    
            </div>

        </section >
    )
}

export default Section5Slider