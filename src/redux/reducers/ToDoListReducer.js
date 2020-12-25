import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import {ADD_TASK, CHANGE_THEME, DONE_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_TASK} from '../types/ToDoListType';
import {arrayTheme} from '../../Themes/ThemeManager'

const stateDefault = {
    themeChange: ToDoListDarkTheme,
    taskList: [
        {id: 1,taskName: 'Task 1', isDone: true},
        {id: 2,taskName: 'Task 2', isDone: false},
        {id: 3,taskName: 'Task 3', isDone: true},
        {id: 4,taskName: 'Task 4', isDone: false}
    ],
    taskEdit: {
        id: 1,taskName: 'Task 1', isDone: false
    }
}

export const ToDoListReducer = (state = stateDefault, action) => {
    switch(action.type){
        case ADD_TASK: {
            let taskListUpdate = [...state.taskList];
            if (action.newTask.taskName.trim() === ''){
                alert('Task name is required !!!');
                return {...state};
            }

            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1){
                alert('Task name has already exist !!!');
                return {...state};
            }
            taskListUpdate.push(action.newTask);
            state.taskList = taskListUpdate;
            return {...state};
        }
        case CHANGE_THEME: {
            console.log(action.themeID)
            let theme = arrayTheme.find(theme => theme.id == action.themeID);
            console.log(theme);
            if (theme){
                state.themeChange = {...theme.theme};
            }
            return {...state};
        }
        case REMOVE_TASK: {
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id === action.task.id);
            if (index !== -1){
                taskListUpdate.splice(index, 1);
            }
            state.taskList = taskListUpdate;
            return {...state};
        }
        case DONE_TASK:{
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id === action.task.id);
            if (index !== -1){
                action.task.isDone = true;
            }
            
            return {...state, taskList: taskListUpdate}
        }
        case EDIT_TASK: {
            return {...state, taskEdit: action.task}
        }
        case UPDATE_TASK: {
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id == action.task.id);
            if (index !== -1){
                taskListUpdate[index].taskName = action.task.taskName;
            }
            return {...state, taskList: taskListUpdate}
        }
    }
    return {...state};
}