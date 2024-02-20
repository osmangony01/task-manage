'use client'

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useAuth();

    if (isLoggedIn) {
        return children;
    } else {
        redirect('/sign-in');
    }
};

export default PrivateRoute;