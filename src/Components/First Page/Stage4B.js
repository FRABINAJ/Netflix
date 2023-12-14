import React from 'react'
import paytm from "./paytm.png"
import amazon_pay from "./amazon-pay.png"
import google_pay from "./google-pay.png"
import { Link } from 'react-router-dom'

function Stage4B() {
    return (
        <div>
            <div className="mt-5 mx-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img height={100} width={160} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="img-fluid" />
                <div>
                    <h3 style={{ fontWeight: "600" }}>Sign Out</h3>
                </div>
            </div>
            <hr />
            <div>
                <center>
                    <div style={{ width: "400px", textAlign: "left" }}>
                        <p className='mt-5'>STEP <b>3</b> OF <b>3</b></p>
                        <h2>Set up UPI AutoPay</h2>
                        <div className="mt-3">
                            <p className='text-dark'>You can change this recurring payment any time in your settings.</p>
                        </div>
                        <div className="mt-3">
                            <select
                                name="paymentMethod"
                                id="paymentMethod"
                                className='form-control'
                                style={{ height: "60px", border: "2px solid black" }}
                            >
                                <option value="Paytm" className="payment-option">
                                    Paytm
                                </option>
                                <option value="AmazonPay" className="payment-option">
                                    Amazon Pay
                                </option>
                                <option value="GooglePay" className="payment-option">
                                    Google Pay
                                </option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <input type="text" placeholder='UPI ID' className='form-control' style={{ height: "60px", border: "2px solid black" }} maxLength={20} />
                        </div>
                        <div className="mt-2 mb-5">
                            <a style={{ textDecoration: "none" }} href="">How do I found UPI ID?</a>
                        </div>
                        <Link to="/MainPage"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px", fontSize: "25px" }}>Next</button></Link>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Stage4B
