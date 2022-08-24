import axios from 'axios';

//Chat Room
export const GetChatRooms = (params) => axios.post('http://localhost:3000/messages/get-chat-rooms',params)

export const GetChatRoomInfo = (params) => axios.post('http://localhost:3000/messages/get-chat-room-info',params)


//Chat Messages
export const GetChatMessages = (params) => axios.post('http://localhost:3000/messages/get-chat-messages',params)

export const SaveChatMessage = (params) => axios.post('http://localhost:3000/messages/save-chat-message',params)
