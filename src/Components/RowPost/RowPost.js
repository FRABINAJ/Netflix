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
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=US`).then(response => {
            // console.log(response.data)
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0]); // Fix the typo here
                window.open(`https://www.youtube.com/watch?v=${response.data.results[0].key}`, '_blank');
            } else {
                console.log("Array empty");
            }
        });
    }

    return (
        <div className="container-fluid">
            <div className='row' style={{ backgroundColor: "black" }}>
                <h2 className='mt-2'>{props.title}</h2>
                <div className="posters container">
                    {movies.map((obj) => (
                        <div key={obj.id}>
                            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                            <p>{obj.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RowPost;
