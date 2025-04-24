import React from 'react'

const TaskList = ({data}) => {
    console.log(JSON.stringify(data));

    return (
        <>
            {/* Task Cards */}
            <div id='tasklist' className="space-y-4">
                <div className="bg-red-500 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-red-700 text-white px-2 py-1 rounded text-sm">High</span>
                        <span className="text-sm">20 Feb 2024</span>
                    </div>
                    <h3 className="text-xl font-bold">Ek aur task</h3>
                    <p className="text-sm">Task jaisa kabhi nahi dekha hoga waisa</p>
                </div>
                <div className="bg-green-500 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-red-700 text-white px-2 py-1 rounded text-sm">High</span>
                        <span className="text-sm">20 Feb 2024</span>
                    </div>
                    <h3 className="text-xl font-bold">Example task</h3>
                    <p className="text-sm">Example Aisa kahi nahi dekha hoga jaisa</p>
                </div>
                <div className="bg-yellow-500 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-red-700 text-white px-2 py-1 rounded text-sm">High</span>
                        <span className="text-sm">8 Feb 2024</span>
                    </div>
                    <h3 className="text-xl font-bold">Another task</h3>
                    <p className="text-sm">Task details go here...</p>
                </div>
            </div>
        </>
    )
}

export default TaskList
