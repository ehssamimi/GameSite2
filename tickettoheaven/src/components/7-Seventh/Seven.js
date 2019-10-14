import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/7-bg.jpg";
import gray from "../../Common/img/7-assets/grey50textbox_bg.svg";
import RedBox from "../../Common/img/7-assets/greenishgreybtn_bg.svg";

class Seven extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>


                <div className='box7   justify-content-center   '>

                    <div className='  col-8   d-flex align-items-end '>
                        <img src={gray} alt={'gray'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-2 '>
                        {`YOUR TRIP TO HEAVEN STARTS HERE!
JUMP IN THE AIRCRAFT NOW AND
HEAD TO ARENA!`}</pre>
                    </div>
                    <div className='  h-35 col-6 ml7'>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <span className='divOverP4-2  z-2 FontSize2vw text-white'>
                            lET'S FLY BATTLEFIELD!
                        </span>
                        {/*<pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-4 '>*/}
                        {/*{`      KEEP YOUR EYE ON HEALTH BOXES*/}
                        {/*EVEN THE MIGHIEST WARRIORS NEED*/}
                        {/*THIER STREGHT TO CONTINUE FIGHTING!`}</pre>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Seven;