import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/3-bg.jpg";
import gray from "../../Common/img/3-assets/SVG/graytext_bg.svg";
import black from "../../Common/img/3-assets/SVG/blackbtn_bg.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";


class TheirdPage extends Component {
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

            <div className='w-100 vh-100 position-relative' id='third'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}
                <div className='thierdBox  d-flex justify-content-center flex-column'>
                    <h3 className='pl-md-5 pl-3 FontSize2vw'>I AM THE ONE WHO RUNS THE TOURNAMENT</h3>
                    <div className='  d-flex justify-content-start w-100 position-relative  '>
                        <img src={gray} alt={'kikStarter'} className='imgSelf-cover z-1 '/>
                                                   <pre className='fontFamiliyBarbaDos  divOverP3 FontSize2vw  text-white z-4 '>{`“THE FRIEND” IS YOUR TICKET TO HEAVEN,
     YOUR LAST SAVIOR AND ONLY PERSON
         WHO REALLY CARES ABOUT YOU! `}</pre>

                </div>
                    <div className='  d-flex justify-content-start w-75 position-relative pointer '>
                        <Link name="third" activeClass="third" className="third w-100 h-100" to="fifth" spy={true} smooth={true} duration={500}>

                        <img src={black} alt={'black'} className='imgSelf-cover z-1  '/>
                            <pre className='fontFamiliyBarbaDos  divOverP3-2 FontSize2vw text-white z-4 textRotationHeader '>{`TAKE ME TO BAR FRIEND `}</pre>
                        </Link>

                    </div>
                </div>

{/*<div className='position-relative'></div>*/}

            </div>
            //     </Parallax>
            // </ParallaxProvider>
        );
    }
}

export default TheirdPage;