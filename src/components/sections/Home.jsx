import { RevealOnScroll } from "../RevealOnScroll";
import pictureOfMe from "../../assets/nicepicofme.jpg";
import { RotatingTitle } from "../RotatingTitle";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 py-12 md:py-16"
    >
      <RevealOnScroll>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right z-10 w-full md:min-w-[460px] px-2 md:px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Tristen
            </h1>

            <RotatingTitle />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto">
              <a
                href="#projects"
                className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 text-center min-w-[140px]"
              >
                View My Works
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 rounded py-3 px-6 hover:-translate-y-0.5 bg-gray-800 text-center min-w-[140px]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src={pictureOfMe}
              alt="Tristen Bizzaro"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:max-w-md rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
