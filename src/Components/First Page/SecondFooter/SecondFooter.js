import React from 'react'
import "./SecondFooter.css"

function SecondFooter() {
    return (
        <div>
            <footer style={{ backgroundColor: "#F3F3F3" }}>
                <div className="container">
                    <p className='mb-5 mt-4'><a href="#" className='Footer-a'>Questions? Call 000-800-919-1694</a></p>
                    <div className="row mb-4">
                        <div className="col-sm-2">
                            <p><a href="#" className='Footer-a'>FAQ</a></p>
                            <p><a href="#" className='Footer-a'>Privacy</a></p>
                            <div>
                                <select style={{ width: "120px", height: "50px", border: "2px solid black", borderRadius: "5px" }}>
                                    <option value="volvo" className='text-secondary'>ENGLISH</option>
                                    <option value="saab" className='text-secondary'>हिंदी</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <p><a href="#" className='Footer-a'>Help Centre</a></p>
                            <p><a href="#" className='Footer-a'>Cookie Preferences</a></p>
                        </div>
                        <div className="col-sm-2">
                            <p><a href="#" className='Footer-a'>Netflix Shop</a></p>
                            <p><a href="#" className='Footer-a'>Corporate Information</a></p>
                        </div>
                        <div className="col-sm-2">
                            <p><a href="#" className='Footer-a'>Terms of Use</a></p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-2">
                        </div>

                    </div>
                </div>
            </footer >
        </div >
    )
}

export default SecondFooter
