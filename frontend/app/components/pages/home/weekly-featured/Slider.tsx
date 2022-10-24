// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from "react";

const Slider:FC=()=>{
    return (

        <Swiper
            modules={[Autoplay]}
            spaceBetween={7}
            slidesPerView={2}
            className="slider_wf"
            autoplay={{
                delay:4500
            }}>
            
            <SwiperSlide className="video_item">
                <div className="thumbnail">
                    <img src="img/main/1.jpg" alt=""/>
                    <time>16:55</time>
                </div>
                <div className="author">Micheal Adams</div>
                <div className="name">Day in my life: Summer ...</div>
                <div className="number_info">
                    <div className="views">VIEWS 28.6K</div>
                    <div className="date">6DS AGO</div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="video_item">
                <div className="thumbnail">
                    <img src="img/main/2.jpg" alt=""/>
                    <time>07:23</time>
                </div>
                <div className="author">Dollie Cross</div>
                <div className="name">Day in my life: Summer ...</div>
                <div className="number_info">
                    <div className="views">VIEWS 26.7K</div>
                    <div className="date">10DS AGO</div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="video_item">
                <div className="thumbnail">
                    <img src="img/main/3.jpg" alt=""/>
                    <time>16:55</time>
                </div>
                <div className="author">Micheal Adams</div>
                <div className="name">Day in my life: Summer ...</div>
                <div className="number_info">
                    <div className="views">VIEWS 28.6K</div>
                    <div className="date">6DS AGO</div>
                </div>
            </SwiperSlide>
            

        
        </Swiper>
        
    )
}
export default Slider;