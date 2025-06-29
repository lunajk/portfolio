import { motion } from 'framer-motion';
import { BallCanvas } from "./Ball";
import { SectionWrapper } from '../hoc';
import { styles } from '../styles.js';
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[24px] sm:text-[28px] font-bold text-platinumLight tracking-wide">
          My Skills
        </p>
        <h2 className={`${styles.sectionHeadTextLight} text-[28px] sm:text-[36px]`}>
          Technologies.
        </h2>
      </motion.div>

      {/* Tech List */}
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex flex-col items-center">

            {/* Show BallCanvas only on desktop */}
            <div className="hidden sm:block w-24 h-24">
              <BallCanvas icon={technology.icon} />
              <p className="text-white text-[14px] font-medium text-center mt-2">{technology.name}</p>
            </div>

            {/* Show tech name only on mobile */}
            <div className="block sm:hidden text-center">

              <p className="text-white text-[14px] font-semibold">{technology.name}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
