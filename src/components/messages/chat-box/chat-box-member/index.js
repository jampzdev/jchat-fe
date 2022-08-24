import './chat-box-member.css'

export default ({chat_info}) => {
    return (
        <div class="chat-box-member">
            <div class="box">
                <img src= "https://freepikpsd.com/file/2019/10/default-profile-image-png-1-Transparent-Images.png"></img>
            </div>
            <div class="chat-box-member-info">
                <p class="title">{chat_info.name}</p>
                <p class="sub-title">{chat_info.message}</p>
                <div class="img"></div>
            </div>
        </div>
    )
}