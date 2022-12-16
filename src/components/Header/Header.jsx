import React from 'react';
import "./Header.scss"

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"items"}>
                <div className={"item"}>Actions</div>
                <div className={"item"}>Reports</div>
                <div className={"item"}>Apps <div className={"new"}>new</div></div>
            </div>
            <div className={"photo"}>AT</div>
        </div>
    );
};

export default Header;