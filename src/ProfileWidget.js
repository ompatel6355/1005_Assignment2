// src/ProfileWidget.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';

const ProfileWidget = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return ( <
            div >
            <
            h2 > User Profile < /h2> {
            user ? ( <
                div >
                <
                p > Email: { user.email } < /p> < /
                div >
            ) : ( <
                p > No user logged in < /p>
            )
        } <
        /div>
);
};

export default ProfileWidget;