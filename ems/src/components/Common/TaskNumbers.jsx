import React from 'react'

const TaskNumbers = () => {
    return (
        <>
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold">0</h2>
                    <p className="text-lg">New Task</p>
                </div>
                <div className="bg-green-500 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold">3</h2>
                    <p className="text-lg">Completed</p>
                </div>
                <div className="bg-yellow-500 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold">0</h2>
                    <p className="text-lg">Accepted</p>
                </div>
                <div className="bg-red-500 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold">1</h2>
                    <p className="text-lg">Failed</p>
                </div>
            </div>
        </>
    )
}

export default TaskNumbers
