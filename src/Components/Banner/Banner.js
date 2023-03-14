import { height } from '@mui/system';
import React, {  useState , useEffect } from 'react'
import {baseUrl , imgUrl , apiKey } from '../../Constants/constants';


function Banner() {
    
  const [bannerMovie, setbannerMovie] = useState('');
  const [loading, setLoading] = useState(true)
  const reqUrl = `${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US`;
//   const getNowPlaying = async () => {
//       const nowPlayingResponse = await fetch(reqUrl);
//       const nowPlaying = await nowPlayingResponse.json();
//       let randomNumber = Math.floor(Math.random() * 10) + 1;
//       return nowPlaying.results[randomNumber];
//   }


  useEffect( () => {

     const randomNumber = Math.floor(Math.random() * 10) + 1;
     fetch(reqUrl)
       .then(res => res.json())
       .then(movie => {
          setbannerMovie(movie.results[randomNumber])
          setLoading(false);
       })
       .catch(err => console.log(err))
    
  }, []);

  console.log(bannerMovie);

  if(loading) {
    return(
        <div style={{marginTop: '200px'}}>
            Loading
        </div>
    )
  } else {
    return(
        <div style={{backgroundImage: `url(${imgUrl+bannerMovie.backdrop_path})`}} className='banner'>
            <h1 className='movie-title'>
                {
                    bannerMovie.original_title
                }
            </h1>
            <p className='movie-overview'>
                {
                    bannerMovie.overview
                }
            </p>
            <div className="btn-container">
                <button className='btn btn-play'>Now Playing</button>
                <button  className='btn btn-view'>View More</button>
            </div>
        </div>
    )
  }
  

  


}

export default Banner



//   https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1