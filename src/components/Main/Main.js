import React from 'react';
import './main.scss';
import uuid from 'uuid';
import Input from '../Input/Input';
import List from '../List/List';

class ToDoMain extends React.Component {
    constructor() {
        super();
        this.state = { id: uuid(), tasks: [], task: '', editTask: false };
    }

    changeHandler = e => {
        this.setState({ task: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.setState({ 
            id: uuid(), 
            tasks: [...this.state.tasks, { id: this.state.id, subject: this.state.task }], 
            task: '', 
            editTask: false });
    };

    refreshHandler = () => {
        this.setState({ tasks: [] });
    };

    removeHandler = id => {
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
    };

    editHandler = id => {
        this.setState({ 
            tasks: this.state.tasks.filter(task => task.id !== id), 
            task: this.state.tasks.find(task => task.id === id).subject, id: id, editTask: true 
        });
    };

    render() {
        return (
            <div className='todomain'>
                <div className='task'>
                    <h2 className='task-heading'>
                        To Do Input
                    </h2>
                    <Input
                        task={this.state.task}
                        changeHandler={this.changeHandler} 
                        submitHandler={this.submitHandler}
                        editTask={this.state.editTask}
                    />
                    <List
                        tasks={this.state.tasks}
                        refreshHandler={this.refreshHandler}
                        removeHandler={this.removeHandler}
                        editHandler={this.editHandler}
                    />
                </div>
            </div>
        );
    }
}

export default ToDoMain;