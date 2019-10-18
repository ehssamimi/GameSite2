import React, {Component} from 'react';
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";
// import box from "../../Common/img/4-assets/heal_box.png";
import RedBox from "../../Common/img/2-assets/SVG/greentext_bg.svg";
import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
import gameIcon from "../../Common/img/2-assets/SVG/game icon.png";
import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import { ParallaxProvider,Parallax  } from 'react-scroll-parallax';
import { FaKickstarterK } from "react-icons/fa";


class SecondPage2 extends Component {
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

            <div className='w-100 vh-45 position-relative' id='second'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='  h-100  d-flex justify-content-start h-100  box2-3 align-items-start  flex-column position-relative'>

                    <div className='  w-100  d-flex  justify-content-start    '>
{/*<div className=''>*/}
    {/**/}
{/*</div>*/}

                        <div className='col-1 paddingZero    '>
                            <div className='   d-flex   '>
                                <img src={kikStarter} alt={'kikStarter'} className='imgSelf-cover m-1 br-05 z-1 '/>
                            </div>
                            <div className='   d-flex justify-content-start '>
                                <img src={gameIcon} alt={'gameIcon'} className='imgSelf m-1 z-1 pt-2'/>
                            </div>
                        </div>

                    <div className='col-md-10 col-11'>

                        <img src={RedBox} alt={'RedBox'} className='imgSelf   z-1  pointer'/>
                        <Link name="second" activeClass="second" className="second" to="third" spy={true} smooth={true} duration={500}>
               <pre className=' fontFamiliyBarbaDos  textconst  text-white z-4'>{` OUR KICKSTARTER CAMPAIN WILL BE KICKING OFF SOON!
BACK US AND GET MOST OUT OF TICKET TO HEAVEN
EXCLUSIVE ITEMS INCLUDE:ARTBOOK, POSTER AND PRINTS
PLUS IN-GAME ITEMS `}</pre>
                        </Link>


                     </div>


</div>

                    <div className='  w-100 h-100'>
                        <span className='col-9 offset-1 pl-3  colorGreen FontSize25vw '>YOU DON'T WANT TO MISS THE FRIENDS STATUS</span>
<div className='d-flex w-100 h-100'>
    <div className='d-flex justify-content-start col-6 vh-7 pointer'>
        <img src={graybtn} alt={'graybtn'} className='imgSelf-cover z-1 pointer'/>
        <Link name="second" activeClass="active" className="second" to="third" spy={true} smooth={true} duration={500}>
        <pre className='fontFamiliyBarbaDos  divOverP2  text-white z-2 '>{` LET'S MEET “THE FRIENDS”!`}</pre>
        </Link>
    </div>
    <div className='  d-flex justify-content-start col-6 vh-7'>
        <img src={greenBtn} alt={'greenBtn'} className='imgSelf-cover z-1  pointer'/>

            <pre className='fontFamiliyBarbaDos  divOverP2  text-white z-2 '><FaKickstarterK className="mb-2 mr-2" />{` BACK US ON KICKSTARTER!`}</pre>

    </div>
</div>


                    </div>
                </div>

            </div>


        );
    }
}

export default SecondPage2;