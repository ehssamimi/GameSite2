import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/11-bg.jpg";
import gray from "../../Common/img/11-assets/textboxgray_bg.svg";
import bluebox from "../../Common/img/11-assets/darkbluebtn_bg.svg";
import greenbox from "../../Common/img/11-assets/greenishbluebtn_bg.svg";
import { FaKickstarterK } from "react-icons/fa";

class Eleven extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-relative  ' id='eleven'>
                <img src={background} alt={'firstPageBg'} className='imgSelf-cover z-1'/>


                <div className='box11   justify-content-center   '>

                    <div className='  col-12 col-md-10  d-flex align-items-end '>
                        <img src={gray} alt={'gray'} className='imgSelf  z-1  pointer'/>
                        <pre className='fontFamiliyBarbaDos  text11 text-white z-2 '>
                        {`TICKET TO HEAVEN:ONLINE WILL BE COMING TO
ANDROID,IOS AND PC,FREE TO DOWNLOAD
PREPARE YOUR SELF TO WIN THE TICKET TO HEAVEN!`}</pre>
                    </div>
                    <div className='  h-35 col-7 ml8'>
                        <img src={bluebox} alt={'bluebox'} className='imgSelf  z-1  pointer'/>
                        <span className='divOverP11-2-1  z-2 FontSize2vw text-white'>
                           COMING SOON...
                        </span>
                    </div>
                    <div className='  h-35 col-7 ml8 mt-2'>
                        <img src={greenbox} alt={'greenbox'} className='imgSelf  z-1  pointer'/>
                        <span className='divOverP11-2  z-2  text-white'>
                            <FaKickstarterK className="mb-2 mr-2" />
                            BACK US ON KICKSTARTER
                        </span>
                    </div>
                </div>
                <span className='buttonTab text-white FontSize13vw'>BACK US KICKSTARTER AND EARN EXCLUSIVE IN GAME AND PHYSICAL REWARDS!</span>
            </div>
        );
    }
}

export default Eleven;