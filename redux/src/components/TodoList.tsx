import List from './List';

const todoLists:List[] = [];

const myDayList:List = new List('myDaylist','fa fa-sun-o','My Day',[]);
const importantList:List = new List('importantlist','fa fa-star-o','Important',[]);
const plannedList:List = new List('plannedlist','fa fa-calendar','Planned',[]);
const taskList:List = new List('tasklist','fa fa-home','Tasks',[]);

todoLists.push(myDayList);
todoLists.push(importantList);
todoLists.push(plannedList);
todoLists.push(taskList);


export default todoLists;