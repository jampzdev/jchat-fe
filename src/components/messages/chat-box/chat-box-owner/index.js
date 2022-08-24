
import './chat-box-owner.css'

export default ({chat_info}) => {
    return (
        <div class="chat-box-owner-container">
            <div class="chat-info">
                <p class="sub-title">{chat_info.message}</p>
                <div class="img"></div>
            </div>
        </div>
    )
}