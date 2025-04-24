import React from 'react'

const CreateTask = () => {
  return (
    <>
          <div className=" bg-black text-white p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center mb-6">
        <button className="text-white text-2xl mr-4">
          <span>&larr;</span>
        </button>
        <h1 className="text-2xl font-bold">Create Task</h1>
      </div>

      {/* Form */}
      <form className="w-full max-w-4xl grid grid-cols-2 gap-6">
        {/* Task Title */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="taskTitle" className="block text-sm font-medium mb-2">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Make a UI design"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="date" className="block text-sm font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Assign To */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="assignTo" className="block text-sm font-medium mb-2">
            Assign To
          </label>
          <input
            type="text"
            id="assignTo"
            placeholder="Employee name"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Design, Dev, etc..."
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Detailed description of task (Max 500 words)"
            rows="4"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default CreateTask
