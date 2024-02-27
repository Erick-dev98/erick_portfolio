import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import photo from '../assets/portfolio_profile1.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isExtraLarge, setIsExtraLarge] = useState(false);

  useEffect(() => {
    const smallMediaQuery = window.matchMedia('(max-width: 500px)');
    const mediumMediaQuery = window.matchMedia('(max-width: 800px)');
    const largeMediaQuery = window.matchMedia('(min-width: 801px) and (max-width: 1024px)');
    const extraLargeMediaQuery = window.matchMedia('(min-width: 1025px) and (max-width: 1280px)');
  
    setIsMobile(smallMediaQuery.matches);
    setIsMedium(mediumMediaQuery.matches);
    setIsLarge(largeMediaQuery.matches);
    setIsExtraLarge(extraLargeMediaQuery.matches);
  
    const handleSmallMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
  
    const handleMediumMediaQueryChange = (event) => {
      setIsMedium(event.matches);
    };

    const handleLargeMediaQueryChange = (event) => {
      setIsLarge(event.matches);
    };

    const handleExtraLargeMediaQueryChange = (event) => {
      setIsExtraLarge(event.matches);
    };
  
    smallMediaQuery.addEventListener('change', handleSmallMediaQueryChange);
    mediumMediaQuery.addEventListener('change', handleMediumMediaQueryChange);
    largeMediaQuery.addEventListener('change', handleLargeMediaQueryChange);
    extraLargeMediaQuery.addEventListener('change', handleExtraLargeMediaQueryChange);
  
    return () => {
      smallMediaQuery.removeEventListener('change', handleSmallMediaQueryChange);
      mediumMediaQuery.removeEventListener('change', handleMediumMediaQueryChange);
      largeMediaQuery.removeEventListener('change', handleLargeMediaQueryChange);
      extraLargeMediaQuery.removeEventListener('change', handleExtraLargeMediaQueryChange);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Erick</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br
            className='sm:block hidden'/>interfaces and web applications
          </p>
        </div>
      </div>

      <div className={`absolute ${
        isMobile 
          ? 'xs:bottom-10 bottom-32' 
          : isMedium 
            ? 'top-[50%] left-[50%] transform translate[-50%, -50%]'
            : (isLarge || isExtraLarge)
              ? 'top-0 right-0 mt-20 mr-5 rounded-full'
              : 'top-0 right-0 mt-20 mr-5 rounded-full'
      }`}>
        <img src={photo} alt="" className="w-full h-full rounded-full"/>
      </div>

    </section>
  )
}

export default Hero;
