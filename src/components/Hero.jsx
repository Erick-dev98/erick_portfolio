import React from 'react';
import { styles } from '../styles';
import photo from '../assets/portfolio_profile1.png';

const Hero = () => {
  return (
    <section className='relative w-full h-96 mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Erick Mutua</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/>interfaces and web applications
          </p>
        </div>
      </div>

      <div className="fixed top-0 right-0 mt-20 mr-5 rounded-full">
        <img src={photo} alt="" className="w-16 h-16 rounded-full"/>
      </div>

    </section>
  )
}

export default Hero;
