import React from 'react';
import './list.scss';
import Task from '../Task/Task';

function List(props) {
    return (
        <div className='list'>
            <div>
                <h2>To Do List</h2>
                {props.tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            subject={task.subject}
                            removeHandler={() => props.removeHandler(task.id)}
                            editHandler={() => props.editHandler(task.id)}
                        />
                    )
                })}
                <button
                    onClick={props.refreshHandler}
                    className='btn-refresh'
                >
                    REFRESH
                </button>
            </div>
        </div>
    );
}

export default List;