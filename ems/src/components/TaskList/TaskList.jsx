import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';


const TaskList = ({ data }) => {
    console.log(JSON.stringify(data, null, 2));
    

    return (
        <div className='custom-scroll flex flex-col sm:flex-row items-center gap-5 lg:gap-10 overflow-x-auto max-w-full w-full h-auto p-5 bg-[#f3f4f6] rounded-xl'>
        {data.tasks.map((task, index) => {
            if(task.active) {
                return <AcceptTask key={index} data={task} />;
            }
            if(task.newTask) {
                return <NewTask key={index} data={task} />;
            }
            if(task.completed) {
                return <CompleteTask key={index} data={task} />;
            }
            if(task.failed) {
                return <FailedTask key={index} data={task} />;
            }
        })}
        </div>
    );
};

export default TaskList;
