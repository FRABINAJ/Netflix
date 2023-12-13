import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import "./Navigation.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Navigation() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const closePopup = () => {
        // Close the popup using the onClose prop provided by reactjs-popup
        Popup.close()}
    return (
        
        <div className='navbar'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            
            <div style={{ marginTop: '32px' }}>
            <div className="navbar">
                <button onClick={() => setState({ isPaneOpenLeft: true })} className="nav">
                &#9776;
                </button>
                <img style={{marginLeft:"20px"}} className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
                <div className="avatar-container">
                    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
                </div>
            </div>

            <SlidingPane 
                isOpen={state.isPaneOpenLeft}
                title='Back'
                from='left'
                width='200px'
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
                className="custom-pane"
                >
                    <Link to="MainPage">
                <div className='slidediv'>
                HOME
                </div>
                </Link>
                <Link to="/ActionMovies">
                <div className='slidediv'>
                ACTION MOVIES
                </div>
                </Link>
                <Link to="/HorrorMovies">
                <div className='slidediv'>
                HORROR MOVIES
                </div>
                </Link>
                <Link to="/ComedyMovie">
                <div className='slidediv'>
                COMEDY MOVIES
                </div>
                </Link>
                <Link to="/RomanceMovie">
                <div className='slidediv'>
                ROMANTICAL MOVIES
                </div>
                </Link>
                <Link to="/Documentaries">
                <div className='slidediv'>
                DOCUMENTARIES
                </div>
                </Link>
                <Link to="/NetflixClone">
                <div className='slidediv'>
                CLONE
                </div>
                </Link>
                <Link to="/FirstPage">
                <div className='slidediv'>
                Logout
                </div>
                </Link>
                
                <br /><br />
            </SlidingPane>

            </div>
        </div>
    )
}

export default Navigation
