import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/2-bg.jpg";
import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
// import greentxt from "../../Common/img/2-assets/SVG/greentext_bg.svg";
import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
// import kikStarter2 from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";

class SecondPage extends Component {
    render() {
        return (
            <div className='w-100 vh-45 position-relative  '>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>
                <div className='w-100 box2 d-flex vh-30 ' >
                    <div className='col-2'>
                        <div className=' vh-10 d-flex justify-content-start '>
                            <img src={kikStarter} alt={'kikStarter'} className='imgSelf z-1 '/>
                        </div>
                    </div>
                    <div className='    z-2   h-100 col-9' >
                        <div className=' d-flex h-100 w-100'>
                            <div className='col-2 col-lg-1 '>
                                <div className=' vh-10 d-flex justify-content-start '>
                                    <img src={kikStarter} alt={'kikStarter'} className='imgSelf z-1 '/>
                                </div>
                                <div className=' vh-10 d-flex justify-content-start '>
                                    <img src={kikStarter} alt={'kikStarter'} className='imgSelf z-1 '/>
                                </div>
                            </div>
                            <div className='d-flex flex-column vh-20 w-100'>
                                <div className='col-sm-10 col-md-12 vh-15 bgGreen mt-1  w-100 '>
                                    <div className='pl-3 pr-3 text-justify h-100 FontSize25vw w-100'>
 <pre className='fontFamiliyBarbaDos text-white w-100'>{` OUR KICKSTARTER CAMPAIN WILL BE KICKING OFF SOON!
BACK US AND GET MOST OUT OF TICKET TO HEAVEN EXCLUSIVE ITEMS
 INCLUDE:ARTBOOK, POSTER AND PRINTS PLUS IN-GAME ITEMS `}</pre>

                                    </div>
                                    <div>
                                        <span className='pl-3 colorGreen FontSize25vw '>YOU DON'T WANT TO MISS THE FRIENDS STATUS</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='d-flex w-100'>
                            <div className='  d-flex justify-content-start col-6 vh-5'>
                                <img src={greenBtn} alt={'greenBtn'} className='imgSelf-cover z-1  pointer'/>
                            </div>
                            <div className='d-flex justify-content-start col-6 vh-5 '>
                                <img src={graybtn} alt={'graybtn'} className='imgSelf-cover z-1 pointer'/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default SecondPage;