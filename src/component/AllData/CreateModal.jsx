import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCreateUserMutation } from '../../ReduxToolkitQuery/redux/Redux';


function Example({ updateDataAfterAdd }) {

    const [createUser, { data, error, isLoading }] = useCreateUserMutation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleCreateUser = async () => {
        try {
            await createUser(formData);
            setShow(false)
            updateDataAfterAdd();
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'age' ? parseInt(value) : value,
        });
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* {isLoading && <p>Creating User...</p>}
            {error && <p>Error: {error.message}</p>} */}
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h2>Create User</h2>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateUser}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;