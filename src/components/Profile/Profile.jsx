import React from 'react';
import Navbar from './Navbar';
import TaskList from './TaskManage/TaskList';

const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default Profile;