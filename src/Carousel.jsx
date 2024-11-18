import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

// Import your images directly or use relative paths
import image1 from '../public/images/technova_gallery/logos/thermocol_techno.jpg';
import image2 from '../public/images/technova_gallery/Vc_starting/vc_pic.jpg';
import image3 from '../public/images/technova_gallery/Vc_starting/starting.jpg';

export default function CarouselComponent(props) {
    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} interval={2000} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img className="Crousel_img" src={image1} alt="Carousel Image 1" />
                </div>
                <div>
                    <img className="Crousel_img" src={image2} alt="Carousel Image 2" />
                </div>
                <div>
                    <img className="Crousel_img" src={image3} alt="Carousel Image 3" />
                </div>
            </Carousel>
        </div>
    );
}
