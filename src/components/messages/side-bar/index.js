import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css'
import RoomInfo from './room-info'
import UserInfo from './user-info'

export default ({chat_rooms}) => {

    return (
        <>
            <div class="user-info">
                <UserInfo></UserInfo>
            </div>
            <div class="sidebar">
                <ul>
                    {
                        chat_rooms.map((obj,i)=> <RoomInfo key={obj.id} room_info={obj}></RoomInfo>)
                    }
                </ul>
            </div>
        </>
    )
}