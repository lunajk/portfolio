import { styles } from '../styles.js';
import { motion } from 'framer-motion';

import bwmap from '../assets/backgrounds/pexels-photo-265642.jpeg';

const Hero = () => {
  return (
    <>
      {/* Background images */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen overflow-hidden">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">

        {/* Left Content */}
        <div
          className={`absolute inset-0 sm:top-[200px] top-[120px] 
          lg:top-[180px] xl:top-[220px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6`}
        >
          {/* Decorative line - hidden on larger screens */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3 sm:mt-0 sm:ml-0 sm:hidden">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a]" />
            <div className="w-1 h-40 bw-gradient" />
          </div>

          {/* Hero Text */}
          <div className="z-10 pr-4 sm:pr-0">
<h1 className="text-[28px] xxs:text-[32px] xs:text-[34px] sm:text-[50px] font-poppins font-extrabold uppercase text-eerieBlack leading-tight">
  Hi, I'm{' '}
  <span className="text-hero text-[36px] xxs:text-[40px] xs:text-[44px] sm:text-[60px] md:text-[50px] lg:text-[70px] font-mova font-extrabold uppercase">
    VIGNESHWARI
  </span>
</h1>


            <p className="mt-5 text-eerieBlack text-[16px] sm:text-[20px] leading-relaxed max-w-[90vw] sm:max-w-3xl">
              Delivering scalable, secure, and AI-enabled web applications that simplify business processes and optimize performance. Turning complex business challenges into elegant, AI-powered digital experiences.
            </p>
          </div>

          {/* Extra spacing for mobile layout fix */}
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        {/* Hero Image */}

      </section>
    </>
  );
};

export default Hero;
