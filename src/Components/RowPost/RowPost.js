import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import "./RowPost.css"
import axios from "../../Axios"
import { imageUrl, API_KEY } from "../../constants/constants"

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("");

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(err => {
            // alert("Network error")
        });
    }, []);

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=US`).then(response => {
            // console.log(response.data)
            if (response.data.results.length !== 0) {
                const videoKey = response.data.results[0].key;
                const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;
                window.open(youtubeUrl, '_blank');
            } else {
                console.log("Array empty");
            }
        });
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
            <div className='row'>
                <h2>{props.title}</h2>
                <div className="posters">
                    {movies.map((obj) =>
                        <div key={obj.id}>
                            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                            <p>{obj.title}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RowPost;