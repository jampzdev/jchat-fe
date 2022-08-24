import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react';
import { Auth } from '../../../services/user_service'
import { DefaultSwal } from '../../sweetalert';

export default (props) => {
    const {show, handleClose, handleShow, handleLoginSuccess } = props

    const [ userName, setUserName ] = useState('')
    const [ passWord, setPassWord ] = useState('')

    const Login = async() =>{
        if(userName == "" || passWord == ""){
            DefaultSwal("Oops!","Required Field(s) Missing!","warning")
        }
        else{
            const response = await Auth({user_name : userName,pwd : passWord})
           
            if(response.data.statusCode == 200){
                if(response.data.devMessage == ""){
                    DefaultSwal("Oops!","Invalid Username/Password","warning")
                }
                else{
                    localStorage.setItem("user_info",JSON.stringify(response.data.devMessage))
                    handleLoginSuccess()
                }
            }
            else{
                DefaultSwal("Oops!","An error has occured, please try again later.","error")
            }
 
        }
    }

    return (
        <Modal
        {...props}
        size="s"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            Login
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={userName || ''} onChange={(e) => setUserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={passWord || ''} onChange={(e)=> setPassWord(e.target.value)}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>Sign-Up</Button>
            <Button variant="primary" onClick={Login}>Login</Button>

        </Modal.Footer>
        </Modal>
    );
}