import React, { useState } from 'react';
import ax1 from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg';
import ax2 from './../../Common/img/Backgrounds/Backgrounds/3-bg.jpg';
import ax3 from './../../Common/img/Backgrounds/Backgrounds/5-bg.jpg';

// import ax1 from './../../Common/img/Backgrounds/Backgrounds/1-bg.jpg';
// import ax2 from './../../Common/img/Backgrounds/Backgrounds/3-bg.jpg';
// import ax3 from './../../Common/img/Backgrounds/Backgrounds/5-bg.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import FirstPage from "../1-FirstPage/FirstPage";
import Slider1 from "./Slider/Slider1";

const items = [
    {
        src: ax1,
        // altText: 'Slide 1',
        // caption: 'Slide 1'
    },
    {
        src: ax2,
        // altText: 'Slide 2',
        // caption: 'Slide 2'
    },
    {
        src: ax3,
        // altText: 'Slide 3',
        // caption: 'Slide 3'
    }
];

const Nine = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (

                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item.src}
                >
                    <Slider1/>
                    {/*<img src={item.src} alt={item.altText} className='imgSelf-cover'  />*/}
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>

        );
    });

    return (
        <div className='w-100 h-50' id='nine'>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className='h-50'
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

                {slides}


            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
    );
};

export default Nine;