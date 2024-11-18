import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./contact.css"
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // delay: '0.5',
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: '0',
    transition: {
      duration: 1
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(""); 
    background-size: cover; 
    background-repeat: no-repeat; 
    margin: 0; 
    padding: 0;
  }
`;

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    input {
      width: 40rem;
      margin: auto;
      border-radius: 4px;
      font-size:14px;
    }
    textarea {
      width: 100%;
      font-size: 14px;
    }

    .send-button {
      width: 50%;
    }

    h2{
      size:10px;
    }


    .container {
      // margin-top: -3rem;
      text-align: center;
      padding: 2rem;
      // max-width: 35rem;

      .contact-form {
        margin: auto;

        .contact-inputs input[type="text"],
        .contact-inputs input[type="email"],
        .contact-inputs textarea {
          text-transform: none;
        }

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 6px;
            max-width:100%;
            height:45px;
            padding:10px;
          
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

    .common-heading {
      color: white;
    }


    .input-group-text {
      font-size: 21px; 
    }

    .form-control::placeholder {
      font-size: 15px; 
    }

   
  `;
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })
  return (
    <>
      <GlobalStyle />
      <Wrapper className="viewportheight">
        <div className="container grid grid-two-column">
          <motion.div className="contact"
            ref={ref}
            variants={variants}
            initial="initial"
            animate='animate'
          >
            <motion.div variants={variants} initial="initial" animate='animate' className="item">
              <motion.h2 variants={variants} style={{ textAlign: 'left' }} className="common-heading">Feel Free to Contact us</motion.h2>
            </motion.div>
            <motion.div variants={variants} className="item">
              <h3 style={{ textAlign: 'left', fontSize: '30px' }}>Mail us</h3>
              <p style={{ color: 'white', textAlign: 'left' }}>iiiota@gmail.com</p>
            </motion.div>
            <motion.div variants={variants} className="item">
              <h3 style={{ textAlign: 'left', fontSize: '30px' }}>Phone</h3>
              <p style={{ color: 'white', textAlign: 'left' }}>+91816867XXXX</p>
            </motion.div>
          </motion.div>

          <div className="container">

            <div className="contact-form">
              <motion.div
                className="phonesvg"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.svg style={{ stroke: 'white' }}

                  variants={svgVariants} initial='hidden'
                  animate='visible'
                  width="400px" height="300px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    variants={pathVariants}
                    d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </motion.svg>
              </motion.div>
              <div className="forzindex">
                <motion.form
                  initial={{ opacity: '0' }}
                  whileInView={{ opacity: '1' }}
                  transition={{ duration: '1', delay: '2' }}
                  action="#" method="POST" className="contact-inputs">
                  <div className="input-group mb-3 col-10" style={{ height: '39px' }}>
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>
                        <i className="bi bi-person-fill" style={{ lineHeight: '26px' }}></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1" style={{ height: '100%' }} />
                  </div>
                  <div className="input-group mb-3 col-10" style={{ height: '39px' }}>
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>
                        <i className="bi bi-envelope-at-fill" style={{ lineHeight: '26px' }}></i>
                      </span>
                    </div>
                    <input type="email" className="form-control" placeholder="Email" aria-describedby="basic-addon1" style={{ height: '100%' }} />
                  </div>
                  <div>
                    <textarea name="message" cols="30" rows="6" autoComplete="off" placeholder="Write your message here." className="form-control" required></textarea>
                  </div>
                  <div>
                    <input type="submit" value="send" className="send-button" style={{ backgroundColor: "#0d6efd", marginTop: '1rem' }} />
                  </div>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;