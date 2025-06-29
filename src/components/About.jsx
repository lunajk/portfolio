import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { services } from '..';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// ServiceCard component
const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[180px] w-full card-gradient p-[1px] rounded-[14px] shadow-card"
    >
      <div className="bg-jetLight rounded-[14px] py-4 px-6 min-h-[180px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-10 h-10 object-contain mb-2" />
        <h3 className="text-taupe text-[14px] font-semibold text-center leading-snug">{title}</h3>
      </div>
    </motion.div>
  );
};

// About page component
const About = () => {
  return (
    <div className="-mt-[5rem]">
      <motion.div variants={textVariant()}>
        <p className="text-[20px] text-dim tracking-wide">Introduction</p>
        <h2 className="text-[36px] sm:text-[42px] font-extrabold text-eerieBlack tracking-tight leading-tight">Overview.</h2>
      </motion.div>

 <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-dim text-[16px] sm:text-[18px] leading-[26px] max-w-3xl"
>
  Full-Stack Developer specializing in React.js (MUI), Django REST Framework, and PostgreSQL — delivering scalable AI-proctored test platforms, enterprise dashboards, and dynamic business management tools. Proficient in RESTful API development, JWT-secured authentication, CI/CD pipelines, and modern, responsive UI/UX. Focused on clean, efficient, and cloud-optimized solutions that drive operational value.
</motion.p>


      <div className="mt-16 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
