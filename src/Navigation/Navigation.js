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
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>HOME</div>
                    </div>

                </Link>
                <Link to="/ActionMovies">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>ACTION</div>
                    </div>
                </Link>
                <Link to="/HorrorMovies">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>HORROR</div>
                    </div>
                </Link>
                <Link to="/ComedyMovie">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>COMEDY</div>
                    </div>
                </Link>
                <Link to="/RomanceMovie">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>ROMANTIC</div>
                    </div>
                </Link>
                <Link to="/Documentaries">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>DOCUMENTARIES</div>
                    </div>
                </Link>
                <Link to="/NetflixClone">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3'>NETFLIX CLONE</div>
                    </div>
                </Link>
                <Link to="/FirstPage">
                    <div class='slidediv'>
                        <div class='fstdiv'></div>
                        <div class='mx-3 text-danger'><u>LOGOUT</u></div>
                    </div>
                </Link>

                <br /><br />
            </SlidingPane>

        </div>
    )
}

export default Navigation
