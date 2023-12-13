import React from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div style={{
            backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form>
                <div className='mx-5 mt-5 mb-5'>
                    <h2 className='text text-start mb-5'>Sign In</h2>
                    <input type="text" placeholder='Email or phone number' className='mb-3 form-control' style={{ backgroundColor: 'grey' }} />
                    <br />
                    <input type="password" name="password" id="" placeholder='Password' className='form-control' style={{ backgroundColor: 'grey' }} />


                    <br />
                    <button type='submit' className='mt-3 mb-1 btn btn-danger form-control' id='submit_btn'>Submit</button>
                    <input type="checkbox" name="" id="" /><small className='text-secondary'>Remember me</small><small className='text-secondary'>Need Help?</small>
                    <br />
                    <div className='mt-5'>
                        <small className='text-secondary'>New to netflix? </small><Link to="/FirstPage" style={{ textDecoration: "none" }}><b className='text-white'>Sign up now.</b></Link>
                    </div>
                    <div className="mt-4">
                        <b className='text-secondary'>Sign in is protected by Google reCAPTCHA to ensure</b><br />
                        <b className='text-secondary'> you’re not a bot. <a href="#">Learn more....!</a></b>
                    </div>

                </div>
            </form>
        </div>


    )
}

export default Signin