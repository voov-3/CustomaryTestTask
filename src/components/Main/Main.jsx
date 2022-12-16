import React from 'react';
import "./Main.scss"
import {ListsWidget3} from "../../MetronicC/ListsWidget3";
import {MixedWidget10} from "../../MetronicC/MixedVidget";
import {ListsWidget5} from "../../MetronicC/Activities";

const Main = () => {
    return (
        <div className={"main"}>
            <div className="title">
                <div className={"dashboard"}>Dashboard</div>
                <div className={"today"}>
                    <div className={"day"}>Today:</div>
                    <div className={"date"}>Jan 31</div>
                    <div className={"circle"}/>
                </div>
            </div>
            <div className="content">
                <ListsWidget3/>
                <MixedWidget10/>
                <ListsWidget5/>
            </div>
        </div>
    );
};

export default Main;