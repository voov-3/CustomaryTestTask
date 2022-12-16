import React from 'react';
import "./Navbar.scss"

const linkList = [
    {
        id: 0,
        label: "components",
        links: [{id: 0, item: "Base"}, {id: 1, item: "Icons"}, {id: 2, item: "Buttons"}, {id: 3, item: "Datatables"}, {
            id: 4,
            item: "Portlets"
        }, {id: 5, item: "Timeline"}, {id: 6, item: "Widgets"}, {id: 7, item: "Calendar"}, {id: 8, item: "base"}]
    }, {
        id: 1,
        label: "components",
        links: [{id: 0, item: "Base"}, {id: 1, item: "Icons"}, {id: 2, item: "Buttons"}]
    }
]
const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className="title">METRONIC</div>
            <div className="dashboard"><span>Dashboard</span><span className={"number"}>2</span></div>
            <div className="content">
                {linkList.map(itemList => <div key={itemList.id} className={"itemList"}>
                    <div className="label">{itemList.label}</div>
                    <div className="links">{itemList.links.map(link => <div key={link.id} className={"link"}>{link.item}</div>)}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Navbar;