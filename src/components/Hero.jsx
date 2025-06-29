import { styles } from '../styles.js';
import { motion } from 'framer-motion';
import bwmap from '../assets/backgrounds/pexels-photo-265642.jpeg';

const Hero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen overflow-hidden">
        <img
          src={bwmap}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
        {/* Content Container */}
        <div
          className={`absolute inset-0 sm:top-[200px] top-[120px] 
          lg:top-[180px] xl:top-[220px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6`}
        >

          {/* Decorative line - only on mobile */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3 sm:mt-0 sm:ml-0 sm:hidden">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a]" />
            <div className="w-1 h-40 bw-gradient" />
          </div>

          {/* Text Content */}
          <div className="z-10 pr-4 sm:pr-0">
            {/* MOBILE VIEW */}
            <div className="block sm:hidden">
              <h1 className="text-[28px] xxs:text-[32px] xs:text-[34px] font-poppins font-extrabold uppercase text-gray-700 leading-tight">
                Hi, I'm{' '} <br />
                <span className="text-hero text-[24px] xxs:text-[28px] xs:text-[44px] font-mova uppercase">
                  VIGNESHWARI
                </span>
              </h1>
              <p className="mt-5 text-gray-700 text-[16px] leading-relaxed max-w-[90vw]">
                Delivering scalable, secure, and AI-enabled web applications that simplify business processes and optimize performance.
              </p>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden sm:block">
              <h1 className="text-[50px] font-poppins font-extrabold uppercase text-eerieBlack leading-tight">
                Hi, I'm{' '}
                <span className="text-hero text-[60px] md:text-[50px] lg:text-[70px] font-mova uppercase">
                  VIGNESHWARI
                </span>
              </h1>
              <p className="mt-5 text-eerieBlack text-[20px] leading-relaxed max-w-3xl">
                Delivering scalable, secure, and AI-enabled web applications that simplify business processes and optimize performance. Turning complex business challenges into elegant, AI-powered digital experiences.
              </p>
            </div>
          </div>

          {/* Spacer for layout control */}
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
