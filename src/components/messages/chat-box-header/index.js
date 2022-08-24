import './header.css'
export default ({chat_room_info}) => {
    return (
        <>
            <div class="header"> 
                <div class="room_name">
                    {chat_room_info.name}
                </div>
            </div>
        </>
    )
}