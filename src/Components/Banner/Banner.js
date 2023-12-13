import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
import axios from "../../Axios";
import playimage from "./play.png"
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data.results[0]);
                setMovie(response.data.results[0]);
            })
    }, []);

    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            
            <div className='container' style={{ height: '400px', width: "100%" }}>
                <div className='row' style={{ height: '100%', width: "100%" }}>
                    <div className='col-md-6 col-lg-7 col-xl-8 d-flex align-items-center'>
                        <div className='content'>
                            <h1 className='title'>{movie ? movie.title : ""}</h1>
                            <div className='banner_button'>
                                <button id='btn1'> <img height={15} src={playimage} alt="" /> Play</button>
                                <button className='btn2 ' style={{ marginLeft: "10px" }}>My list</button>
                            </div>
                            <p className='discription'>{movie ? movie.overview : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
