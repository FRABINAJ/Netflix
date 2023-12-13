import RowPost from '../RowPost/RowPost'
import { action,originals} from "../../urls"
import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../Axios";
import playimage from "./play.png"
import Footer from '../Footer_page/Footer';
function ActionMovies() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`)
            .then((response) => {
                console.log(response.data.results[0]);
                setMovie(response.data.results[0]);
            })
    }, []);
  return (
    <div  style={{ backgroundColor: "black" }}>
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className='container' style={{ height: '300px', width: "100%" }}>
                <div className='row' style={{ height: '100%', width: "100%" }}>
                    <div className='col-md-6 col-lg-7 col-xl-8 d-flex align-items-center'>
                        <div className='content'>
                            <h1 className='title'>{movie ? movie.title : ""}</h1>
                            <div className='banner_button'>
                            <button className='btn btn-light'> <img height={15} src={playimage} alt="" /> Play</button>
                                <button className='btn' id='btn' style={{ marginLeft: "10px" }}>Add to list</button>
                            </div>
                            <p className='discription'>{movie ? movie.overview : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost url={action} title="Action" isSmall />
      <Footer/>
    </div>
  )
}

export default ActionMovies
