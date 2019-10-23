import React from 'react';
import './task.scss';

function Task(props) {
    return (
        <div className='task'>
            <div className='task-list'>
                <div>
                    <h3 className='task-list-heading'>{props.subject}</h3>
                </div>
                <div className='task-list-icons'>
                    <span className='task-list-icons-edit' onClick={props.editHandler}>
                        <i className='fas fa-edit' />
                    </span>
                    <span className='task-list-icons-trash' onClick={props.removeHandler}>
                        <i className='fas fa-trash-alt' />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Task;