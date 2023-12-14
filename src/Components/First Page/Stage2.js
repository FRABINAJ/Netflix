import React from 'react'
import check_mark from "./check-mark.png"
import tick from "./tick.png"
import { Link } from 'react-router-dom'
import SecondFooter from './SecondFooter/SecondFooter'


function Stage2() {
    return (
        <div>
            <div className="mt-5 mx-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img height={100} width={160} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="img-fluid" />
                <div>
                    <h3 style={{ fontWeight: "600" }}>Sign Out</h3>
                </div>
            </div>
            <hr />
            <center>
                <div style={{ width: "300px" }} className='mt-5 mb-5'>
                    <img src={check_mark} alt="" />
                    <p>STEP <b>2</b> OF <b>3</b></p>
                    <div style={{ textAlign: "left" }}>
                        <h2 className='mb-5'>Choose your plan.</h2>
                        <div className='mt-3' style={{ display: "flex" }} >
                            <img height={30} width={30} src={tick} alt="" />
                            <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>No commitments, cancel anytime.</p>
                        </div>
                        <div className='mt-3' style={{ display: "flex" }} >
                            <img height={30} width={30} src={tick} alt="" />
                            <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>Everything on Netflix for one low price.</p>
                        </div>
                        <div className='mt-3' style={{ display: "flex" }} >
                            <img height={30} width={30} src={tick} alt="" />
                            <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>No ads and no extra fees. Ever.</p>
                        </div>
                        <Link to="/Stage3"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px", fontSize: "25px" }}>Next</button></Link>
                    </div>
                </div>
            </center>
            <SecondFooter />
        </div>
    )
}

export default Stage2
