import React, { useState } from 'react';
import axios from 'axios';
import '../style/signup.scss';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function About() {
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState(''); 
    const [firstName, setFirstName] = useState('');

    const handleSignUp = async () => {

        if (!firstName || !phone || !password1 || !password2) {
            toast.error("All fields must be filled");
            return;
        }
        if (password1.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }
        if (password1 !== password2) {
            toast.error("Passwords do not match");
            return;
        }

        toast.success("Validation successful");

        try {
            const response = await axios.post('https://educationsapi.pythonanywhere.com/accounts/register/', {
                phone: phone,
                password: password1,
                password2: password2,
                first_name: firstName,
            });
            console.log('User signed up successfully:', response.data);
            toast.success("Sign-up successful");
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error("Sign-up failed, please try again.");
        }
    };

    return (
        <>
            <div className="home">
                <div className="boss">
                    <div className="car">
                        <h1>Sign Up</h1>
                        <div className="group">
                            <div className="inp">
                                <input
                                    id="inp1"
                                    type="number"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="inp">
                                <input
                                    id="inp2"
                                    type="password"
                                    placeholder="Password"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                />
                            </div>
                            <div className="inp">
                                <input
                                    id="inp3"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={password2} 
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                            </div>
                            <div className="inp">
                                <input
                                    id="inp4"
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="btn">
                                <button type="button" onClick={handleSignUp}>Sign Up</button>
                                <div className="href">
                                    <h1>Already have an account?</h1>
                                    <a href="/login">Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    style: {
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '16px',
                    }
                }}
            />
        </>
    );
}

export default About;
