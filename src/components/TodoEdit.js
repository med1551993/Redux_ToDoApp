import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateTask } from '../features/task/TaskSlice';
import pen from './pen-to-square-solid.svg'
const TodoEdit = ({id}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [edit, setEdit] = useState({
        title: '',
        description: '',
    });
    return (
      <>

<button variant="primary" className='fa-solid fa-pen-to-square' onClick={handleShow}>
    <img src={pen} alt='edit' />
 </button> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=''
                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder=''
                onChange={(e) =>
                  setEdit({ ...edit, description: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {dispatch(updateTask({id:id,edit}));
            handleClose()}}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    
)
}
export default TodoEdit
