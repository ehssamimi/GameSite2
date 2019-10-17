import React, {Component} from 'react';
import background from "../../Common/img/Backgrounds/Backgrounds/2.jpg";
import kikStarter from "../../Common/img/2-assets/SVG/kikstarter_icon.svg";
import greenBtn from "../../Common/img/2-assets/SVG/greenbtn_bg.svg";
import gameIcon from "../../Common/img/2-assets/SVG/game icon.png";
import graybtn from "../../Common/img/2-assets/SVG/graybtn_bg.svg";
import baner from "../../Common/img/2-assets/SVG/10.jpg";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import greentext from "../../Common/img/2-assets/SVG/greentext_bg.svg";


class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <div className='w-100 vh-45 position-relative' id='second'>
                {/*<img src={background} alt={'firstPageBg'} className='imgSelf z-1'/>*/}
                <div className='box2-3  d-flex justify-content-center flex-column'>
                    {/*<div className='       h-100 col-12   paddingZero' >*/}
                        <div className=' d-flex h-100 w-100'>
                            <div className='axWidth pl-3 pr-3 pb-3 '>
                                <div className='   d-flex justify-content-start '>
                                    <img src={kikStarter} alt={'kikStarter'} className='imgSelf-cover m-1 br-05 z-1 '/>
                                </div>
                                <div className='   d-flex justify-content-start '>
                                    <img src={gameIcon} alt={'gameIcon'} className='imgSelf m-1 z-1 pt-2'/>
                                </div>
                            </div>
                            <div className='d-flex flex-column  w-100  '>
                                <div className='       w-100 h-100 '>
                                    <img src={greentext} alt={'greentext'} className='imgSelf-cover z-1 '/>
                                    <div className='pl-3 pr-3 text-justify h-100 w-100 divOverP4'>
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


                        <div className='d-flex w-100 h-100'>
                            <div className='d-flex justify-content-start col-6 vh-7 '>
                                <img src={graybtn} alt={'graybtn'} className='imgSelf-cover z-1 pointer'/>
                                <pre className='fontFamiliyBarbaDos  divOverP2 FontSize2vw text-white z-2 '>{` BACK US ON KICKSTARTER!`}</pre>
                            </div>
                            <div className='  d-flex justify-content-start col-6 vh-7'>
                                <img src={greenBtn} alt={'greenBtn'} className='imgSelf-cover z-1  pointer'/>
                                <Link name="second" activeClass="active" className="second" to="third" spy={true} smooth={true} duration={500}>
                                    <pre className='fontFamiliyBarbaDos  divOverP2 FontSize2vw text-white z-2 '>{` LET'S MEET THE FRIENDS!`}</pre>
                                </Link>
                            </div>

                        </div>

                    </div>
                {/*</div>*/}
                {/*<div className='w-100 box2-2 d-flex vh-35 mt-3' >*/}
                    {/*<div className='col-2'>*/}
                        {/*<div className=' vh-35 d-flex justify-content-start '>*/}
                            {/*<img src={baner} alt={'baner'} className='imgSelf z-1 '/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className='    z-2   h-100 col-7 offset-4 paddingZero' >*/}
                        {/*<div className=' d-flex h-100 w-100'>*/}
                            {/*<div className='axWidth pl-3 pr-3 pb-3 '>*/}
                                {/*<div className='   d-flex justify-content-start '>*/}
                                    {/*<img src={kikStarter} alt={'kikStarter'} className='imgSelf-cover m-1 br-05 z-1 '/>*/}
                                {/*</div>*/}
                                {/*<div className='   d-flex justify-content-start '>*/}
                                    {/*<img src={gameIcon} alt={'gameIcon'} className='imgSelf m-1 z-1 pt-2'/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className='d-flex flex-column  w-100  '>*/}
                                {/*<div className='col-sm-10 col-md-12   bgGreen  w-100 '>*/}
                                {/*/!*<img src={greentext} alt={'greentext'} className='imgSelf-cover z-1 '/>*!/*/}

                                {/*<div className='pl-3 pr-3 text-justify h-100 FontSize25vw w-100'>*/}
 {/*<pre className='fontFamiliyBarbaDos text-white w-100'>{` OUR KICKSTARTER CAMPAIN WILL BE KICKING OFF SOON!*/}
{/*BACK US AND GET MOST OUT OF TICKET TO HEAVEN EXCLUSIVE ITEMS*/}
 {/*INCLUDE:ARTBOOK, POSTER AND PRINTS PLUS IN-GAME ITEMS `}</pre>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<span className='pl-3 colorGreen FontSize25vw '>YOU DON'T WANT TO MISS THE FRIENDS STATUS</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className='d-flex w-100'>*/}
                            {/*<div className='d-flex justify-content-start col-6 vh-7 '>*/}
                                {/*<img src={graybtn} alt={'graybtn'} className='imgSelf-cover z-1 pointer'/>*/}
                                {/*<pre className='fontFamiliyBarbaDos  divOverP2 FontSize2vw text-white z-2 '>{` BACK US ON KICKSTARTER!`}</pre>*/}
                            {/*</div>*/}
                            {/*<div className='  d-flex justify-content-start col-6 vh-7'>*/}
                                {/*<img src={greenBtn} alt={'greenBtn'} className='imgSelf-cover z-1  pointer'/>*/}
                                {/*<Link name="second" activeClass="active" className="second" to="third" spy={true} smooth={true} duration={500}>*/}
                                    {/*<pre className='fontFamiliyBarbaDos  divOverP2 FontSize2vw text-white z-2 '>{` LET'S MEET THE FRIENDS!`}</pre>*/}
                                {/*</Link>*/}
                            {/*</div>*/}

                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}


            </div>
        );
    }
}

export default SecondPage;