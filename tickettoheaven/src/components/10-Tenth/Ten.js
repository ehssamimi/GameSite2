import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/10-bg.jpg";
import RedBox from "../../Common/img/10-assets/ttttextbox_bg.svg";
import ITEM from "../../Common/img/10-assets/item.png";

class Ten extends Component {
    render() {
        return (
            <div className='w-100 vh-45 position-relative  ' id='ten'>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>
                <div className='w-100 h-100  d-flex justify-content-center align-items-center box10 mr-5'>
                    <div className='     col-3 col-md-2  vh-35 '>
                    <img src={ITEM} alt={'ITEM'} className='imgSelf  z-1  pointer'/>
                    </div>
                    <div className='  col-7 col-md-5   '>
                        <img src={RedBox} alt={'RedBox'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  divOverP4 FontSize2vw text-white z-4 '>
                            {`IT'S NOT ALWAYS ABOUT HAVING A GUN
SOMETIMES A BASEBALL BAT IS ENOUGH!`}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ten;