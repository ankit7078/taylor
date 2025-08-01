import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";

export default function Testimonial({ testimonials }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  useEffect(() => {
    setIsSwiperReady(true);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {isSwiperReady && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFlip]}
              effect="flip"
              flipEffect={{
                slideShadows: true,
                limitRotation: true,
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-8 md:p-12 mx-4 shadow-sm">
                    <div className="flex justify-center mb-8">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <LuStar
                          key={idx}
                          className="text-yellow-400 fill-current w-5 h-5 mx-0.5"
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 text-center font-medium leading-relaxed mb-8">
                      "{testimonial?.text}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <img
                        src={""}
                        alt={testimonial?.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-gray-100"
                      />
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 mb-1">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            ref={prevRef}
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <LuChevronLeft className="w-5 h-5 text-gray-600 transition-colors" />
          </button>

          <button
            ref={nextRef}
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md"
          >
            <LuChevronRight className="w-5 h-5 text-gray-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
