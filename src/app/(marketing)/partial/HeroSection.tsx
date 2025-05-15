'use client';
import heroData from "@/app/(marketing)/datas/hero.json"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/hero.css'
import Slider from 'react-slick';
import { ShopNowBtn } from '@/app/(marketing)/components/BtnsAndSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    autoplay: false,
    cssEase: "linear",
    nextArrow: <SampleNextArrow className="" style="" onClick={null} />,
    prevArrow: <SamplePrevArrow className="" style="" onClick={null} />
  };

  return (
    <div className='w-full h-[80vh] bg-[#ebe7e7]'>
      <Slider {...settings} className='w-full h-full'>
        {heroData?.data?.map((item: any) => {
          return <div className='w-full h-full bg-(primary) text-black relative'>slide {item?.slide}
            <div className='p-2 w-[400px] absolute top-[20%] left-[100px]'>
              <h5 className='text-(--secondary) text-sm font-bold'>{item?.collection}</h5>
              <h1 className='mt-5 font-[system-ui] leading-16'>{item?.heading}</h1>
              <p className='mt-5'>{item?.para}</p>
              <ShopNowBtn classes="font-bold px-3 py-2 bg-black text-white text-sm rounded-sm mt-5 flex item-center hover:scale-[1.1] cursor-pointer transition delay-150 duration-300" name="SHOP NOW" arrow={true} />
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
};


const SampleNextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowRight} className={`text-(--secondary) text-lg cursor-pointer ml-3 font-bold top-[50%] right-[20px] z-40 absolute`} onClick={onClick} style={style} />
  );
}

const SamplePrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowLeft} className={` text-(--secondary) text-lg cursor-pointer ml-3 font-bold top-[50%] left-[20px] z-40 absolute`} onClick={onClick} style={style} />
  );
}

export default HeroSection;