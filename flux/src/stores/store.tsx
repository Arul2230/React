import dispatcher from "../Dispatcher";

import {EventEmitter} from "events";

import * as Actions from "../actions/action";
import List from '../components/List';

const todoLists:List[] = [];

const myDayList:List = new List('myDaylist','fa fa-sun-o','My Day',[]);
const importantList:List = new List('importantlist','fa fa-star-o','Important',[]);
const plannedList:List = new List('plannedlist','fa fa-calendar','Planned',[]);
const taskList:List = new List('tasklist','fa fa-home','Tasks',[]);

todoLists.push(myDayList);
todoLists.push(importantList);
todoLists.push(plannedList);
todoLists.push(taskList);

class Store extends EventEmitter{

    constructor() {
        super();
    }
    public handleActions(action:any) {
        switch (action.type) {
            case Actions.LIST_ACTIONS.ADD_LIST: {
                todoLists.push(action.value);
                this.emit("listadded");
                break;
            }
        }
    }
    public getList():List[]{
        return todoLists;
    }
}

const store = new Store();
console.log('asddsasdad');
dispatcher.register(store.handleActions.bind(store));
export default store;
