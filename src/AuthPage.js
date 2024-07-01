import React, { useState } from 'react';
import { auth } from './firebase';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async() => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegister = async() => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return ( <div>
        <h1>Login</h1>
        <input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "Email"/>
        <input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "Password" />
        <button onClick = { handleLogin } > Login </button> 
        <button onClick = { handleRegister } > Register </button> {
        error && <p> { error } </p>} 
        </div>
    );
};

export default AuthPage;