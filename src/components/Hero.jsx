// Hero.js

import React from 'react';
import { styles } from '../style';
import { mainImg, moveDown } from '../assets';

const Hero = () => {


  return (
    <div className={`flex flex-col bg-primary   text-left items-center ${styles.padding}`}>
      <div className={`flex flex-col text-left ${styles.paddingY}`}>
        <h2 style={styles.heroHeadText} className='text-4xl'>
          Unlock your potential with transformative courses for lifelong learning!
        </h2>
      </div>
      <div className=''>
        <img src={mainImg} alt="hero" />
      </div>
      <div>
        <button>
          <img src={moveDown} alt="arrow"  />
        </button>
      </div>
    </div>
  );
};

export default Hero;
