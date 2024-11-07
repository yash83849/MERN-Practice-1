
'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 0;

    // const [count, setCount] = useState(0);

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {

            if (!e.target.value) {
                alert('Please enter atak to add');
                return;
            }
            console.log(e.target.value);


            const newTask = { text: e.target.value, completed: false };

            setTaskList([newTask, ...taskList, newTask,]);

            e.target.value = '';
        }

    }
    return (
        <div className='bg-gray-300 h-screen pt-10'>

            <div className='container mx-auto rounded-lg bg-white border'>

                <div className='p-4' border-b-2>
                    {/*<h1 className='text-3xl'>{count}</h1>*/}
                    {/*  <button onClick={() => { setCount(count+1); console.log(count);}}>add count</button>*/}
                    <input
                        onKeyDown={addNewTask}
                        placeholder='Enter a task to add in your todolist' type="text"
                        className='px-3 py-2 rounded w-full bg-gray-200'
                    />
                </div>
                <div className='p-4'>

                    {

                        taskList.map((task, index) => {
                            return <div key={index} className='rounded mb-4 p-4 border shadow'>
                                <p className='text-xl'>{task.text}</p>
                                <div className='mt-5 flex gap-5'>
                                    <button className='bg-red-500 text-white rounded-full px-3 py-1'>Delete</button>
                                    <button className='bg-blue-500 text-white rounded-full px-3 py-1'>Complete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;