import { styles } from '../styles.js';
import { motion } from 'framer-motion';

import shaq from '../assets/backgrounds/aesthi.jpg';
import bwmap from '../assets/backgrounds/pexels-photo-265642.jpeg';


const Hero = () => {
  return (
    <>
      {/* Background images */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>


      {/* Hero Section */}
<section className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">

        <div
          className={`absolute inset-0 sm:top-[200px] top-[150px]
          lg:top-[180px] xl:top-[220px] ${styles.paddingX}
          max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          {/* Decorative line */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>
          <div>

          </div>
          {/* Hero Text */}
          <div>
   
<h1 className="text-[42px] sm:text-[50px] font-poppins font-extrabold uppercase text-eerieBlack leading-tight">
  Hi, I'm{' '}

              <span className="text-hero sm:text-[60px] md:text-[50px] lg:text-[70px] font-mova font-extrabold uppercase">
                VIGNESHWARI
              </span>  </h1>
          
            <p
              className="mt-5 text-eerieBlack text-body sm:text-[20px] leading-relaxed max-w-3xl"
            >
              Delivering scalable, secure, and AI-enabled web applications that simplify business processes and optimize performance. Turning complex business challenges into elegant, AI-powered digital experiences.
            </p>
          </div>

          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="vigneshwari"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
