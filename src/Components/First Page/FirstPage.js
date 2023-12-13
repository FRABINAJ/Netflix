import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./First_page.css";
import Netflixintro from '../NetflixIntro/Netflixintro';
import Stage1 from './Stage1';

function FirstPage() {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    if (!email || !email.match(/^[A-Za-z0-9\._\-]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
      setEmailError("Enter a valid email");
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Navigate to Stage1 component
      navigate('/stage1');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      {showIntro && <Netflixintro />}
      {showContent && (
        <>
          <div className="navbar">
            <Link to="/Signin">
              <button type='submit' className="buttons btn btn-danger mx-3 mt-5">Sign In</button>
            </Link>
          </div>
          <div className="main">
            <div className="area">
              <h1>Unlimited movies, TV <br />shows, and more.</h1>
              <h3 className='mt-2'>Watch anywhere. Cancel anytime.</h3>
              <div className="search">
                <form onSubmit={handleSubmit} className='form1'>
                  <input
                    type="email"
                    className="box"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && <span className="error">{emailError}</span>}
                  <button type='submit' className="try text-white">
                    Try 30 days free <i className="fas fa-chevron-right" />
                  </button>
                </form>
              </div>
              <h4>Ready to watch? Enter your email to create or access your account</h4>
            </div>
          </div>
          <div className="container1">
            <div className="text">
              <h1>Enjoy on your TV.
              </h1>
              <p>
                Watchx on Smart TVs, Playstation, Xbox, <br />
                Chromecast, Apple TV, Blu-ray players, and<br />
                more.
              </p>
            </div>
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            </div>
          </div>
          <div className="container1">
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" />
            </div>
            <div className="text">
              <h1>Download your shows to watch on the go.
              </h1>
              <p>
                Save your data and watch all your favorites offline.
              </p>
            </div>
          </div>
          <div className="container1">
            <div className="text">
              <h1>Watch everywhere.
              </h1>
              <p>
                Stream unlimited movies and TV shows on <br />your phone, tablet, laptop, and TV without paying more.
              </p>
            </div>
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
            </div>
          </div>
          <div className="question">
            <h1>Frequently Asked Questions
            </h1>
            <div className="quest">
              <div className="textbox">What is Netflix?</div>
              <i className="las la-plus" />
            </div>
            <div className="quest">
              <div className="textbox">How much does Netflix cost?</div>
              <i className="las la-plus" />
            </div>
            <div className="quest">
              <div className="textbox">Where can I watch?</div>
              <i className="las la-plus" />
            </div>                 <div className="quest">
              <div className="textbox">How do I cancel?</div>
              <i className="las la-plus" />
            </div>
            <div className="quest">
              <div className="textbox">What can I watch on Netflix??</div>
              <i className="las la-plus" />
            </div>
            <div className="quest">
              <div className="textbox">What is Netflix?</div>
              <i className="las la-plus" />
            </div>
            <div className="search1">
              <input type="text" className="box1" placeholder="Email" />
              <span className="try1">
                Try 30 days free <i className="fas fa-chevron-right" />
              </span>
            </div>
            <h4>Ready to watch? Enter your email to create or access your account
            </h4>
          </div>
          <div className="footer">
            <div className="footercon">
              <div className="flex1">
                <h5>Questions? Call 1-866-579-7172
                </h5>
                <h5>
                </h5>
              </div>
              <ul className="list1">
                <li><a href>FAQ</a></li>
                <li><a href>Investor Relation</a></li>
                <li><a href>Ways to Watch</a></li>
                <li><a href>Corporate Information</a></li>
                <li><a href>Netflix Originals</a></li>
              </ul>
              <ul className="list1">
                <li><a href>Home</a></li>
                <li><a href>Jobs</a></li>
                <li><a href>Terms of Use</a></li>
                <li><a href>Contact Us</a></li>
                <li><a href>#</a></li>
              </ul>
              <ul className="list1">
                <li><a href>Account</a></li>
                <li><a href>Redeem Gift Cards</a></li>
                <li><a href>Privacy</a></li>
                <li><a href>Speed Test</a></li>
                <li><a href>#</a></li>
              </ul>
              <ul className="list1">
                <li><a href>Media Center&lt;</a></li>
                <li><a href>Buy Gift Cards</a></li>
                <li><a href>Cookie Preferences</a></li>
                <li><a href>Legal Notices</a></li>
                <li><a href>#</a></li>
              </ul>
            </div>
          </div>
          <div className="end">
            <h2>
              Netflix US
            </h2>
            <h2>
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default FirstPage;
