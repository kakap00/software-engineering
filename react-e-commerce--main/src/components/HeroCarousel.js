import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src="https://lakeside-village.co.uk/wp-content/uploads/2021/11/The-Body-Shop.jpg" className="car-pic" />
          </div>

          <div>
            <img src="https://thebodyshop.it/cdn/shop/collections/summer-22_900x.jpg?v=1652254281" className="car-pic" />
          </div>


        

          <div>
            <img src="https://cdn.broadsheet.com.au/cache/20/a6/20a6bfe96b10674d6e23f37841675ef1.jpg" className="car-pic" />
          </div>

          <div>
            <img src="https://www.businessinsider.in/photo/90522192/heres-how-the-body-shop-navigated-the-pandemic-and-is-growing-its-business-in-india.jpg?imgsize=64974" className="car-pic" />
          </div>

          <div>
            <img src="https://wwd.com/wp-content/uploads/2023/08/Body-Shop-Advent-Calendar.png?w=1000&h=563&crop=1" className="car-pic" />
          </div>

          <div>
            <img src="https://questmall.in/storage/store_banner/actual/1558009718_EIxOs_dsc-6755jpg.jpeg" className="car-pic" />
          </div>



        </Slider>
      </div>
    );
  }
}