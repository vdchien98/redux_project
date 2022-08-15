import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ name: 'Vdchien98', age: 24, email: 'vudangchien98@gmail.com' }));
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
