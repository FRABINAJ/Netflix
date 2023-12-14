import React from 'react'
import visa from "./visa.png"
import { Link } from 'react-router-dom'
import SecondFooter from './SecondFooter/SecondFooter'

function Stage4A() {
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
                    <div className="mt-5 mb-2" style={{ width: "400px", textAlign: "left" }}>
                        <p className='mt-5'>STEP <b>3</b> OF <b>3</b></p>
                        <h2>Set up your credit or debit card</h2>
                        <img src={visa} alt="" />
                        <form action="" method='post' style={{ backgroundColor: "white" }}>
                            <input type="text" placeholder='Card number' className='form-control' style={{ height: "60px" }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <input type="date" placeholder='Expiration date' className='mt-3 form-control' style={{ width: "60%", height: "60px" }} />
                                <input type="number" placeholder='CVV' maxLength={3} id="" className=' mt-3 form-control' style={{ width: "30%", height: "60px" }} />
                            </div>
                            <input type="text" placeholder='First name' className='form-control mt-3' style={{ height: "60px" }} maxLength={15} />
                            <input type="text" placeholder='Last name' className='form-control mt-3' style={{ height: "60px" }} maxLength={10} />
                            <div className="mt-3 mb-4" style={{ backgroundColor: "#F3F3F3", borderRadius: "5px" }}>
                                <div className="mx-3">
                                    <b>₹199/month</b>
                                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                                        <p className='text-secondary'>Basic</p>
                                        <Link to="/Stage3" style={{ textDecoration: "none" }}><p><b>Change</b></p></Link>
                                    </div>
                                </div>
                            </div>
                            <small className=' text-secondary'>Any payment above ₹ 2000 shall need additional authentication.</small>
                            <div className="mt-3 mb-3">
                                <small className='text-secondary'>
                                    By checking the checkbox below, you agree to our <a href="#" style={{ textDecoration: "none" }}>Terms of Use, Privacy Statement</a>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                                </small>
                            </div>
                            <div className='mb-5'>
                                <input type="checkbox" style={{ height: "30px", width: "30px" }} /> <b>I Agree</b>
                            </div>
                            <Link to="/MainPage"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px", fontSize: "25px" }}>Start Membership</button></Link>
                            <div className="mt-3 mb-5">
                                <small className='text-secondary'>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. </small>
                                <br />
                                <a href="#" style={{ textDecoration: "none" }}>Learn More.</a>
                            </div>
                        </form>
                    </div>
                </center>
            </div>
            <SecondFooter />
        </div>
    )
}

export default Stage4A
