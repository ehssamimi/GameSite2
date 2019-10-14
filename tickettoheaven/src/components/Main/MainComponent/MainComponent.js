import React, {Component} from 'react';
import FirstPage from "../../1-FirstPage/FirstPage";
import SecondPage from "../../2-SecondPage/SecondPage";
import TheirdPage from "../../3-ThiredPage/TheirdPage";
import Fourth from "../../4-Fourth/Fourth";
import Five from "../../5-Fiveth/Five";
import Six from "../../6-Sixth/Six";
import Seven from "../../7-Seventh/Seven";
import Eight from "../../8-Eighth/Eight";
import Nine from "../../9-Nineth/Nine";
// import Nine2 from "../../9-Nineth/Nine2";
import Ten from "../../10-Tenth/Ten";
import Eleven from "../../11-Eleventh/Eleven";
import Twelve from "../../12-Twelve/Twelve";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <FirstPage/>
                <SecondPage/>
                <TheirdPage/>
                <Fourth/>
                <Five/>
                <Six/>
                <Seven/>
                <Eight/>
                <Nine/>
                {/*<Nine2/>*/}
                <Ten/>
                <Eleven/>
                <Twelve/>
            </div>
        );
    }
}

export default MainComponent;