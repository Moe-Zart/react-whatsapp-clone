import React from 'react';
import "./sidebar.css"
import PersonalInfo from './personalInfo/PersonalInfo';
import ChatList from './chatList/ChatList';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            Sidebar
            <PersonalInfo/>
            <ChatList/>
        </div>
    );
}

export default Sidebar;
