import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles.js';
import { projects } from "../constants";


import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
className={`relative ${
  active === id ? 'lg:flex-[2.5] flex-[9]' : 'lg:flex-[0.5] flex-[2]'
} flex items-center justify-center min-w-[220px] 
h-[380px] cursor-pointer card-shadow rounded-[18px] bg-gray-300`}

      onClick={() => handleClick(id)}
    >
      {/* Inactive card - Vertical title */}
      {active !== id ? (
        <div className="flex items-center justify-start pr-[3rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[180px] h-[24px] 
            whitespace-nowrap sm:text-[20px] text-[16px] text-black tracking-[0.5px]
            absolute z-10 lg:bottom-[5rem] lg:rotate-[-90deg] lg:origin-[0,0]
            leading-none"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          {/* Icon Box */}
          <div className="absolute top-6 left-6 w-[90px] h-[90px] bg-gray-100 rounded-[12px] flex items-center justify-center shadow-md z-20">
{/* Icon Box - visible, high z-index */}
<div className="absolute top-6 left-6 w-[120px] h-[100px] bg-black-100 border border-gray-300 rounded-[12px] flex items-center justify-center shadow-md z-30">
  <img
    src={image}
    alt={name}
    className="w-[36px] h-[36px] object-contain"
  />
</div>


          </div>

          {/* Text Content */}
<div className="absolute bottom-0 p-6 justify-start w-full flex-col bg-gray-200 rounded-b-[18px] z-10 backdrop-blur-sm">
  <h2 className="font-bold sm:text-[24px] text-[18px] uppercase font-beckman sm:mt-0 -mt-[0.4rem] text-[#0a0a0a]">
    {name}
  </h2>
  <p className="sm:text-[12px] text-[11px] leading-[18px] max-w-3xl font-poppins tracking-[0.5px] mt-2 text-[#0a0a0a]">
    {description}
  </p>
</div>

        </>
      )}
    </motion.div>
  );
};


const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
                  <p className="text-[24px] sm:text-[28px] font-bold text-platinumLight tracking-wide">
    Case Studies
  </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-platinum text-[18px] max-w-3xl leading-[30px]">
     These projects highlight my ability to build scalable, secure, and cloud-deployed web applications. They demonstrate practical experience in React.js, Django REST Framework, and PostgreSQL, along with RESTful API integrations, real-time dashboards, and CI/CD deployments. Each project reflects my skills in tackling complex challenges, developing clean, efficient solutions, and collaborating within Agile teams.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
