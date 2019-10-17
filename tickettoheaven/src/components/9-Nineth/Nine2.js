import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ax1 from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg';
import ax2 from './../../Common/img/Backgrounds/Backgrounds/3-bg.jpg';
import ax3 from './../../Common/img/Backgrounds/Backgrounds/5-bg.jpg'
import FirstPage from "../1-FirstPage/FirstPage";

class Nine2 extends Component {
    render() {
        return (
            <div className='w-100 h-25'>
            <AwesomeSlider  >
                      <FirstPage/>
                    {/*<div data-src={ax1}/>*/}
                    <div data-src={ax2}/>
                    <div data-src={ax3}/>
            </AwesomeSlider>
                {/*<div className=''>*/}

                {/*</div>*/}
            </div>
        );
    }
}

export default Nine2;