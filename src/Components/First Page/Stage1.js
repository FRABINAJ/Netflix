import React from 'react'
import laptv from "./laptv.jpg"
import { Link } from 'react-router-dom'
import SecondFooter from './SecondFooter/SecondFooter'


function Stage1() {
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
                <div className='mt-5 mb-5' style={{ width: "400px" }}>
                    <img height={100} width={400} src={laptv} alt="Laptop Tv Mobile Tablet" className='img-fluid' />
                    <p>STEP <b>1</b> OF <b>3</b></p>
                    <h2>Finishing Setting up your account</h2>
                    <p className='mt-3' style={{ fontSize: "20px" }}>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                    <Link to="/Stage1A"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px" }}>Next</button></Link>
                </div>
            </center>
            <SecondFooter />


        </div>
    )
}

export default Stage1
