import React from 'react';
import './input.scss';

function Input(props) {
    return (
        <div className='input'>
            <form onSubmit={props.submitHandler}>
                <input
                    type='text'
                    placeholder='add to do task'
                    value={props.task}
                    className='input-box'
                    onChange={props.changeHandler}
                />
                <div>
                    <button
                        type='submit'
                        disabled={props.task ? false : true}
                        className={
                            props.editTask
                                ? 'input-btn input-btn-edit'
                                : 'input-btn input-btn-add'
                        }
                    >
                        {props.editTask ? 'EDIT TASK' : 'ADD TASK'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Input;