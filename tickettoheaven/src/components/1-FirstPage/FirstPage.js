import React, {Component} from 'react';
import background from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg';
import twitter from './../../Common/img/1-assets/SVG/twitter_icon.svg';
import facebook from './../../Common/img/1-assets/SVG/facebook_icon.svg';
import instagram from './../../Common/img/1-assets/SVG/instagram_icon.svg';
import handmade_logo from "../../Common/img/1-assets/SVG/handmade_logo.svg";
import textbox_bg from "../../Common/img/1-assets/SVG/textbox_bg.svg";
import kikStarter from "../../Common/img/1-assets/SVG/kikstarter_icon.svg";
import play_trailer_icon from "../../Common/img/1-assets/SVG/play_trailer_icon.svg";
import TICKET from "../../Common/img/1-assets/SVG/TICKET TO HEAVEN.png";
// import handmade_logo from "../../Common/img/1-assets/SVG/textbox_bg.svg";
// import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            playVideo:false
        };
        // this.scrollToTop = this.scrollToTop.bind(this);

    }

    playVideo() {
        this.props.playVideo(true)
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    // scrollToTop() {
    //     scroll.scrollToTop();
    // }
    // scrollTo() {
    //     scroller.scrollTo('scroll-to-element', {
    //         duration: 800,
    //         delay: 0,
    //         smooth: 'easeInOutQuart'
    //     })
    // }
    // scrollToWithContainer() {
    //
    //     let goToContainer = new Promise((resolve, reject) => {
    //
    //         Events.scrollEvent.register('end', () => {
    //             resolve();
    //             Events.scrollEvent.remove('end');
    //         });
    //
    //         scroller.scrollTo('scroll-container', {
    //             duration: 800,
    //             delay: 0,
    //             smooth: 'easeInOutQuart'
    //         });
    //
    //     });
    //
    //     goToContainer.then(() =>
    //         scroller.scrollTo('scroll-container-second-element', {
    //             duration: 800,
    //             delay: 0,
    //             smooth: 'easeInOutQuart',
    //             containerId: 'scroll-container'
    //         }));
    // }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <ParallaxProvider>
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <section className='w-100 vh-100' id='first'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}
                <div className='' dir='rtl'>
                    <header className='z-2  divOver vh-10 d-flex align-items-center pt-2 '>

                        <div className='col-2 d-flex  vh-3 '>
                            <div className='     h-100 col-md-2 col-3 paddingZero   '>
                                <a href="#" ><img src={twitter} alt={'twitter'} className='imgSelf z-1  pointer'/></a>

                            </div>
                            <div className='     h-100 col-md-2 col-3 paddingZero'>
                                <a href="#"><img src={facebook} alt={'facebook'} className='imgSelf z-1  pointer'/></a>
                            </div>
                            <div className='     h-100 col-md-2 col-3 paddingZero'>
                                <a href="#"><img src={instagram} alt={'instagram'} className='imgSelf z-1  pointer'/></a>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-center  vh-5 align-items-end'>
                            <div className='col-md-4 col-6 d-flex align-items-end fontSizeHeader justify-content-center'>
                                <div className='   justify-content-center h-100 col-4  pointer ml-4'>
                                    <a className='alink' href="#twelve">ContactUs</a>
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer ml-4'>
                                    <a className='alink' href="#">KickStarter</a>
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer'>
                                    <a className='alink' href="#nine">Media</a>
                                </div>
                                <div className='   justify-content-center h-100 col-4 pointer'>
                                    <a className='alink' href="#first">Home</a>
                                </div>
                            </div>

                        </div>
                        <div className='col-2 d-flex   vh-7   justify-content-center'>
                            <div className='   justify-content-start h-75 col-md-2 col-3 paddingZero  alineTicket  mt-2  ml-5'>
                                <a className=' ' href="#"><img src={TICKET} alt={'TICKET'} className='imgSelf  z-1  pointer d-flex '/></a>
                            </div>
                            <div className='   justify-content-start h-100 col-md-3 col-4 paddingZero '>
                                <a className=' ' href="#"> <img src={handmade_logo} alt={'handmade_logo'} className='imgSelf z-1  pointer'/></a>
                            </div>
                        </div>

                        {/*<div className='align-items-center'>*/}
                            {/**/}
                        {/*</div>*/}

                    </header>
                </div>
                <div className='w-100 vh-90'>
                    {
                        this.state.playVideo?
                            <div className='videoPlay pointer'>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/
dwhcZXfcS68" frameBorder="0" allow="accelerometer; autoplay; encrypted-media;
gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            :
                            <div className=' d-flex justify-content-center align-items-center vh-45 divOver30  flex-column' >
                                <div className=' d-flex justify-content-center align-items-center vh-35 w-100 '>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center position-relative'>
                                        <div className=' justify-content-start h-100 col-3 paddingZero'>
                                            <Link name="first" activeClass="active" className="first" to="third" spy={true} smooth={true} duration={500} offset={20}>
                                            <img src={textbox_bg} alt={'textbox_bg'} className='imgSelf z-1  pointer'/>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <h1 className='firstTextOver pointer'>
                                                    FIGHT TO HEAVEN
                                                    <br/>
                                                    OR STAY IN HEELL
                                                    <br/>
                                                    “THE FRIEND”
                                                </h1>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className=' d-flex  align-items-center vh-10  flex-column ml10 '>
                                    <div className=' h-100 d-flex justify-content-start align-items-center w-100 pointer' onClick={this.playVideo.bind(this)}>
                                        <div className='col-2 h-100 paddingZero'>
                                            <a className=' ' href="#"> <img src={play_trailer_icon} alt={'play_trailer_icon'} className='imgSelf z-1  '/></a>
                                        </div>
                                        <div className='col-10 h-100 paddingZero'>
                                                   <span className='imgSelf z-1  FontSize1vw d-flex justify-content-start align-items-center'>
                                                    watch a trailer
                                                    </span>
                                        </div>
                                    </div>
                                    <div className=' vh-10 d-flex justify-content-start align-items-center w-100 mt-2 pointer'>

                                        <div className='col-2 h-100 paddingZero'>
                                            <a className=' ' href="#"> <img src={kikStarter} alt={'kikStarter'} className='imgSelf z-1 '/></a>
                                        </div>
                                        <div className='col-10 h-100 paddingZero'>
                                            <span className='imgSelf z-1   FontSize1vw d-flex justify-content-start align-items-center'>
                                            Back Us On KikStarter
                                             </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    }



                </div>



{/*<div className='flex-column'></div>*/}


            </section>
                </Parallax>
            </ParallaxProvider>

        );
    }
}

export default FirstPage;