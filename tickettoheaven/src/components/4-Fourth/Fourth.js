import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/4-bg.jpg";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
import box from "../../Common/img/4-assets/heal_box.png";
import RedBox from "../../Common/img/4-assets/redtext_bg.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
// import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
// import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";

class Fourth extends Component {
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
            <div className='w-100 vh-45 position-relative' id='fourth'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='w-100 h-100  d-flex justify-content-center align-items-center box2 flex-column'>
                    <div className='  col-2   col-md-1  mb-4 '>
                    <img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>
                    </div>
                    <div className='   col-6   col-md-4   '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <Link name="third" activeClass="third" className="third" to="fifth" spy={true} smooth={true} duration={500}>
       <pre className='fontFamiliyBarbaDos  divOverP4  text-white z-4 '>
                            {`      KEEP YOUR EYE ON HEALTH BOXES
    EVEN THE MIGHIEST WARRIORS NEED
THIER STREGHT TO CONTINUE FIGHTING!`}</pre>
                        </Link>
                    </div>
                </div>

            </div>

        );
    }
}

export default Fourth;