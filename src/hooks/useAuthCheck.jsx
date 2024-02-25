'use client'

import { userLoggedIn } from '@/features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
    const dispatch = useDispatch()
    const [authCheck, setAuthCheck] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem('auth');

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.user && auth?.accessToken) {
                dispatch(
                    userLoggedIn({
                        accessToken: auth.accessToken,
                        user: auth.user
                    })
                )
            }
        }
        setAuthCheck(true);
    }, [])

    return authCheck;
};

export default useAuthCheck;