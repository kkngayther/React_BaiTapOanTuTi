import {ADD_TASK, CHANGE_THEME, DONE_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_TASK} from '../types/ToDoListType';

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        newTask
    }
}

export const changeTheme = (themeID) => {
    return {
        type: CHANGE_THEME,
        themeID
    }
}

export const removeTask = (task) => {
    return {
        type: REMOVE_TASK,
        task
    }
}

export const doneTask = (task) => ({
    type: DONE_TASK,
    task
})

export const editTask = (task) => ({
    type: EDIT_TASK,
    task
})

export const updateTask = (task) => ({
    type: UPDATE_TASK,
    task
})