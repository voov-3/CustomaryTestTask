import React from 'react';
import "./Header.scss"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from "../../redux/reducers/authReducer";



const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logout())
        navigate("/signIn")
    }

    return (
        <div className={"header"}>
            <div className={"items"}>
                <div className={"item"}>Actions</div>
                <div className={"item"}>Reports</div>
                <div className={"item"}>Apps <div className={"new"}>new</div></div>
            </div>
            <div className="logout">
                <div className={"photo"}>OO</div>
                <button onClick={onLogout} >logout</button>
            </div>
        </div>
    );
};

export default Header;