import React from 'react';
import { useSelector } from "react-redux";

const useUser = () => {
    const user = useSelector((state) => state.auth.user);

    if (user) {
        return user;
    } else {
        return {};
    }
};

export default useUser;