import React from 'react';
import { styles } from '../style';
import { circles } from '../assets';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px] shadow-card"
        style={{
          backgroundImage: `linear-gradient(primary, secondary)`,
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-24 h-24 object-contain" />
          <h3 className="text-primary text-[20px] text-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className={`bg-primary ${styles.padding} flex flex-wrap items-center`}>
      <div className="md:w-1/5 mr-8">
        <h3 style={{ ...styles.sectionSubText, marginTop: '0' }}>INTRODUCTION</h3>
        <h2 style={styles.sectionHeadText}>OVERVIEW</h2>
      </div>
      <div className="md:w-1/8 flex justify-end">
        <img src={circles} alt="" className="mx-auto" />
      </div>
      <p className={`max-w-[70%] text-justify text-[#2ECC71] text-2xl mt-6`}>
        Welcome to Totalented Center Of Learning, your gateway to a world of enriching courses in food, mathematics, crafts, and more. At the heart of our platform is a commitment to providing dynamic and accessible learning experiences. Our expert instructors bring their knowledge to life, offering engaging lessons that cater to diverse interests. Whether you're exploring the culinary arts, diving into mathematics, or unleashing your creativity with crafts, our courses empower you to unlock your full potential. Join a flexible, collaborative community, and embark on a journey of lifelong learning with Totalented Center Of Learning. Discover, grow, and transform your skills in just a few clicks.
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
