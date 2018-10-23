import { AnyAction } from 'redux';
import * as Action from '../actions/action'

import List from '../components/List';

const initialState: any = {
    todoList: []
}

const myDayList:List = new List('myDaylist','fa fa-sun-o','My Day',[]);
const importantList:List = new List('importantlist','fa fa-star-o','Important',[]);
const plannedList:List = new List('plannedlist','fa fa-calendar','Planned',[]);
const taskList:List = new List('tasklist','fa fa-home','Tasks',[]);
export default function reducer(state: any, action: AnyAction) {
    if (state === undefined) {
        return state = initialState;
    }
    switch (action.type) {

        case Action.LIST_ACTIONS.ADD_LIST:
            return {
                ...state,
                todoList: initialState.todoList.push(action.list)
            };
        case Action.LIST_ACTIONS.RENDER_LIST:

            initialState.todoList.push(myDayList),
            initialState.todoList.push(importantList),
            initialState.todoList.push(plannedList),
            initialState.todoList.push(taskList)
            return {
                ...state,
                todoList: initialState.todoList
            };
        default:
           return state
    }
}