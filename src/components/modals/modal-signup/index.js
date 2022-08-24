import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react';
import { RegisterUser } from '../../../services/user_service'
import { DefaultSwal } from '../../sweetalert';

export default (props) => {
    const {show, handleClose, handleShow } = props

    const [ firstName, setFistName ] = useState('')
    const [ middleName, setMiddleName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const [ userName, setUserName ] = useState('')
    const [ passWord, setPassWord ] = useState('')

    const Signup = async() =>{
        if(firstName == "" || lastName == "" || userName == "" || passWord == ""){
            DefaultSwal("Oops!","Required Field(s) Missing!","warning")
        }
        else{
            let tmp = {
                fname :firstName,
                mname : middleName,
                lname : lastName,
                username : userName,
                pwd : passWord
            }
            const response = await RegisterUser(tmp)
           
            if(response.data.statusCode == 200){
                if(response.data.devMessage == true){
                    DefaultSwal("Success!","Registration Complete!","success")
                    handleClose()
                }
                else{
                    DefaultSwal("Oops!","An error has occured, please try again later.","error")
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
            Sign-up. It's Free!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={firstName || ''} onChange={(e) => setFistName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={lastName || ''} onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
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
            <Button variant="danger" onClick={handleClose}>Login</Button>
            <Button variant="primary" onClick={Signup}> Sign Up!</Button>

        </Modal.Footer>
        </Modal>
    );
}