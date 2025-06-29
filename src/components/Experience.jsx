import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles.js';
import { experiences } from '..';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 6px',
      padding: '6px 8px',
    }}
    contentArrowStyle={{
      borderRight: '5px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[14px] font-semibold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{
      background: experience.iconBg,
      width: '55px',
      height: '55px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[18px] font-bold font-beckman tracking-[1px]">
        {experience.title}
      </h3>
      <p
        className="text-graphite text-[16px] font-medium font-overcameBold tracking-[0.5px] mt-1"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-10 pl-[1.2rem] text-[14px]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-10 pl-[1.2rem] text-[24px]`}>
          Education & Work.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}

          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '14px 16px',
            }}
            contentArrowStyle={{
              borderRight: '5px solid  #232631',
            }}
            iconStyle={{
              background: '#333333',
              width: '55px',
              height: '55px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <button
              className="flex justify-between sm:text-[14px] text-[12px] text-timberWolf font-semibold font-beckman items-center py-3 pl-3 pr-3 whitespace-nowrap gap-1 w-[120px] h-[42px] rounded-[8px] bg-jetLight hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onClick={() => window.open('/resume (11).pdf', '_blank')}
              onMouseOver={() =>
                document.querySelector('.download-btn').setAttribute('src', downloadHover)
              }
              onMouseOut={() =>
                document.querySelector('.download-btn').setAttribute('src', download)
              }
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn w-[20px] h-[20px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
