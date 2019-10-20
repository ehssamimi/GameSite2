import React, {Component} from 'react';
import background from "../../../Common/img/Backgrounds/Backgrounds/5-bg.jpg";
import gray from "../../../Common/img/9-assets/gggraytext_bg.svg";
import RedBox from "../../../Common/img/5-assets/redbtn_bg.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";

class Slider1 extends Component {
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
            <div className='w-100 vh-100 position-relative z-1' id='slider1'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='slider1   justify-content-center   '>
                    <Link name="slider1" activeClass="slider1" className="slider1" to="eleven" spy={true} smooth={true} duration={500}>

                    <div className='  col-md-5 col-7 offset-3   d-flex align-items-end position-relative pointer'>

                        <img src={gray} alt={'gray'} className='imgSelf-cover  z-1  pointer '/>

                        <pre className='fontFamiliyBarbaDos  divOverSlider1  text-white z-2 '>
                        {`WELCOME TO ARENA, YOUR TICKET TO HEAVEN`}</pre>

                    </div>
            </Link>
                </div>
            </div>
        );
    }
}

export default Slider1;