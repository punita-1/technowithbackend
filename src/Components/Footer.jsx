import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

const Footer = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <Wrapper>
      <section className="contact-short">
        <div style={{ color: 'black' }} className="grid grid-two-column">
          <div>
            <h3> Do you have any querry?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to='/contact' onClick={handleButtonClick}>
              <Button style={{ marginLeft: '150px', borderRadius: '5px', color: 'black', borderColor: 'black', border: 'solid 2px', fontSize: '12px' }}>
                Contact us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Technova 2024</h3>
            < p >Join us at Technova, and together, let's embark on a journey of discovery, innovation, and endless opportunities!</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Let's Connect</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input style={{ backgroundColor: 'transparent', borderRadius: '5px', borderColor: 'white' }} type="submit" value="Submit" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follow Up</h3>
            <div className="footer-social--icons">
              <div>
                <ReactSocialIcon url="https://github.com" />
              </div>
              <div>
                <ReactSocialIcon url="https://linkedin.com" />
              </div>
              <div>
                <ReactSocialIcon url="https://instagram.com" />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <h3 style={{ fontSize: '15px' }}><ReactSocialIcon url="https://www.linkedin.com/in/punitagaba/" style={{ height: 30, width: 30, marginLeft: '10px' }} /> Punita Gaba</h3>
            <h3 style={{ fontSize: '15px' }}><ReactSocialIcon url="https://www.linkedin.com/in/abhinavaa01/" style={{ height: 30, width: 30, marginLeft: '10px' }} /> Abhinav Agrawal</h3>
            <h3 style={{ fontSize: '15px' }}><ReactSocialIcon url="https://www.linkedin.com/in/vidhi-arora-a0b943225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ height: 30, width: 30, marginLeft: '10px' }} /> Vidhi Arora</h3>
            <h3 style={{ fontSize: '15px' }}><ReactSocialIcon url="https://www.linkedin.com/in/contactsakshisaini/" style={{ height: 30, width: 30, marginLeft: '10px' }} /> Sakshi Saini</h3>
            <h3 style={{ fontSize: '15px' }}><ReactSocialIcon url="https://linkedin.com" style={{ height: 30, width: 30, marginLeft: '10px' }} /> name 5</h3>
          </div>
        </div>
        {/* bottom section  */}
        <div style={{ textAlign: 'center' }} className="footer-bottom--section">
          <hr />
          <p >
            Copyright-Technova@{new Date().getFullYear()}
          </p>


        </div>
      </footer>


    </Wrapper>
  );
};
const Wrapper = styled.section`
.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
}
.contact-short-btn {
  justify-self: end;
  align-self: center;
  
}

footer {
  padding: 14rem 0 9rem 0;
  background-color: #111132;

  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }

  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
}
`;
export default Footer
