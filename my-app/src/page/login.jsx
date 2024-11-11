import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.scss';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();

    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!number || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            const response = await axios.post('https://educationsapi.pythonanywhere.com/accounts/login/', {
                phone: number,
                password: password
            });

            console.log('Login successful:', response.data);
            toast.success('Login successful!');
            
            navigate('/page'); 

        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid credentials, please try again.');
            toast.error('Invalid credentials, please try again.');
        }
    };

    return (
        <>
            <div className="app">
                <div className="loginContainer">
                    <h1>Log In</h1>
                    <div className="input-container">
                        <label>Number</label>
                        <input 
                            type="number" 
                            value={number} 
                            onChange={(e) => setNumber(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <a href="/signup">Create new account</a>
                    <button type="button" onClick={handleLogin}>Log In</button>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    style:{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '16px',
                    }
                }}
            />
        </>
    );
}

export default Login;
