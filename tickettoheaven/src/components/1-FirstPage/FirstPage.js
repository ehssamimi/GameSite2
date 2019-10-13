import React, {Component} from 'react';
import background from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg';
import twitter from './../../Common/img/1-assets/SVG/twitter_icon.svg';
import facebook from './../../Common/img/1-assets/SVG/facebook_icon.svg';
import instagram from './../../Common/img/1-assets/SVG/instagram_icon.svg';
import handmade_logo from "../../Common/img/1-assets/SVG/handmade_logo.svg";
import textbox_bg from "../../Common/img/1-assets/SVG/textbox_bg.svg";
import kikStarter from "../../Common/img/1-assets/SVG/kikstarter_icon.svg";
import play_trailer_icon from "../../Common/img/1-assets/SVG/play_trailer_icon.svg";
// import handmade_logo from "../../Common/img/1-assets/SVG/textbox_bg.svg";

class FirstPage extends Component {
    render() {
        return (
            <div className='w-100 vh-100'>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>
                <div className='' dir='rtl'>
                    <div className='z-2  divOver vh-10 d-flex align-items-end '>

                        <div className='col-2 d-flex   vh-5 '>
                            <div className='   justify-content-start h-100 col-4 paddingZero'>
                                <img src={twitter} alt={'twitter'} className='imgSelf z-1  pointer'/>
                            </div>
                            <div className='   justify-content-start h-100 col-4 paddingZero'>
                                <img src={facebook} alt={'facebook'} className='imgSelf z-1  pointer'/>
                            </div>
                            <div className='   justify-content-start h-100 col-4 paddingZero'>
                                <img src={instagram} alt={'instagram'} className='imgSelf z-1  pointer'/>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-center  vh-5 align-items-end'>
                            <div className='col-4 d-flex align-items-end FontSize13vw justify-content-center'>
                                <div className='   justify-content-center h-100 col-4  pointer ml-4'>
                                    ContactUs
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer ml-4'>
                                    KickStarter
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer'>
                                    Media
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer'>
                                    Home
                                </div>
                            </div>

                        </div>
                        <div className='col-2 d-flex   vh-5 justify-content-center '>
                            <div className='   justify-content-start h-100 col-4 paddingZero'>
                                <img src={handmade_logo} alt={'handmade_logo'} className='imgSelf z-1  pointer'/>
                            </div>
                            <div className='   justify-content-start h-100 col-4 paddingZero '>
                                <img src={handmade_logo} alt={'handmade_logo'} className='imgSelf z-1  pointer'/>
                            </div>
                        </div>
{/*<div className='align-items-center'></div>*/}

                    </div>
                </div>

                <div className=' d-flex justify-content-center align-items-center vh-45 divOver30  flex-column' >
                    <div className=' d-flex justify-content-center align-items-center vh-35 w-100 '>
                        <div className='w-100 h-100 d-flex justify-content-center align-items-center position-relative'>
                            <div className=' justify-content-start h-100 col-5 paddingZero'>
                                <img src={textbox_bg} alt={'textbox_bg'} className='imgSelf z-1  pointer'/>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='firstTextOver'>
                                        FIGHT TO HEAVEN
                                        <br/>
                                        OR STAY IN HEELL
                                        <br/>
                                        "THE FRIEND"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' d-flex justify-content-center align-items-center vh-10  flex-column '>
                        <div className=' vh-10 d-flex justify-content-start align-items-center w-100'>
                            <img src={kikStarter} alt={'kikStarter'} className='imgSelf z-1 col-5 p-1'/>
                            <span className='imgSelf z-1 col-10 FontSize1vw d-flex justify-content-start align-items-center'>
                            watch a trailer
                            </span>
                        </div>
                        <div className=' vh-10 d-flex justify-content-start align-items-center w-100 '>
                            <img src={play_trailer_icon} alt={'play_trailer_icon'} className='imgSelf z-1 col-5 p-1'/>
                            <span className='imgSelf z-1 col-10 FontSize1vw d-flex justify-content-start align-items-center'>
                                                            Back Us On KikStarter
                            </span>
                        </div>
                    </div>
                </div>

{/*<div className='flex-column'></div>*/}


            </div>

        );
    }
}

export default FirstPage;