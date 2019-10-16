import React, {Component} from 'react';
import BTN from "../../Common/img/12-footer-assets2/12-footer-assets2/back_btn.svg";
import {Link} from "react-scroll/modules";


class PlayVideo extends Component {
    constructor(props){
        super(props);

        this.state = {currentKey: ''}
        this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.videoFrame.addEventListener('keydown',this.onVideoDown);
    }

    handleKeyPress(e) {
        console.log('key push')
        this.setState({currentKey: e.keyCode});
        if (e.keyCode === 27) {
            this.props.playVideo(false)
        }

    }
    handelBack(){
        this.props.playVideo(false)
    }
    onVideoDown(e) {
        console.log('key pressed'); // This is not invoking
    }
    videoLoad(e){
        var iframe = e.target; // it is equal to "this.videoFrame" and so, you can avoid using "ref"
        //this.videoFrame.addEventListener('keydown',this.onVideoDown);
        iframe.contentWindow.document.addEventListener('keydown', this.onVideoDown);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    render() {
        return (
            <div className='w-100 vh-100' >
                <div className='videoPlay pointer' onKeyDown={this.handleKeyPress.bind(this)} tabIndex="0">
                    <div className=' box2 vh-5 '>
                        <div className='col-10 z-6 BTNBACK'>
                            <img src={BTN} alt={'BTN'} className='imgSelf z-1  pointer' onClick={this.handelBack.bind(this)}/>

                        </div>
                    </div>
                    {/*<button className='btn btn-danger BtnBack' >back</button>*/}
                    <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/
dwhcZXfcS68" frameBorder="0" allow="accelerometer; autoplay; encrypted-media;
gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default PlayVideo;