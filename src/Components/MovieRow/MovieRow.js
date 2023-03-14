import React, { useEffect, useState } from 'react';
import {baseUrl , imgUrl , apiKey } from '../../Constants/constants';
import '../../App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from "react-slick";

function MovieRow({id , category , title}) {
  
  const [movies, setMovies] = useState([]);

  const reqUrl = `${baseUrl}movie/${category}?api_key=${apiKey}&language=en-US`;
 
  useEffect(() => {

    fetch(reqUrl)
      .then(moviesRes => moviesRes.json())
      .then(movies => {
         setMovies(movies.results.reverse())
      })
  }, [])

    
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
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
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className='slider-container'>
        <h1 className='category_title'>{title}</h1>
        <Slider {...settings}>
           {
             movies.length > 0 && movies.map((movie) => {
                return(
                    <div className='poster_container'>
                      <img src={`${imgUrl+movie.backdrop_path}`} alt="" className='poster'/>

                    </div> 
                )
             })
           }
        </Slider>
      </div>
    );
}

export default MovieRow