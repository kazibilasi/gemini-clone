/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
function Sidebar() {

    const [extended, setExtended] = useState(false)
    const {  prevPrompt,
        setPrevPrompt, onSent,
        setRecentPrompt,newChat} = useContext(Context)

        const loadPrompt = async (prompt)=>{
            setRecentPrompt(prompt)
           await onSent(prompt)
        }
    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={()=> setExtended(prev => !prev)} className='menu' src={assets.menu_icon}></img>
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src={assets.plus_icon}></img>
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className='recent'>
                    <div className='recent-title'>Recent</div>
                    {
                        prevPrompt.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)}  className='recent-entry'>
                                    <img src={assets.message_icon}></img>
                                    <p>{item.slice(0,18)}........</p>
                                </div>
                            )
                        })
                    }

                </div> : null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}></img>
                    {extended ? <p> Help</p> : null}

                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}></img>
                    {extended ? <p> Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}></img>
                    {extended ? <p> settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar