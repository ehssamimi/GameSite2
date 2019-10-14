import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/5-bg.jpg";
import gray from "../../Common/img/5-assets/graytext_bg.svg";
import RedBox from "../../Common/img/5-assets/redbtn_bg.svg";

class Five extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>


                <div className='box5   justify-content-center   '>

                    <div className='  col-9   d-flex align-items-end '>
                        <img src={gray} alt={'gray'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-2 '>
                        {`DAY OR NIGHT!THE BAR IS 24 HOURS
OPEN FOR FELLOW COMPETITORS`}</pre>
                    </div>
                    <div className='  h-35 col-6 ml6'>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <span className='divOverP4-2  z-2 FontSize2vw text-white'>
                            IM READY FOR THE BETTER LIFE!
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

export default Five;