import './room-info.css'
import Col from 'react-bootstrap/Col';
import { Outlet,Link } from "react-router-dom";

export default ({room_info}) => {
    return (
        <>
            <li>
                <Link to={`/messages/${room_info.id}`}>
                    <div class="room-box">
                        <Col xs = {12}>
                            <div class="container">
                                <div class="box">
                                    <img src= "https://w7.pngwing.com/pngs/652/1003/png-transparent-computer-icons-icon-design-users-group-group-icon.png"></img>
                                </div>
                                <div class="chat-info">
                                    <p class="title">{room_info.name}</p>
                                    <div class="img"></div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Link>
            </li>
        </>
    )
}