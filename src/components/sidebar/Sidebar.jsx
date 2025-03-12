import React from 'react';
import "./sidebar.css"
import PersonalInfo from './personalInfo/PersonalInfo';
import ChatList from './chatList/ChatList';
import { auth } from '../../lib/firebase';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <PersonalInfo/>
            <ChatList/>
            <button className="logout" onClick={()=>auth.signOut()}>Log out</button>
        </div>
    );
}

export default Sidebar;
