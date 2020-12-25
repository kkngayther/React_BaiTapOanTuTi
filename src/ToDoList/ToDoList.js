import React, { Component } from 'react';
import { Container } from './ComponentsToDoList/Container';
import { Dropdown } from './ComponentsToDoList/Dropdown';
import {Heading1, Heading2, Heading3, Heading4} from './ComponentsToDoList/Heading'
import {TextField} from './ComponentsToDoList/TextField'
import {Button} from './ComponentsToDoList/Button'
import {Table, Tr, Td, Th, Thead, Tbody} from './ComponentsToDoList/Table'

import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme';
import { ToDoListDefaultTheme } from '../Themes/ToDoListDefaultTheme';
import {arrayTheme} from '../Themes/ThemeManager'

import {connect} from 'react-redux';
import { addTask, changeTheme, doneTask, editTask, removeTask, updateTask } from '../redux/actions/ToDoListAction';
import Axios from 'axios'

class ToDoList extends Component {
    state = {
        taskName: '',
        disabled: true,
        taskList: []
    }
    getTaskList = () => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        });
        promise.then((result) => {
            console.log(result.data);
            this.setState({
                taskList: result.data
            })
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }

    addTask =() => {
        console.log(this.state.taskName);
        if (this.state.taskName === ''){
            alert('task name is required !!!');
            return
        }

        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: {taskName: this.state.taskName}
        });

        promise.then((result) => {
            console.log(result.data);
            this.getTaskList();
        })

        promise.catch((err) => {
            console.log(err.response.data);
            alert(err.response.data)
        })
    }

    removeTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        });

        promise.then((result) => {
            console.log(result.data);
            this.getTaskList();
        });

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }
    doneTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
        });

        promise.then((result) => {
            console.log(result.data);
            this.getTaskList();
        });

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }
    rejectTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        });
        promise.then((result) => {
            console.log(result.data);
            this.getTaskList();
        });

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }
    renderTaskToDo = () => {
        return this.state.taskList.filter(task => !task.status).map(
            (task, index) => {
                return <Tr>
                <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button disabled className="ml-1" onClick = {() => {
                        this.props.dispatch(editTask(task))
                    }}><i className="fa fa-edit"></i></Button>
                    <Button className="ml-1" onClick={() => {
                        this.doneTask(task.taskName)
                    }}><i className="fa fa-check"></i></Button>
                    <Button className="ml-1" onClick={() => {
                        this.removeTask(task.taskName);
                    }}><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
            }
        )
    }
    renderTaskCompleted = () => {
        return this.state.taskList.filter(task => task.status).map(
            (task, index) => {
                return <Tr>
                <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button className="ml-1" onClick={() => {
                        this.removeTask(task.taskName);
                    }}><i className="fa fa-trash"></i></Button>
                    <Button className="ml-1" onClick={() => {
                        this.rejectTask(task.taskName);
                    }}><i className="fa fa-undo"></i></Button>
                </Th>
            </Tr>
            }
        )
    }
    renderTheme = () => {
        return arrayTheme.map((theme, index) => {
            return <option value={theme.id}>{theme.name}</option>
        })
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            taskName: newProps.taskEdit.taskName
        })
    }

    componentDidMount(){
        this.getTaskList();
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container className="w-50 text-left">
                    <Dropdown onChange={(e) => {
                        let {value} = e.target;
                        console.log(value)

                        this.props.dispatch(changeTheme(value));
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField value={this.state.taskName} name="taskName" label="Task Name" className="w-50" onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        }, () => {
                            console.log(this.state)
                        })
                    }}></TextField>
                    <Button className="ml-2" onClick={this.addTask}><i className="fa fa-plus mr-1"></i>Add Task</Button>
                    <Button disabled className="ml-2" onClick={() => {
                        let {taskName} = this.state;

                        let newTask = {
                            id: String(this.props.taskEdit.id),
                            taskName: taskName,
                            isDone: false
                        }
                        this.setState({
                            taskName: ''
                        }, () => {
                            this.props.dispatch(updateTask(newTask))
                        })
                 
                        console.log(this.state.taskName)
 
                    }}><i className="fa fa-upload mr-1"></i>Update Task</Button>
                    <hr/>
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <hr className="text-white"/>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.ToDoListReducer.themeChange,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}

export default connect(mapStateToProps)(ToDoList);