import React, {Component} from 'react';
import FirstPage from "../../1-FirstPage/FirstPage";
import SecondPage from "../../2-SecondPage/SecondPage";
import TheirdPage from "../../3-ThiredPage/TheirdPage";
import Fourth from "../../4-Fourth/Fourth";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <FirstPage/>
                <SecondPage/>
                <TheirdPage/>
                <Fourth/>

            </div>
        );
    }
}

export default MainComponent;