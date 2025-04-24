import React from 'react';
import Header from '../Common/Header';
import TaskNumbers from '../Common/TaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
    const { data } = props;
    console.log(JSON.stringify(data));
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <Header data={data} />
            <TaskNumbers data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;
