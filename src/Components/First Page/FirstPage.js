import React from 'react'
import "./First_page.css"
import { Link } from 'react-router-dom'

function FirstPage() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Netflix</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mediaquery.css" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />

      </head>
      <body>
        <div style={{ backgroundColor: "black" }}>
          <div className="navbar">
            <Link to="/Signin"><button type='submit' className="buttons btn btn-danger mx-3">  Sign In</button></Link>
          </div>
          <div className="main">
            <div className="area">
              <h1>Unlimited movies, TV <br />shows, and more.</h1>
              <h3 className='mt-2'>Watch anywhere. Cancel anytime.
              </h3>
              <div className="search">
                <input type="text" className="box" placeholder="Email" />
                <span className="try">
                  Try 30 days free <i className="fas fa-chevron-right" />
                </span>
              </div>
              <h4>Ready to watch? Enter your email to create or access your account
              </h4>
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
        </div>
      </body>
    </html>
  )
}

export default FirstPage
