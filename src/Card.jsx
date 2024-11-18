import React from 'react';
import './Card.css';

const Card = ({ image, title, description, handleRegisterClick }) => {
    return (
        <div className="card-container col-12 col-md-4 col-lg-3 my-5 card shadow mx-2 p-0">
            <div className="card" style={{ width: '35rem', 
            background:'linear-gradient(120deg, #111132, #111132, #111132, #111132, #111132, #111132,rgba(17, 17, 50, 0))'
            // background:'#111132'
             }} >
            
                <div className="card-img-container">
                    <img
                        src={image}
                        className="card-img-top card-body"
                        alt={title}
                        style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-img-overlay">
                        <h3  className="card-title mt-2 card-title-hover">{title}</h3>
                        <button
                            className="btn btn-primary btn-lg btn-hover"
                            onClick={handleRegisterClick}
                        >
                            Register
                        </button>
                    </div>
                </div>
                <div className="card-body card-body-fixed">
                    <h3 style={{paddingTop:'19px', color:'white'}} className="card-title mt-2 card-title-truncate">
                        {title}
                    </h3>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;