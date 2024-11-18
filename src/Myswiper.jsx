import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay'
import './Swiperstyle.css';
// import { EffectCoverflow, Autoplay} from 'swiper/modules';

const photos = [

  { src: 'public/images/technova_gallery/Vc_starting/starting.jpg', width: 1 },
  { src: 'public/images/technova_gallery/logos/thermocol_techno.jpg', width: 2 },
  { src: 'public/images/technova_gallery/Vc_starting/vc_pic.jpg', width: 1 },
  { src: 'public/images/technova_gallery/group_pics/group_pic2.jpg', width: 1 },
  { src: 'public/images/technova_gallery/logos/technova_rope.jpg', width: 2 },
  { src: 'public/images/technova_gallery/group_pics/gp_pic4.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/flower_welcome.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/welcome_2.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/welcome_thanks.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/welcome_type.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/welcome5.jpg', width: 1 },
  { src: 'public/images/technova_gallery/prize/Prize1.jpg', width: 1 },

  { src: 'public/images/technova_gallery/prize/prize4.jpg', width: 1 },
  { src: 'public/images/technova_gallery/prize/prize3.jpg', width: 2 },
  { src: 'public/images/technova_gallery/events/hand_sensor.jpg', width: 1 },
  { src: 'public/images/technova_gallery/welcomes/welcome6.jpg', width: 1 },
  { src: 'public/images/technova_gallery/prize/price2.jpg', width: 1 },
  { src: 'public/images/technova_gallery/group_pics/group_photo.jpg', width: 2 },
  { src: 'public/images/technova_gallery/events/thinkbots1.jpg', width: 1 },
  { src: 'public/images/technova_gallery/group_pics/gp_pic4.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/presentation_cse.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/Random.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/cards.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/robo_soccer.jpg', width: 1 },
  { src: 'public/images/technova_gallery/group_pics/gp_pic3.jpg', width: 1 },

  { src: 'public/images/technova_gallery/events/thinkbots1.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/thinkbots2.jpg', width: 1 },
  { src: 'public/images/technova_gallery/events/robo_soccer.jpg', width: 1 },
  {src:'public/images/dcrust_images/night_Saraswati_library.jpg', width:1},
  {src: 'public/images/technova_gallery/Vc_starting/vc_project_chkecking.jpg', width: 1 },

];


const Collage = () => {
  return (
    <div className="collage">
      {photos.map((photo, index) => (
        <div key={index} className={`grid-item grid-item-${photo.width}`}>
          <img src={photo.src} alt="" onError={(e) => console.error("Image load error:", e)} />
        </div>
      ))}
    </div>
  );
}
export default Collage;

// export default function App() {
//   return (
//     <>
//     {/* first swiper */}
//     <h2>About Technova</h2>
//       <div className="swiper-container">
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={false}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           modules={[EffectCoverflow, Autoplay]}
//           className="mySwiper"
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: true,
//           }}
//         >

//           {/* about Technova */}
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/logos/thermocol_techno.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/Vc_starting/starting.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/Vc_starting/vc_pic.jpg" />
//           </SwiperSlide>
//           {/* just adding  */}
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/group_pics/group_pic2.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/logos/technova_rope.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="public/images/technova_gallery/group_pics/gp_pic4.jpg" />
//           </SwiperSlide>
         
//         </Swiper>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>

     
//     </>
//   );
// } 
