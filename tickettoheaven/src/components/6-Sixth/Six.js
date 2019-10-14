import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/6-bg.jpg";
import box from "../../Common/img/6-assets/item .png";
import RedBox from "../../Common/img/6-assets/reddishgray_bg.svg";

class Six extends Component {
    render() {
        return (
            <div className='w-100 vh-45 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>


                <div className='w-100 h-100  d-flex justify-content-center align-items-center box2 flex-column'>
                    <div className='     col-2 '>
                        <img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>
                    </div>
                    <div className='    h-35 col-4 '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP6 FontSize2vw text-white z-4 '>
                            {`YOUR OPPONENT IS NOT THE ONLY
    ONE WHO CAN KILL YOU!
WATCH OUT FOR TRAPS IN ARENA!`}</pre>

                    </div>
                </div>

            </div>
        );
    }
}

export default Six;