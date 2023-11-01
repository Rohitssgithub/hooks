import React, { useCallback } from 'react';
import { useGetAllPokemonsQuery, useDeleteUserMutation } from '../../ReduxToolkitQuery/redux/Redux';
import Modals from './Modal';
import Example from './CreateModal';
const Alldata = () => {
    const { data, error, isLoading, refetch } = useGetAllPokemonsQuery();
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null);


    const [deleteUser] = useDeleteUserMutation();

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            refetch();
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    const updateDataAfterAdd = useCallback(() => {
        console.log('called refetch')
        refetch();
    }, [refetch]);


    const handleEditOpenModal = (id) => {
        setShow(false)
        setId(id)
    }

    return (
        <div className="App">
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        {data.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.name}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.email}</td>
                                <td>
                                    <button onClick={() => handleEditOpenModal(ele.id)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(ele.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </>
            ) : null}
            {/* <Example updateDataAfterAdd={updateDataAfterAdd} /> */}
            <Example updateDataAfterAdd={updateDataAfterAdd} buttonHead='Add' />
        </div>
    );
};

export default Alldata;
