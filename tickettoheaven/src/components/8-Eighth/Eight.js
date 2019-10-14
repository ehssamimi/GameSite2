import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/8-bg.jpg";
import box from "../../Common/img/4-assets/heal_box.png";
import RedBox from "../../Common/img/8-assets/ttextbox_bg.svg";

class Eight extends Component {
    render() {
        return (
            <div className='w-100 vh-45 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf-cover z-1'/>
                <div className='w-100 h-100  d-flex justify-content-center align-items-center box8 flex-column'>
                    {/*<div className='     col-1 '>*/}
                        {/*<img src={box} alt={'box'} className='imgSelf  z-1  pointer'/>*/}
                    {/*</div>*/}
                    <div className='    h-35 col-4 '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-4 '>
                            {`      AWAYS LOOK OUT FOR GUN BOXES
    WHILE THEY ARE DROPPING OFF PICK
THEM UP BEFORE YOUR OPPONENT DO!`}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default Eight;