// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase';
import AuthPage from './AuthPage';
import Dashboard from './Dashboard';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return ( <
        Router >
        <
        div > {
            user ? ( <
                Dashboard / >
            ) : ( <
                AuthPage / >
            )
        } <
        /div> <
        /Router>
    );
};

export default App;