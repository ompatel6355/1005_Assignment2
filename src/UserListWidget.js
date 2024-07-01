// src/UserListWidget.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase';

const UserListWidget = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(usersData);
        });
        return unsubscribe;
    }, []);

    return ( <div>
        <h2> User List </h2> 
        <ul>  {
            users.map((user) => ( 
                <li key = { user.id } > { user.email } </li>
            ))
        } </ul>  
        </div>
    );
};

export default UserListWidget;