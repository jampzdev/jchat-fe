let message_data = [
    {
        id : 1,
        name : "You",
        message : "test Message",
        is_owner : true
    },
    {
        id : 2,
        name : "Joseph",
        message : "test Message 1",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 4,
        name : "You",
        message : "test Message 3",
        is_owner : true
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
    {
        id : 3,
        name : "Joseph",
        message : "test Message 2",
        is_owner : false
    },
]

let chat_rooms = [
    {
        id : "1",
        name : "belisa",
        participants : [
            1,3,4
        ]
    },
    {
        id : "2",
        name : "Test",
        participants : [
            1,3,4
        ]
    },
]


export function getMessageData() {
    return message_data;
}

export function getChatRooms() {
    return chat_rooms;
}