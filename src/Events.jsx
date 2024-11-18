import React, { useState } from 'react';
import './Event.css'
import { NavLink } from 'react-router-dom';
import CardGroup from './Cardgroup';
import events from "./assets/data"
import SearchBar from './SearchBar';
import { Tabs, Tab } from 'react-bootstrap';

const Event = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchResults, setSearchResults] = useState(events);

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(events);
    } else {
      const results = searchResults.filter((event) => event.category.toLowerCase().includes(query.toLowerCase()) || event.title.toLowerCase().includes(query.toLowerCase()));
      console.log(results);
      setSearchResults(results);
    }
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  return (

    <div>

      {/* <SearchBar onSearch={handleSearch} /> */}

      <div className='social-icon-heading' 
      style={{ alignItems: 'center', textAlign: 'center', marginTop:'-90px' }}
      > <b>EVENTS</b>
      <SearchBar onSearch={handleSearch} />

      </div>


      <Tabs className='justify-content-center ' style={{fontSize:'20px'}}>
        <Tab eventKey="centralized" title="Centralized">
          <h2 style={{paddingTop:'30px', fontSize:'50px', color:'lightgrey'}}><b>CENTRALIZED EVENTS</b></h2>
          <CardGroup
            heading="Unite & Ignite: Events for All Students"
            events={searchResults.filter((ev) => ev.category === "centralized")}
            handleRegisterClick={handleRegisterClick}
          />
        </Tab>
        <Tab eventKey="dep" title="Department">
          <h2 style={{paddingTop:'30px', fontSize:'50px', color:'lightgrey'}}><b>DEPARTMENT EVENTS</b></h2>
          <CardGroup
            heading="Department of COMPUTER SCIENCE ENGINEERING(CSE) #COSMOS"
            events={searchResults.filter((ev) => ev.category === "computer")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING #INTEC"
            events={searchResults.filter((ev) => ev.category === "electronics")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Biotechnology department #ENGENISIS"
            events={searchResults.filter((ev) => ev.category === "biotechnology")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department of Management Studies(MBA) #ZENITH "
            events={searchResults.filter((ev) => ev.category === "management")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="DEPARTMENT OF AGRICULTURE ENGINEERING #CEEES "
            events={searchResults.filter((ev) => ev.category === "agriculture")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="DEPARTMENT OF BIO MEDICAL ENGINEERING(BME) #MEDITRONICA "
            events={searchResults.filter((ev) => ev.category === "biomedical")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department of Electrical Engineering"
            events={searchResults.filter((ev) => ev.category === "electrical")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department of Chemical Engineering #MANTHAN"
            events={searchResults.filter((ev) => ev.category === "chemical")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="DEPARTMENT OF Mathematics #MATHEMAGICIANS"
            events={searchResults.filter((ev) => ev.category === "mathematics")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="DEPARTMENT OF PHYSICS #RAMAN"
            events={searchResults.filter((ev) => ev.category === "physics")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department OF MECHANICAL ENGINEERING(MED) #SOMEC"
            events={searchResults.filter((ev) => ev.category === "Mechanical")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department OF CHEMISTRY #RASAYANAM"
            events={searchResults.filter((ev) => ev.category === "chemistry")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Department OF ARCHITECHTURE"
            events={searchResults.filter((ev) => ev.category === "architecture")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="CIVIL DEPARTMENT #NIRMAN"
            events={searchResults.filter((ev) => ev.category === "civil")}
            handleRegisterClick={handleRegisterClick}
          />
        </Tab>
        <Tab eventKey="Society" title="Society">
        <h2 style={{paddingTop:'30px', fontSize:'50px', color:'lightgrey'}}><b>SOCIETY EVENTS</b></h2>
          <CardGroup
            heading="SUNSHINE"
            events={searchResults.filter((ev) => ev.category === "sunshine")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="E-Cell"
            events={searchResults.filter((ev) => ev.category === "e-cell")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="LISOC (LITERARY SOCIETY) "
            events={searchResults.filter((ev) => ev.category === "lisoc")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="SAVERA"
            events={searchResults.filter((ev) => ev.category === "savera")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="Thinkbots"
            events={searchResults.filter((ev) => ev.category === "Thinkbots")}
            handleRegisterClick={handleRegisterClick}
          />
          <CardGroup
            heading="OPEN SOURCE DEVELOPERS COMMUNITY #DCRUSTODC"
            events={searchResults.filter((ev) => ev.category === "dcrustodc")}
            handleRegisterClick={handleRegisterClick}
          />
        </Tab>
      </Tabs>

      {/* // Add more CardGroup components as needed */}
      {showPopup && (
        <div className="popup animate__animated animate__zoomIn animate__faster">
          <div className="popup-content">
            <h5>{selectedEvent.title}</h5>
            <div className="popup-text mb-3">
              <pre>{selectedEvent.description}</pre>
            </div>
            <NavLink
              className="btn btn-primary me-2 text-light btn-lg"
              to={"/registerform/" + selectedEvent.id}>
              Register Now
            </NavLink>

            <button className="btn btn-secondary btn-lg" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;