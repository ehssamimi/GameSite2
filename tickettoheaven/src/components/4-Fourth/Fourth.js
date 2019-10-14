import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/4-bg.jpg";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
import box from "../../Common/img/4-assets/heal_box.png";
import RedBox from "../../Common/img/4-assets/redtext_bg.svg";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
// import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
// import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
// import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";

class Fourth extends Component {
    render() {
        return (
            <div className='w-100 vh-45 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>


                <div className='w-100 h-100  d-flex justify-content-center align-items-center box2 flex-column'>
                    <div className='     col-1 '>
                    <img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>
                    </div>
                    <div className='    h-35 col-4 '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-4 '>
                            {`      KEEP YOUR EYE ON HEALTH BOXES
    EVEN THE MIGHIEST WARRIORS NEED
THIER STREGHT TO CONTINUE FIGHTING!`}</pre>
                    </div>
                </div>

            </div>

        );
    }
}

export default Fourth;