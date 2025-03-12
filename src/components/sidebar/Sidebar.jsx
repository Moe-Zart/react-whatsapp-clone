import React from 'react';
import "./sidebar.css"
import PersonalInfo from './personalInfo/PersonalInfo';
import ChatList from './chatList/ChatList';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <PersonalInfo/>
            <ChatList/>
            <button className="logout">Log out</button>

        </div>
    );
}

export default Sidebar;
