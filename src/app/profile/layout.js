import PrivateRoute from '@/providers/PrivateRoute';
import React from 'react';

const ProfileLayout = ({ children }) => {
    return (
        <div>
            <PrivateRoute>
                {children}
            </PrivateRoute>
        </div>
    );
};

export default ProfileLayout;