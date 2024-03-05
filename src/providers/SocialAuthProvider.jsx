"use client"

import React from 'react';
import { SessionProvider } from "next-auth/react"

const SocialAuthProvider = ({ children }) => {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    );
};

export default SocialAuthProvider;