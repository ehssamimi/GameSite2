import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/6-bg.jpg";
import box from "../../Common/img/6-assets/item .png";
import RedBox from "../../Common/img/6-assets/reddishgray_bg.svg";
import {animateScroll as scroll, Events, Link} from "react-scroll/modules";

class Six extends Component { constructor(props) {
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
            <section className='w-100 vh-45 position-relative  ' id='sixth'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}


                <div className='w-100 h-100  d-flex justify-content-center align-items-center box2 flex-column'>
                    <div className='     col-2 '>
                        <img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>
                    </div>
                    <div className='    h-35 col-4 mt-2 p-2 '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>

                        <Link name="six6" activeClass="six6" className="six6" to="seventh" spy={true} smooth={true} duration={500}>
                                  <pre className='fontFamiliyBarbaDos  divOverP6 FontSize2vw text-white z-4 '>
                            {`   YOUR OPPONENT IS NOT THE ONLY
         ONE WHO CAN KILL YOU!
     WATCH OUT FOR TRAPS IN ARENA!`}</pre>
                           </Link>


                    </div>
                </div>

            </section>
        );
    }
}

export default Six;