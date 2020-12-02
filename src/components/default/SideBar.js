import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import LineIcon from 'react-lineicons';

import "./sidebar.scss";
import {Navs} from "../../configs/Navs";

const SideBar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const menuToggle = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className={`sidebar ${openMenu ? 'active' : ''}`}>
            <div onClick={menuToggle} className={`menu-bar ${openMenu ? 'active' : ''}`}>
                <LineIcon name="chevron-right"/>
            </div>
            <div className="profile">
                <div className="profile-pic">
                    <img src="/images/shamim.jpg" alt=""/>
                </div>
            </div>
            <ul className="menu">
                {
                    Navs.map(value => (
                        <li key={value.path}>
                            <NavLink exact={value.exact} to={value.path}> {value.name} </NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className="menu-footer">
                &copy; 2020 Shamim
            </div>
        </div>
    )
}

export default SideBar;