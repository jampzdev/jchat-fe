import { useState,useEffect } from "react"
import ModalLogin from "../../../modals/modal-login"
import ModalSignup from "../../../modals/modal-signup"

export default () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleCloseSignup = () => {
        setShowSignup(false)
        setShowLogin(true)
    }

    const handleLoginSuccess = () => {
        setShowLogin(false)
    }

    const handleShowSignup = () => setShowSignup(true);

    const handleCloseLogin = () => {
        setShowLogin(false)
        setShowSignup(true)
    };
    const handleShowLogin = () => setShowLogin(true);

    useEffect(() => {
        CheckLoggedInUser()
        
    }, []);

    const CheckLoggedInUser = () => {
        if(localStorage.getItem("user_info")===null){
            handleShowLogin()
        }
        else{
    
        }
    }

    return(
        <>
            <div>User info works!</div>
            <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShow={handleShowLogin} handleLoginSuccess={handleLoginSuccess}/>
            <ModalSignup show={showSignup} handleClose={handleCloseSignup} handleShow={handleShowSignup}/>

        </>

    )
}