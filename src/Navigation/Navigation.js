import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import "./Navigation.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import menu from "./menu.png"


function Navigation() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const closePopup = () => {
        // Close the popup using the onClose prop provided by reactjs-popup
        Popup.close()
    }
    return (

        <div>

            <div>
                <button onClick={() => setState({ isPaneOpenLeft: true })} className="nav mt-2 mx-2">
                    <img src={menu} alt="" />
                </button>

            </div>

            <SlidingPane
                isOpen={state.isPaneOpenLeft}
                title='Back'
                from='left'
                width='300px'
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
                    <div className='slidediv text-danger'><u>
                        LOGOUT
                    </u>
                    </div>
                </Link>

                <br /><br />
            </SlidingPane>

        </div>
    )
}

export default Navigation
