import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/5-bg.jpg";
import gray from "../../Common/img/5-assets/graytext_bg.svg";
import RedBox from "../../Common/img/5-assets/redbtn_bg.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

class Five extends Component {
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
            <ParallaxProvider>
                <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">

            <section className='w-100   position-relative z-1' id='fifth'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='box5   justify-content-center   '>

                    <div className='  col-9   d-flex align-items-end position-relative '>
                        <img src={gray} alt={'gray'} className='imgSelf-cover  z-1  pointer '/>
                        <pre className='fontFamiliyBarbaDos  divOverP4  text-white z-2 '>
                        {`DAY OR NIGHT!THE BAR IS 24 HOURS
OPEN FOR FELLOW COMPETITORS`}</pre>
                    </div>
                    <div className='  h-35  col-6 ml6 pointer'>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <Link name="five5" activeClass="five5" className="five5" to="seventh" spy={true} smooth={true} duration={500}>
                            {/*<h3> <span className='divOverP4-2   z-2  text-white textRotationHeader1'>IM READY FOR THE BETTER LIFE!</span></h3>*/}
                            <h3 className='divOverP4-2   z-2  text-white textRotationHeader1'>IM READY FOR THE BETTER LIFE!</h3>
                             </Link>
                        {/*<pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-4 '>*/}
                            {/*{`      KEEP YOUR EYE ON HEALTH BOXES*/}
    {/*EVEN THE MIGHIEST WARRIORS NEED*/}
{/*THIER STREGHT TO CONTINUE FIGHTING!`}</pre>*/}

                    </div>
                </div>
            </section>
               </Parallax>
           </ParallaxProvider>
        );
    }
}

export default Five;