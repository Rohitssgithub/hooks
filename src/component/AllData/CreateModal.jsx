import React, { useState } from 'react';
import { useCreateUserMutation } from '../../ReduxToolkitQuery/redux/Redux';
import Modals from './Modal';

function Example({ updateDataAfterAdd, buttonHead }) {

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
            setFormData({
                name: '',
                email: '',
                age: '',
            })
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
            <Modals buttonHead={buttonHead}
                show={show}
                setShow={setShow}
            >
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
                    <button onClick={handleCreateUser}>Add</button>
                </div>
            </Modals>

        </>
    );
}

export default Example;