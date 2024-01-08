import React from 'react';
import { instagram, facebook, youtube, whatsapp } from '../assets';

const Footer = () => {
  return (
    <div className='bg-primary text-white py-8'>
      <div className='flex justify-center space-x-6'>
        <a href='https://www.instagram.com/realrule.2048?igsh=MXN1ZXBjNGpvNzd4aA==' target='_blank' rel='noopener noreferrer'>
          <img src={instagram} alt='Instagram' className='w-10 h-10' />
        </a>
        <a href='https://www.facebook.com/mamta.chandna.31' target='_blank' rel='noopener noreferrer'>
          <img src={facebook} alt='Facebook' className='w-10 h-10' />
        </a>
        <a href='https://www.youtube.com/@Mamta.Chawla' target='_blank' rel='noopener noreferrer'>
          <img src={youtube} alt='YouTube' className='w-10 h-10' />
        </a>
        <a href='https://wa.link/sjqztn' target='_blank' rel='noopener noreferrer'>
          <img src={whatsapp} alt='WhatsApp' className='w-10 h-10' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
