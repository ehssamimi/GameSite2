import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/12-bg.jpg";
// import box from "../../Common/img/4-assets/heal_box.png";
// import RedBox from "../../Common/img/4-assets/redtext_bg.svg";
import twitter from "../../Common/img/1-assets/SVG/twitter_icon.svg";
import facebook from "../../Common/img/1-assets/SVG/facebook_icon.svg";
import instagram from "../../Common/img/1-assets/SVG/instagram_icon.svg";
import Linked from "../../Common/img/12-footer-assets/linked in icon.svg";
import youTube from "../../Common/img/12-footer-assets/youtube_icon.svg";
import BTN from "../../Common/img/12-footer-assets2/12-footer-assets2/bottom_to_top.svg";
import input from "../../Common/img/12-footer-assets2/12-footer-assets2/email input.png";
// import handmade_logo from "../../Common/img/1-assets/SVG/handmade_logo.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";
import ax from "../../Common/img/12-footer-assets2/12-footer-assets2/OS.png";
import { FaCopyright } from "react-icons/fa";

class Twelve extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <section className='w-100 vh-45 position-relative  ' id='twelve'>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>


                <div className='w-100 h-100  d-flex justify-content-center  box2 flex-column'>
                    <div className='col-12 h-100 d-flex flex-column' dir='rtl'>
                        <div className='z-2   vh-15 d-flex  align-items-center'>
                            <div className='col-4 d-flex   vh-5 '>
                                <div className='   justify-content-start h-100 col-2 paddingZero'>
                                    <img src={twitter} alt={'twitter'} className='imgSelf z-1  pointer'/>
                                </div>
                                <div className='   justify-content-start h-100 col-2 paddingZero'>
                                    <img src={facebook} alt={'facebook'} className='imgSelf z-1  pointer'/>
                                </div>
                                <div className='   justify-content-start h-100 col-2 paddingZero'>
                                    <img src={instagram} alt={'instagram'} className='imgSelf z-1  pointer'/>
                                </div>
                                <div className='   justify-content-start h-100 col-2 paddingZero'>
                                    <img src={Linked} alt={'Linked'} className='imgSelf z-1  pointer'/>
                                </div>
                                <div className='   justify-content-start h-100 col-2 paddingZero'>
                                    <img src={youTube} alt={'youTube'} className='imgSelf z-1  pointer'/>
                                </div>
                            </div>
                            <div className='col-8 d-flex h-100'>
                                <div className='w-100 h-100 justify-content-center  ' dir='ltr'>
                                    {/*<span className='FontSize25vw d-block'>DON'T MISS OUT!</span>*/}
                                    {/*<span className='FontSize2vw d-block'>FOLLOW US ON SOCIAL MEDIA AND KEEP UPDATE</span>*/}
                                    <h3 className='FontSize25vw d-block'>DON'T MISS OUT!</h3>
                                    <h2 className='FontSize2vw d-block'>FOLLOW US ON SOCIAL MEDIA AND KEEP UPDATE</h2>
                                </div>
                            </div>
                        </div>
                        <div className='w-100 vh-10 text-white z-3   d-flex justify-content-center flex-column align-items-center  '>
                            <div className='col-6   h-25 d-flex justify-content-center flex-column align-items-center '>
                                STAY UPDATED WITH OUR WEEKLY NEWSLETTER

                            </div>
                            <div className='   col-3   h-75 d-flex justify-content-center flex-column align-items-center '>
                                <img src={input} alt={'input'} className='imgSelf z-1  pointer'/>
                            </div>
                        </div>
                        <div className='w-100 vh-7 text-white z-3   d-flex justify-content-end '>
                            <div className='col-md-2 col-1 ml-auto '>
                                <Link name="first" activeClass="active" className="first" to="first" spy={true} smooth={true} duration={900}>
                                <img src={BTN} alt={'BTN'} className='imgSelf z-1  pointer'/>
                                </Link>

                            </div>
                            <div className='col-5 text-white d-flex '>
                                <div className='col-6'>
                                    <ul>
                                        <a className="alink text-white" href="#"><li className='liNone'>FAQ</li></a>
                                        <a className="alink text-white" href="#"><li className='liNone'>CONTACT US</li></a>
                                        <a className="alink text-white" href="#"><li className='liNone'>WATCH</li></a>

                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <a className="alink text-white" href="#"><li className='liNone'>TERM OF SERVICES</li></a>
                                        <a className="alink text-white" href="#"><li className='liNone'>PRIVACY POLICY</li></a>
                                        <a className="alink text-white" href="#"><li className='liNone'>HELP</li></a>

                                    </ul>
                                </div>

                            </div>

                        </div>
                        <hr className='bg-white w-75 mt-5 mb-2' ></hr>
                        <div className='w-100 vh-7 text-white z-3   d-flex justify-content-end pointer '>

                            <div className='col-2 h-50 ml-auto mt-3'>
                                <img src={ax}  className='imgSelf'/>
                            </div>
                            <div className='col-6 d-flex justify-content-end align-items-center'>
                                <span className=' ml-2 '> 2019,HANDMADE INTERACTIVE LLIC ALL RIGHTS RESERVED </span>

                                <span className=' d-flex   align-items-center pt-1'><FaCopyright/></span>

                            </div>

                        </div>



                        </div>


                </div>

            </section>

        );
    }
}

export default Twelve;