import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'

import ChatBox from '../chat-box'
import ChatBoxHeader from '../chat-box-header'
import ChatAction from '../chat-action'

import { GetChatRoomInfo } from "../../../services/chat_service"

import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";


export default ({message_data,chat_room_id}) => {
    const location = useLocation();

    const [ chatRoomInfo, setChatRoomInfo ] = useState([])

    useEffect(() => {
        LoadChatRoomInfo(chat_room_id);

    }, [location,message_data]);
    
    const LoadChatRoomInfo = async(chat_room_id) => {
        const response = await GetChatRoomInfo({chat_room_id : chat_room_id})
        if(response.data.statusCode == 200){
            setChatRoomInfo(response.data.devMessage)
            window.scrollTo(0, document.getElementById("message_content_id").scrollHeight);
        }
    }

    return (
        <>
            <ChatBoxHeader chat_room_info={chatRoomInfo} />
            <div class="content" id="message_content_id">
                {
                    message_data.map((obj,i)=> <ChatBox key={obj.id} chat_info={obj}></ChatBox>)
                }
            </div>
            <ChatAction chat_room_id={chat_room_id} />
        </>
    )
}