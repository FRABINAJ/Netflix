import React, { useState } from 'react';
import tick from "./tick.png";
import SecondFooter from './SecondFooter/SecondFooter';
import { Link } from 'react-router-dom';
import "./Stage3.css";
import smartphone from "./smartphone.png"
import tablet from "./tablet.png"
import comuter from "./imac.png"
import tv from "./tv.png"
function Stage3() {
    const [highlightedColumn, setHighlightedColumn] = useState(null);

    function highlightColumn(header) {
        // Remove the previous highlights
        var elements = document.querySelectorAll('.myTd');
        elements.forEach(function (element) {
            element.classList.remove('red-highlight');
            element.classList.remove('red-text');
        });

        // Highlight the selected column
        var selectedColumn = document.querySelectorAll('.' + header);
        selectedColumn.forEach(function (columnElement) {
            columnElement.classList.add('red-highlight');
        });

        setHighlightedColumn(header);
    }

    return (
        <div>

            <div className="mt-5 mx-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img height={100} width={160} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="img-fluid" />
                <div>
                    <h3 style={{ fontWeight: "600" }}>Sign Out</h3>
                </div>
            </div>
            <hr />
            <center className="main-div">
                <div className="container mb-5">
                    <div style={{ textAlign: "left" }}>
                        <p>STEP <b>1</b> OF <b>3</b></p>
                        <h2 style={{ fontWeight: "700" }}>Choose the plan that’s right for you</h2>
                        <div style={{ textAlign: "left" }}>
                            <div className='mt-3' style={{ display: "flex" }} >
                                <img height={30} width={30} src={tick} alt="" />
                                <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>Watch all you want. Ad-free.</p>
                            </div>
                            <div style={{ display: "flex" }} >
                                <img height={30} width={30} src={tick} alt="" />
                                <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>Recommendations just for you.</p>
                            </div>
                            <div style={{ display: "flex" }} >
                                <img height={30} width={30} src={tick} alt="" />
                                <p className='mx-3' style={{ fontSize: "20px", fontWeight: '400' }}>Change or cancel your plan anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='container mt-5 mb-5'>
                    <tbody>
                        <tr>
                            <th></th>
                            <th onClick={() => highlightColumn('Mobile')}>
                                <div className={`table-selection-div  ${highlightedColumn === 'Mobile' ? 'red-highlight' : ''}`}>
                                    <p className='table-selection-div-p'>Mobile</p>
                                </div>
                            </th>
                            <th onClick={() => highlightColumn('Basic')}>
                                <div className={`table-selection-div ${highlightedColumn === 'Basic' ? 'red-highlight' : ''}`}>
                                    <p className='table-selection-div-p'>Basic</p>
                                </div>
                            </th>
                            <th onClick={() => highlightColumn('Standard')}>
                                <div className={`table-selection-div ${highlightedColumn === 'Standard' ? 'red-highlight' : ''}`}>
                                    <p className='table-selection-div-p'>Standard</p>
                                </div>
                            </th>
                            <th onClick={() => highlightColumn('Premium')}>
                                <div className={`table-selection-div ${highlightedColumn === 'Premium' ? 'red-highlight' : ''}`}>
                                    <p className='table-selection-div-p'>Premium</p>
                                </div>
                            </th>
                            {/* Repeat similar columns for other plans */}
                        </tr>
                        <tr className='tr1'>
                            <td>Monthly price</td>
                            <td className={`myTd px-5 py-3 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>
                                <b>₹149</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <b>₹199</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <b>₹499</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <b>₹649</b>
                            </td>
                        </tr>
                        <tr className='tr1'>
                            <td>Video quality</td>
                            <td className={`myTd px-5 py-3 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>
                                <b>Good</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <b>Good</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <b>Better</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <b>Best</b>
                            </td>
                        </tr>
                        <tr className='tr1'>
                            <td>Resolution</td>
                            <td className={`myTd px-5 py-3 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>
                                <b>480p</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <b>720p</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <b>1080p</b>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <b>4K+HDR</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Devices you can use to watch</td>
                            <td className={`myTd px-5 py-2 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>
                                <img src={smartphone} alt="" /><p>Phone</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <img src={smartphone} alt="" /><p>Phone</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <img src={smartphone} alt="" /><p>Phone</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <img src={smartphone} alt="" /><p>Phone</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>
                                <img src={tablet} alt="" /><p>tablet</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <img src={tablet} alt="" /><p>tablet</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <img src={tablet} alt="" /><p>tablet</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <img src={tablet} alt="" /><p>tablet</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>

                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Mobile' ? 'red-highlight red-text' : ''}`}>

                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Basic' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Standard' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                            <td className={`myTd px-5 ${highlightedColumn === 'Premium' ? 'red-highlight red-text' : ''}`}>
                                <img src={comuter} alt="" /><p>Computer</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='container'>
                    <p className='text-secondary' style={{ fontSize: "15px" }}> HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="#" style={{ textDecoration: "none" }}> Terms of Use </a> for more details.</p>
                    <p className='text-secondary' style={{ fontSize: "15px" }}> Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                    <center className='mt-5 mb-5'>
                        <Link to="/Stage4"><button className='btn text-white' style={{ backgroundColor: "#E50914", width: "400px", height: "60px", fontSize: "25px" }}>Next</button></Link>
                    </center>
                </div>
            </center>
            <SecondFooter />
        </div >
    );
}

export default Stage3;

