import React, { useState } from 'react';
import { useCreateUserMutation, useUpdateUserMutation } from '../../ReduxToolkitQuery/redux/Redux';
import Modals from './Modal';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

function Example({ updateDataAfterAdd, buttonHead, show, setShow, user }) {

    console.log('user', user)

    const [createUser, { data, error, isLoading }] = useCreateUserMutation();
    const [updateUser] = useUpdateUserMutation();


    const modi = {
        name: user.name,
        email: user.email,
        phone: user.phone
    }
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     age: '',
    // });

    // const handleCreateUser = async () => {
    //     try {
    //         await createUser(formData);
    //         setShow(false)
    //         updateDataAfterAdd();
    //         setFormData({
    //             name: '',
    //             email: '',
    //             age: '',
    //         })
    //     } catch (error) {
    //         console.error("Error creating user:", error);
    //     }
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: name === 'age' ? parseInt(value) : value,
    //     });
    // };

    console.log('called')
    // const [show, setShow] = useState(false);

    console.log(show)

    const initialValues = {
        name: '',
        email: '',
        phone: '',
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        // age: Yup.string().email('Invalid email').required('Email is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is Required'),
    });


    return (
        <>
            <Modals buttonHead={buttonHead}
                show={show}
                setShow={setShow}
            >
                <Formik
                    initialValues={Object.keys(user).length === 0 ? initialValues : modi}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                        console.log(values);

                        if (Object.keys(user).length === 0) {
                            try {
                                await createUser(values)
                                updateDataAfterAdd();
                                setShow(false)
                            } catch (error) {
                                console.error("Error creating user:", error);
                            }
                        }
                        else {
                            try {
                                await updateUser(values)
                                updateDataAfterAdd();
                                setShow(false)
                            } catch (error) {
                                console.error("Error creating user:", error);
                            }

                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" >Name</label>
                                <Field name="name"
                                    className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                                    placeholder="Enter your Name" />
                                {errors.name && touched.name ? (
                                    <span className='error-text'>{errors.name}</span>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <Field name="email"
                                    className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                                    placeholder="Enter your Email" />
                                {errors.email && touched.email ? (
                                    <span className='error-text'>{errors.email}</span>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                                <Field name="phone" type="text"
                                    className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} placeholder="Enter your phone number" />
                                {errors.phone && touched.phone ?
                                    <span className='error-text'>{errors.phone}</span>
                                    : null}
                            </div>
                            <div className="mb-3 text-center">
                                <button className='btn btn-success mx-2' type='submit'>Add</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* <div>
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
                    <button className='btn btn-primary' onClick={handleCreateUser}>Add</button>
                </div> */}
            </Modals>

        </>
    );
}

export default Example;