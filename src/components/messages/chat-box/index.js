import 'bootstrap/dist/css/bootstrap.min.css';
import './chat-box.css'
import Col from 'react-bootstrap/Col';

import ChatBoxMember from './chat-box-member'
import ChatBoxOwner from './chat-box-owner'

export default ({chat_info}) => {
    console.log(chat_info)

    return (
        <>
            <div class="chat-box">
                <Col xs = {12}>
                    {
                        chat_info.is_owner == true 
                        ? <ChatBoxOwner chat_info={chat_info} />
                        : <ChatBoxMember chat_info={chat_info}/>
                    }
                </Col>
            </div>

        </>
    )
}