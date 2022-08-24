

export const getUserInfo = () =>{
    if(localStorage.getItem("user_info") !== null){
        return JSON.parse(localStorage.getItem("user_info"))
    }
    else{
        return ""
    }
}