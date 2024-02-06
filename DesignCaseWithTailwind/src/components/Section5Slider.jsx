import { useEffect, useState } from "react";
import leftBtn from "../assets/images/leftBtn.png"
import rightBtn from "../assets/images/rightBtn.png"
import { Slides } from "../Constant/constant";
const Section5Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setSlideIndex((prev) => Math.min(prev + 1, 3));
            } else if (e.deltaY < 0) {
                setSlideIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const handleButtonClick = (direction) => {
        setSlideIndex((prev) => {
            if (direction === 'next') {
                return Math.min(prev + 1, 3);
            } else if (direction === 'prev') {
                return Math.max(prev - 1, 0);
            }
        });
    };

    return (
        <section className="p-20 max-md:py-12 max-md:px-4 flex flex-col gap-20">
            <div className="flex justify-between items-center">
                <h1 className="font-extrabold max-md:font-bold text-[56px] max-md:text-3xl ">Because they love us</h1>
                <div className="flex gap-6 max-md:hidden">
                    <button onClick={() => handleButtonClick('prev')}>
                        <img src={leftBtn} alt="left" />
                    </button>
                    <button onClick={() => handleButtonClick('next')}>
                        <img src={rightBtn} alt="right" />
                    </button>
                </div>
            </div>

            <div className="flex h-screen w-screen overflow-hidden">
                <div className="flex-1 flex-col">
                    {Slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex-1 transition-transform duration-500 ease-in-out ${index === slideIndex ? 'translate-x-0' : '-translate-x-full'}`}>
                            {slide.title}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Section5Slider