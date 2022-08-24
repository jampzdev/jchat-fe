import SideBar from '../../components/messages/side-bar'
import Content from '../../components/messages/content'
import ChatRoomInfo from '../../components/messages/chat-room-info';
import { useParams,useLocation } from "react-router-dom";
import { GetChatRooms,GetChatMessages } from "../../services/chat_service"
import { Socket } from "../../services/socket_service"
import { getUserInfo } from '../../services/base_service';
import Col from 'react-bootstrap/Col';
import React,{useState,useEffect} from "react";

import './messages.css'


// import { getMessageData,getChatRooms } from '../../test-data/MessageData'

export default () => {
    const socket = Socket
    const [isConnected, setIsConnected] = useState(socket.connected);

    socket.on('connection', () => {
        setIsConnected(true);
    });

    const location = useLocation();
    let { chatRoomId } = useParams();
    let userInfo = getUserInfo();

    const [ chatRooms, setChatRooms ] = useState([])
    const [ messageData, setMessageData ] = useState([])

    useEffect(() => {
        LoadChatRooms();
        if(userInfo != ""){
            LoadChatMessages(chatRoomId,userInfo.id);
        }

        socket.on('update chat message front', (data) => {
            if(data.chat_room_id == chatRoomId){
                let tmp = {
                    id: data.id,
                    chat_room_id: data.chat_room_id,
                    user_id: data.user_id,
                    message: data.message,
                    is_owner: userInfo.id == data.user_id ? true : false,
                    date_created: data.date_created,
                    name : data.name
                }
                NewMessageAddToList(tmp)
            }
        });
    }, [location]);

    const LoadChatRooms = async() => {
        const response = await GetChatRooms({})
        if(response.data.statusCode == 200){
            setChatRooms(response.data.devMessage)
        }
    }

    const LoadChatMessages = async(key,user_id) => {
        const response = await GetChatMessages({chat_room_id : key,user_id : user_id })
        if(response.data.statusCode == 200){
            setMessageData(response.data.devMessage)
        }
    }

    const NewMessageAddToList = (data) => {
        setMessageData(current => [...current,data]);
    }

    return (
         <>
            <div class="messages-content">
                <Col xs ={3}>
                    <SideBar chat_rooms={chatRooms}>

                    </SideBar>
                </Col>
                <Col xs={6}>
                    <Content message_data={messageData} chat_room_id={chatRoomId}>

                    </Content>
                </Col>
                <Col xs ={3}>
                    <ChatRoomInfo>

                    </ChatRoomInfo>
                </Col>
            </div>
         </>
    )
}