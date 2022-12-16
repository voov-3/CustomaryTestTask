import React from 'react';
import "./Main.scss"
import svg_1 from '../../images/1.svg'
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className={"main"}>
            <div className="title">
                <div className={"dashboard"}>Dashboard</div>
                <div className={"today"}>
                    <div className={"day"}>Today:</div>
                    <div className={"date"}>Jan 31</div>
                    <div className={"circle"}></div>
                </div>
            </div>
            <div className="content">
                <div className={"first"}>
                    <img src={svg_1} alt="1" width="100%"/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;