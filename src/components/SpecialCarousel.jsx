import { Carousel } from "@material-tailwind/react";
import { Events } from "../data/eventCarousel";
import { LandingCarousel } from "../data/landingCarousel";
function SpecialCarousel({ arrows = true, name = "" }) {
  return (
    <Carousel
      id={name}
      className={`overflow-hidden ${
        name === "Landing" ? "h-[70vh] sm:h-[80vh]" : "h-[320px] sm:h-[480px]"
      }`}
      autoplay={true}
      loop={true}
      autoplayDelay={4000}
      prevArrow={
        arrows
          ? null
          : () => {
              return null;
            }
      }
      nextArrow={
        arrows
          ? null
          : () => {
              return null;
            }
      }
      navigation={({ setActiveIndex, activeIndex, length }) => {
        if (name == "Landing") {
          document.onkeydown = (e) => {
            if (e.key === "ArrowRight") {
              setActiveIndex((prevIndex) => (prevIndex + 1) % length);
            } else if (e.key === "ArrowLeft") {
              setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
            }
          };
        }
        return (
          <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        );
      }}
    >
      {name == "Landing"
        ? LandingCarousel.map((img, index) => {
            return (
              <img
                key={index}
                style={{
                  filter: name == "Landing" ? "brightness(0.8)" : null,
                }}
                className="h-full w-full object-cover"
                src={img}
                alt={`Image ${index}`}
              />
            );
          })
        : Events.map((Event, index) => {
            try {
              return (
                <div
                  style={{
                    backgroundImage: `url(${Event.img})`,
                  }}
                  key={index}
                  className="relative text-white w-full h-full object-fit !bg-center !bg-no-repeat !bg-cover bg-[#00000033]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 flex flex-col justify-center items-center md:justify-end md:items-start p-6 sm:p-10 w-full h-full text-center md:text-left">
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                      {Event.name}
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80">
                      {Event.desc}
                    </p>
                  </div>
                </div>
              );
            } catch (e) {}
          })}
    </Carousel>
  );
}

export default SpecialCarousel;
