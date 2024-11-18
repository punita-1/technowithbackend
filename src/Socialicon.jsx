// import React from 'react'
// import './SocialIcon.css';
// // import './anotherdoodle.css';


// import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

// const SocialIcon = () => {
//   return (
//     <div className='socialicons'>
//     <div className='social-icon-wrapper display-flex flex-col'>
//       <div className='social-icon-heading'><b>"Get in Touch With Us"</b> <br />
//       <div className="margin">
//       <span>Don’t Miss Out Any Update Of Technova</span></div></div>
//       <div className='my-social' >
//         <ReactSocialIcon className='height' url="https://twitter.com"  />
//         <ReactSocialIcon className='height' url="https://facbook.com"  />
//         <ReactSocialIcon className='height' url="https://instagram.com"  />
//         <ReactSocialIcon className='height' url="https://www.linkedin.com"  />
//       </div>
//       <br></br>
//       <br></br>
//     </div>
//     </div>
//   )
// }

// export default SocialIcon
import React from 'react'
import './SocialIcon.css';

import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

const SocialIcon = () => {
  return (
    <div className='socialicons'>
    <div className='social-icon-wrapper display-flex flex-col'>
      <div className='social-icon-heading'><b>"Get in Touch With Us"</b> <br />
      <div className="margin">
      <span>Don’t Miss Out Any Update Of Technova</span></div></div>
      <div className='my-social' >
        <ReactSocialIcon className='social-icon ' url="https://twitter.com"  />
        <ReactSocialIcon className='social-icon' url="https://facebook.com"  />
        <ReactSocialIcon className='social-icon' url="https://instagram.com"  />
        <ReactSocialIcon className='social-icon' url="https://www.linkedin.com"  />
      </div>
    </div>
    </div>
  )
}

export default SocialIcon