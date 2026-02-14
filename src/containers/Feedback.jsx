import { useRef, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import { SectionTitle, Section } from "../components";
import shape3 from "../assets/shape-3.png";
import { feedbacks } from "../data";

const Feedback = ({ bgShape }) => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = () => {
    const currentSlideIndex = swiperRef.current.swiper.realIndex;
    setCurrentSlide(currentSlideIndex);
  };

  return (
    <Section padding={true} className="relative">
      <div className="container">
        <SectionTitle
          center={true}
          title="Patient Reviews"
          heading="What Our Patients Say"
          desc="Real feedback from patients who trusted us with their healthcare needs and experienced quality medical support."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div>
          <div className="-mb-[3.75rem] sm:-mb-[4.375rem] md:-mb-20 max-w-[450px] px-1 mx-auto relative z-[2]">
            <Swiper
              ref={swiperRef}
              onSlideChange={handleSlideChange}
              centeredSlides={true}
              slidesPerView={5}
              slideToClickedSlide={true}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mySwiper"
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide
                  key={`feedback-${index}`}
                  className="px-0.5 cursor-pointer sm:px-0 select-none"
                >
                  {({ isActive }) => (
                    <img
                      src={feedback.img}
                      alt={feedback.name}
                      className={`w-full sm:w-[5.3125rem] h-full sm:h-[5.3125rem] sm:mx-auto border-2 border-primary p-0.5 rounded-full transition-500 ${
                        isActive ? "" : "opacity-70 scale-[0.8]"
                      }`}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mx-auto max-w-[900px] relative">
            <div className="shadow-faq z-[1] bg-white md:shadow-feedback pt-[3.4375rem] md:pt-[4.6875rem] px-5 md:px-[5.625rem] md:pb-2.5 mb-[3.4375rem] md:mb-[4.0625rem] mt-[2.1875rem] mx-1.5 md:mx-[3.125rem] text-center rounded-[0.3125rem] relative before:absolute before:content-[''] before:opacity-90 before:h-1/2 before:-bottom-5 before:left-0 before:right-0 before:rounded-[0.1875rem] before:mx-5 before:shadow-feedback-layer before:bg-white before:z-[1] after:absolute after:content-[''] after:opacity-70 after:h-1/2 after:-bottom-10 after:left-0 after:right-0 after:rounded-[0.1875rem] after:mx-10 after:shadow-feedback-layer-2 after:bg-white after:z-[1]">
              <div className="relative z-[2]">
                <h3 className="text-17px font-bold text-secondary md:text-[1.25rem]">
                  {feedbacks[currentSlide].name}
                </h3>
                <span className="text-13px text-primary block mt-1.5 mb-4 md:text-sm">
                  {feedbacks[currentSlide].role}
                </span>
                <p className="text-textPrimary text-sm md:text-base !leading-[1.8]">
                  {feedbacks[currentSlide].message}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-x-2 mt-[60px] md:mt-0">
              <button className="swiper-button-prev w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full flex justify-center items-center text-xl lg:text-2xl text-secondary bg-[#f0f0f0] cursor-pointer md:absolute md:top-1/2 md:-translate-y-1/2 -left-1.5 lg:-left-5 z-10 hover:text-white hover:bg-primary transition-500">
                <BsArrowLeft />
              </button>
              <button className="swiper-button-next w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full flex justify-center items-center text-xl lg:text-2xl text-secondary bg-[#f0f0f0] cursor-pointer md:absolute md:top-1/2 md:-translate-y-1/2 -right-1.5 lg:-right-5 z-10 hover:text-white hover:bg-primary transition-500">
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {bgShape && (
        <div className="absolute bottom-0 left-0 select-none -z-1">
          <img src={shape3} alt="" className="opacity-60" />
        </div>
      )}
    </Section>
  );
};

export default Feedback;
