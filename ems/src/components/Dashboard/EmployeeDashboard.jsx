import React from 'react';
import Header from '../Common/Header';
import TaskNumbers from '../Common/TaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <Header />
            <TaskNumbers />
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
