import React,  { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from '../Cards/Cards'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ListCards() {

  const [products, setProducts] = useState([])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      });
  }, []);

  return (
    <div className="container">
      <h2> Multiple items </h2>
      <div classNAme="d-flex justify-content-center">
        <Slider {...settings} className="mb-5 mt-4">
          { products.slice(0,8).map((product,index) => 
              (<div key={index}>
                <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
              </div>)) }
        </Slider>
      </div>
      <div classNAme="d-flex justify-content-center">
        <Slider {...settings} className="mb-5">
          { products.slice(8,16).map((product,index) => 
              (<div key={index}>
                <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
              </div>)) }
        </Slider>
      </div>
      <div classNAme="d-flex justify-content-center">
        <Slider {...settings} className="mb-5">
          { products.slice(16,24).map((product,index) => 
              (<div key={index}>
                <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
              </div>)) }
        </Slider>
      </div>
    </div>
  )
}

export default ListCards

