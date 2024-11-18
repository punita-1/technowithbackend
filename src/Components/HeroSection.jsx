import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";
import { animate, motion } from 'framer-motion';
import './doodle.css';


const TextVariants = {
  initial: {
    x: -500,
    opacity: 0,

  },
  animate: {
    x: '0',
    opacity: '1',
    transition:
    {
      duration: 1,
      staggeredChildren: 0.1,


    }
  }
}


const SliderVariants = {
  initi: {
    x: 0,

  },
  anima: {
    x: '-200%',
    transition:
    {
      repeat: Infinity,
      // repeatType: "mirror",
      duration: 5,


    }
  }
}



const HeroSection = () => {

  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (<Wrapper className="hero">
    <div
      className=" container grid grid-two-column">
      <motion.div variants={TextVariants} initial='initial' animate='animate'

        className="section-hero-data">
        <motion.p variants={TextVariants}
          className='hero-top-data'>
          WE ARE BACK
        </motion.p>
        <motion.h1 variants={TextVariants}
          className='hero-heading'>
          Technova 2024
        </motion.h1>
        <motion.p initial={{ x: -500, opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{ delay: '0.3', duration: '1' }}
          className='hero-para'>"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!"</motion.p>
        <motion.h3
          initial={{ x: -500, opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{ delay: '0.4', duration: '1' }}
          className="hero-date">"5th April - 6th April"</motion.h3>
        <Timer />
        <motion.div style={{ textAlign: 'center', alignItems: 'center' }} className="slidingTextContainer fullcontainerpadding"
          variants={SliderVariants}
          initial="initi" animate="anima">
          Technova 2024
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: '0', scale: '1' }}
          animate={{ x: '0', opacity: '1', scale: '1.5' }}
          transition={{ delay: '0.6', duration: '1' }}
          style={{ zIndex: '9999999999px' }}
          className="button-container">
          <NavLink to='/event' onClick={handleButtonClick}>
            <Button className='btn'>
              Register Now
            </Button>
          </NavLink>
        </motion.div>


      </motion.div>
      <div>
        <motion.div
          variants={TextVariants} animate='animate' initial='initial'
          className="section-hero-image">
          <img style={{ marginTop: '130px' }} className="hero-img" src="public/images/newfinal.png" alt="Description of the image" />

        </motion.div>
      </div>


    </div>

  </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 5rem 0;

.fullcontainerpadding {
  padding-top: 0px;
  width: 100%;
}

 .section-hero-data {
  display: flex;
  flex-direction: column;
  align-self: center; 
  padding-left: 0px;
  justify-content: center;
  padding: 0 0rem;
}

.button-container {
  margin-left: 300px;
  display: flex;
  max-width: 13rem;
  justify-content: center;
}

.btn {
  max-width: 20rem;
  z-index:9999;
}

.btn:hover a {
  color: white;
}

.timer{
  padding-left: 150px;
  padding-right: 150px;
}

.hero-top-data {
  margin-top:40px;
  margin-left:15px;
  width:780px;
  text-transform: uppercase;
  font-weight: 500;
  font-size:22px;
  color: rebeccapurple;
  letter-spacing: 0.2rem;
}

.hero-heading {
    color: lightgrey;
width:780px;
    text-transform: uppercase;
    font-size: 9rem;
}
.hero-date{
  // margin: 20px 0px 0px;
  // font-family: "Paprika", system-ui;
  font-weight: 600;
  font-size: 2.6rem;
  padding: 10px;
  width:780px;
  // border-radius: 5px;
  text-align: center;
}
.hero-para {
    // font-family: "Sorts Mill Goudy", serif;
    // margin-top: 2rem;
    width:780px;
    color:lightgrey;
    font-size: 2.4rem;
    // text-align: center;
    // line-height: 28px;
    font-style: italic;
    font-weight: 600;
    text-align: center;
}

.hero-img {
  // margin-top: 1000px;
  height: 250px;
  width: 350px;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 5rem 0;

  .fullcontainerpadding {
    padding-top: 0px;
    // width: 100%;
  }
  
   .section-hero-data {
    display: flex;
    flex-direction: column;
    align-self: center; 
    padding-left: 0px;
    justify-content: center;
    padding: 0 1rem;
  }
  
  .button-container {
    margin-left: 70px;
    
    display: flex;
    max-width: 20rem;
    justify-content: center;
  }
  
  .btn {
    max-width: 20rem;
    z-index:9999;
  }
  
  .btn:hover a {
    color: white;
  }
  
  .timer{
    padding-left: 0px;
    padding-right: 0px;
  }
  
  .hero-top-data {
    margin-top:40px;
    margin-left:9px;
    width:100%;
    text-transform: uppercase;
    font-weight: 500;
    font-size:18px;
    color: rebeccapurple;
    letter-spacing: 0.2rem;
    // text-align:center;
  }
  
  .hero-heading {
      color: lightgrey;
      width:100%;
      text-transform: uppercase;
      font-size: 4.2rem;
      text-align: center;
  }
  .hero-date{
    // margin: 20px 0px 0px;
    // font-family: "Paprika", system-ui;
    font-weight: 600;
    font-size: 2.6rem;
    padding: 10px;
    width:100%;
    // border-radius: 5px;
    text-align: center;
  }
  .hero-para {
      // font-family: "Sorts Mill Goudy", serif;
      // margin-top: 2rem;
      width:300px;
      color:lightgrey;
      font-size: 2.0rem;
      // text-align: center;
      // line-height: 28px;
      font-style: italic;
      font-weight: 500;
      text-align: center;
  }
  
  .hero-img {
    height: 220px;
    // align-item: center;
    width: 320px;
    // margin-left:60px;
    // margin-top:-200px;
    // padding-top: 90px;
    // transform: rotate(270deg); /* Rotate the image by 45 degrees */
  }
  
}

`;

export default HeroSection
