import React from 'react';
import useAuthCheck from '../hooks/useAuthCheck';

const AuthProvider = ({ children }) => {
    const authCheck = useAuthCheck();
    return !authCheck ? (<div>Checking authorization...</div>) : (children);
};

export default AuthProvider;