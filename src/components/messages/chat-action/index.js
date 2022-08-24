import './chat-action.css'
import { SaveChatMessage } from '../../../services/chat_service'
import React,{useState} from "react";
import { Socket } from "../../../services/socket_service"
import { getUserInfo } from '../../../services/base_service';
export default ({chat_room_id}) => {
    const socket  = Socket
    const [ chatMessage, setChatMessage ] = useState([''])
    const user_info = getUserInfo()
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(chatMessage == ""){

            }
            else{
                SaveMessage(chat_room_id,user_info.id,chatMessage)
            }  
        }
    }

    const SaveMessage = async (chat_room_id,user_id,message) => {
        let tmp = {
            id : '',
            chat_room_id : chat_room_id,
            user_id : user_id,
            message : message
        }
        const response = await SaveChatMessage(tmp)
        
        if(response.data.statusCode == 200){
            setChatMessage('')
            tmp.id = response.data.devMessage
            socket.emit("update chat message",tmp)
        }
    }

    return (
        <>
            <div class="chat-actions"> 
                <input type="text" placeholder="Type your message here..." class="form-control w-100" value={chatMessage || ''} onChange={(e) => setChatMessage(e.target.value)} onKeyDown={handleKeyDown}></input>
            </div>
        </>
    )
}