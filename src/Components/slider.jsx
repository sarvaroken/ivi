import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            effect="fade"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide className="bg-[#100e19] w-full overflow-hidden">
                <div>
                    <img className='w-[1216px] object-cover object-center p-8 m-auto rounded-[50px] h-[370px]' src="https://wallpapercosmos.com/w/full/b/d/e/532112-3840x2160-desktop-4k-grinch-wallpaper.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#100e19] w-full">
                <img className='w-[1216px] object-cover object-center p-8 m-auto  rounded-[50px] h-[370px]' src="https://static3.go3.tv/scale/go3/webuploads/rest/upload/vod/4549104/images/18442460?dsth=1080&dstw=1920&srcmode=0&quality=65&type=1&srcx=1&srcy=1&srcw=1/1&srch=1/1" alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-[#100e19] w-full">
                <img className='w-[1216px] object-cover object-center p-8 m-auto rounded-[50px]  h-[370px]' src="https://www.youloveit.ru/uploads/gallery/main/866/youloveit_ru_barboskiny_oboi01.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-[#100e19] w-full">
                <img className='w-[1216px] object-cover object-center p-8 m-auto rounded-[50px]    h-[370px]' src="https://wallpapers.com/images/featured/shrek-2-1n0p7vu78dwbr3m0.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
        
    )
}
export default Slider