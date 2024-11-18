import React, { useState } from 'react';
import HeroSection from "./Components/HeroSection";
import SocialIcon from "./Socialicon";
// import Previously from "./previously";
import {motion} from 'framer-motion';
import CardGroup from './Cardgroup';
import Venue from "./venue";
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
import './minorhome.css';
import './button.css';
import HomeAboutCard from './HomeAboutCard';
import ParalaxNight from './ParalaxNight';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const data = {
    name: "Technova 2k24",
    image: "./images/home_hero (2).png"
  };
  const events = [
    {
      id: 50,
      image: 'https://via.placeholder.com/150',
      title: 'PROJRCT EXPO',
      min: '1',
      max: '5',
      category: 'centralized',
      description: `
  
      PROJECT EXPO: 
      Branch wise for all Branches of Engineering, Architecture, and Sciences
      
      `,
    },
    {
      id: 51,
      image: 'https://via.placeholder.com/150',
      title: 'HOBBY EXPO',
      min: '1',
      max: '1',
      category: 'centralized',
      description: `
  
      HOBBY EXPO:
      a) Exhibition
      b) Craftsman
      
      `,
    },
    {
      id: 52,
      image: 'public/images/events_profile_pic/poster_making_pic.png', //done
      title: 'POSTER PRESENTATION',
      min: '1',
      max: '1',
      category: 'centralized',
      description: `
      
      POSTER PRESENTATION:
      Branch wise for all Branches of Engineering, Architecture, and Sciences
      
      `,
    },]
  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleViewAllClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <HeroSection {...data} />
      <SocialIcon />
      <HomeAboutCard/>
      {/* <Previously /> */}
      <ParalaxNight/>
      <div >
        <h2 style={{ fontSize:'60px',letterSpacing:'0.5px',fontWeight:"400", color:'lightgrey',paddingTop:'100px' }}><b>Events</b></h2>
        <CardGroup
          heading="Unite & Ignite: Events for All Students"
          events={events.slice(0, 3)}
          handleRegisterClick={handleRegisterClick}
        />
<div style={{paddingBottom:'100px'}}>
     <motion.div
     initial={{scale:'1'}}
     animate={{scale:1.5}}
     className="button-container">
      <NavLink to='/event' onClick={handleViewAllClick}>
        <Button className='btn eventpage-btn'>
          View all
        </Button>
      </NavLink>
    </motion.div>
    </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h5>{selectedEvent.title}</h5>
              <div className="popup-text">
                <pre>{selectedEvent.description}</pre>
              </div>
              <a href={`/registerform/` + selectedEvent.id}><button className="btn btn-primary">Register Now</button></a>
              <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Venue />
    </>
  );
};

export default Home;

