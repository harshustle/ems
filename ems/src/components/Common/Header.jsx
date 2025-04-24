import React from 'react'

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  }
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Hello, <span className="text-yellow-400">{props.data?.name || props.data?.email} 👋</span>
        </h1>
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Log Out
        </button>
      </div>
    </>
  )
}

export default Header
