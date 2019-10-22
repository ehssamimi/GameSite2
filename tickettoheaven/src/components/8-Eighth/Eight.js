import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/8-bg.jpg";
import box from "../../Common/img/4-assets/heal_box.png";
import RedBox from "../../Common/img/8-assets/ttextbox_bg.svg";
import {animateScroll as scroll, Events} from "react-scroll/modules";

class Eight extends Component {
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
            <section className='w-100 vh-45 position-relative  ' id='eight'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf-cover z-1'/>*/}
                <div className='w-100 h-100  d-flex justify-content-center align-items-center box8 flex-column'>
                    {/*<div className='     col-1 '>*/}
                        {/*<img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>*/}
                    {/*</div>*/}
                    <div className=' h-35 col-7 col-md-4 position-relative '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  textSplit  text-white z-4 '>
                            {`      AWAYS LOOK OUT FOR GUNS
    WHILE THEY ARE DROPPING OFF PICK
   THEM UP BEFORE YOUR OPPONENT DO!`}</pre>
                    </div>
                </div>
            </section>
        );
    }
}

export default Eight;