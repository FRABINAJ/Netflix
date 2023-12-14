import React from 'react'
import locker from "./protect.png"
import visa from "./visa.png"
import paytm from "./paytm.png"
import amazon_pay from "./amazon-pay.png"
import google_pay from "./google-pay.png"
import right_arrow from "./next.png"
import yellow_lock from "./padlock.png"

import "./Stage4.css"
import SecondFooter from './SecondFooter/SecondFooter'
import { Link } from 'react-router-dom'

function Stage4() {
    return (
        <div>
            <div className="mt-5 mx-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img height={100} width={160} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="img-fluid" />
                <div>
                    <h3 style={{ fontWeight: "600" }}>Sign Out</h3>
                </div>
            </div>
            <hr />
            <div className='mb-5'>
                <center>
                    <div style={{ width: "400px" }}>
                        <img className='mt-5' src={locker} alt="" />
                        <p className='mt-5'>STEP <b>3</b> OF <b>3</b></p>
                        <h2>Choose how to pay</h2>
                        <p>Your payment is encrypted and you can change your payment method at anytime.</p>
                        <h5 className='mb-5'>Secure for peace of mind.
                            Cancel easily online.</h5>
                        <div style={{ marginLeft: "200px" }}>
                            <small>End-to-end encrypted</small>
                            <img src={yellow_lock} alt="" />
                        </div>
                        <Link to="/Stage4A">
                            <button className="payment-div">
                                <div className="mt-3 mb-3 mx-2" style={{ textAlign: "left", display: "flex", justifyContent: 'space-between' }}>
                                    <div style={{ display: "flex" }}>
                                        <p>Credit or Debit Card</p>
                                        <img style={{ marginTop: "-10px" }} className='mx-3' src={visa} alt="" />
                                    </div>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </button>
                        </Link>
                        {/* 2nd button */}
                        <Link to="/Stage4B">
                            <button className="mt-2 payment-div">
                                <div className="mt-3 mb-3 mx-2" style={{ textAlign: "left", display: "flex", justifyContent: 'space-between' }}>
                                    <div style={{ display: "flex" }}>
                                        <p>UPI AutoPay</p>
                                        <img style={{ marginTop: "-10px" }} className='mx-3' src={paytm} alt="" />
                                        <img style={{ marginTop: "-10px" }} className='mx-1' src={amazon_pay} alt="" />
                                        <img style={{ marginTop: "-10px" }} className='mx-1' src={google_pay} alt="" />
                                    </div>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </center>
            </div >
            <SecondFooter />
        </div >
    )
}

export default Stage4
