/* eslint-disable no-unused-vars */
import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <img className='menu' src={assets.menu_icon}></img>
                <div className='new-chat'>
                    <img src={assets.plus_icon}></img>
                    <p>New Chat</p>
                </div>
                <div className='recent'>
                    <div className='recent-title'>Recent</div>
                    <div className='recent-entry'>
                        <img src={assets.message_icon}></img>
                        <p>what is react........</p>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}></img>
                    <p> Help</p>

                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon_icon}></img>
                    <p> Activity</p>

                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon_icon}></img>
                    <p> settings</p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar