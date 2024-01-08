import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { circles } from '../assets'; // Import the circles image

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[300px] w-full'>
    <p className='text-white font-black text-[48px]'>" </p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
        {testimonial}
      </p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        {/* Include the image rendering here when you are ready */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-primary ${styles.padding}`}>
        <div className='flex flex-row'>
          <div className="md:w-1/5 mr-4">
            <h3 style={{ ...styles.sectionSubText, marginTop: '0' }}>WHAT OTHERS SAY</h3>
            <h2 style={styles.sectionHeadText}>Testimonials </h2>
          </div>
          <div className="md:w-1/5 flex justify-end">
            <img src={circles} alt="" />
          </div>
        </div>
        <div className='mt-12 bg-black-100 rounded-[20px]'>
          <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
              <h2 className={styles.sectionHeadText}>Testimonials</h2>
            </motion.div>
          </div>
          <div className={`${styles.paddingX} -mt-72 pb-14 flex overflow-x-auto gap-7`}>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Feedbacks;
