import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/3-bg.jpg";
import gray from "../../Common/img/3-assets/SVG/graytext_bg.svg";
import black from "../../Common/img/3-assets/SVG/blackbtn_bg.svg";


class TheirdPage extends Component {
    render() {
        return (
            <div className='w-100 vh-100 position-relative'>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>
                <div className='thierdBox  d-flex justify-content-center flex-column'>
                    <h3 className='pl-5 FontSize15vw'>I AM THE ONE WHO RUNS THE TOURNAMENT</h3>
                    <div className=' vh-25 d-flex justify-content-start '>
                        <img src={gray} alt={'kikStarter'} className='imgSelf-cover z-1 '/>
                                                   <pre className='fontFamiliyBarbaDos  divOverP3 FontSize2vw  text-white z-4 '>{`"THE FRIEND" IS YOUR TICKET TO HEAVEN,
    YOUR LAST SAVIOR AND ONLY PERSON
        WHO REALLY CARES ABOUT YOU! `}</pre>

                </div>
                    <div className=' vh-15 d-flex justify-content-start '>
                        <img src={black} alt={'black'} className='imgSelf-cover z-1 '/>
                        <pre className='fontFamiliyBarbaDos  divOverP3-2 FontSize2vw text-white z-4 '>{`TAKE ME TO BAR FRIEND `}</pre>
                    </div>


                </div>



            </div>
        );
    }
}

export default TheirdPage;