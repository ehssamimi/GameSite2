import React, {Component} from 'react';
import background from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg'

class FirstPage extends Component {
    render() {
        return (
            <div className='w-100 vh-100'>
                <img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>

                <div className='z-2 '>
                    <ul>
                        <li>arsenal</li>
                        <li>is</li>
                        <li>always</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default FirstPage;