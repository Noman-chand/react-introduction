import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from '../../../DummyData/dummyData';

function SliderComp() {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (

    <div className=" bg-pink-100  text-black min-h-screen flex flex-col justify-center p-[25px] rounded-md items-center">
      <div className="container mx-auto">
        <Slider {...settings} className="w-full">
          {products.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt='shirts' className=" rounded-lg mx-auto max-w-full h-auto" />
              <p className=' pb-10 text-center'>{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComp;