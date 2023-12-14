import React from 'react'
import { Link } from 'react-router-dom'
import SecondFooter from './SecondFooter/SecondFooter'
function Stage1A() {
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
                <div className='mt-5 mb-5' style={{ width: "400px", textAlign: "left" }}>
                    <p>STEP <b>1</b> OF <b>3</b></p>
                    <h2>Create Account</h2>
                    <p>Use this email to access your account</p>
                    <form action="" style={{ backgroundColor: "white" }} className='mt-2 mb-3'>
                        <input type="email" placeholder='Enter email' className='form-control' /><br />
                        <input type="password" placeholder='Enter Password' className='form-control' />
                    </form>
                    <Link to="/Stage2"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px", fontSize: "25px" }}>Next</button></Link>
                </div>
            </center>
            <SecondFooter />
        </div>
    )
}

export default Stage1A
