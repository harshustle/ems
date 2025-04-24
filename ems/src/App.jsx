import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/localStorage.jsx';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData?.employees);

  // setLocalStorage(authData);  
  // use the  above code for setting the local storage for the first time

  useEffect(() => {
    if(authData){
      const loggedTnUser = localStorage.getItem('loggedInUser');
      if (loggedTnUser) {
        setUser(loggedTnUser.role);
      }
    }
  }, [authData])
  


  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role : 'admin', email }));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role : 'employee', email }));
      }

    } else {
      alert('Invalid credentials');
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : ''}
    </>
  )
}

export default App
