import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/7-bg.jpg";
import gray from "../../Common/img/7-assets/grey50textbox_bg.svg";
import RedBox from "../../Common/img/7-assets/greenishgreybtn_bg.svg";
import {Link} from "react-scroll/modules";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

class Seven extends Component {
    render() {
        return (
            <ParallaxProvider>
                <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <section className='w-100 vh-100 position-relative  ' id='seventh'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='box7   justify-content-center   '>

                    <div className='  col-10 col-md-8    d-flex align-items-end '>
                        <img src={gray} alt={'gray'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP7  text-white z-2 '>
                        {`YOUR TRIP TO HEAVEN STARTS HERE!
JUMP IN THE AIRCRAFT NOW AND
HEAD TO ARENA!`}</pre>
                    </div>
                    <div className='  h-35 col-6 ml7'>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <Link name="seven7" activeClass="seven7" className="seven7" to="nine" spy={true} smooth={true}
                              duration={500}  offset={15}>
                                {/*<span className='divOverP7-2  z-2  text-white'>*/}
                            {/*lET'S FLY BATTLEFIELD!*/}
                        {/*</span>*/}
                            <h3 className='divOverP7-2  z-2  text-white pointer'>
                            lET'S FLY BATTLEFIELD!
                        </h3>
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

export default Seven;