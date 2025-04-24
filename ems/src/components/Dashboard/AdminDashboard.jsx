import React from 'react';
import CreateTask from '../Function/CreateTask';
import AllTask from '../Function/AllTask';
import Header from '../Common/Header';

const AdminDashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white p-6">
        <Header />
        <CreateTask />
        <AllTask />
      </div></>
  );
};

export default AdminDashboard;
