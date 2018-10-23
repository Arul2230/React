import * as React from 'react';

import { connect } from 'react-redux';

import List from './List'; 
import MainContent from './MainContent';
import SideNav from './SideNav';
import Task from './Task';
import TaskContent from './TaskContent';
import TopNav from './TopNav';

class FullContent extends React.Component<any, {activeList:List,activeTask:Task,showTaskContent:boolean,todoList:List[]}>{

    constructor(props: any) {
        super(props)

        this.state = {
            activeList: this.props.todoList[3],
            activeTask: new Task(),
            showTaskContent:false,
            todoList: this.props.todoList
        };
    }

    public getListById(id:string): List {
        let list: List = new List('', '', '', []);
        for (const listItem of this.state.todoList) {
          if (listItem.getId() === id) {
            list = listItem;
          };
        }
        return list;
      };
    
      public getTaskById(id:string): Task {
        let task:Task =new Task();
        for (const taskItem of this.getListById(this.state.activeList.getId()).getTasks()) {
          if (taskItem !== undefined && taskItem.getId() === id) {
            task = taskItem;
          };
        }
        return task;
      };
    
    public makeListActive = (e:any) => {
        const list:List = this.getListById(e.target.id);
        this.setState({
            activeList: list
        });
    };
 
    public makeTaskActive =(e:any)=>{
        const task:Task = this.getTaskById(e.target.id);
        this.setState({
            activeTask:task
       });
    }

    public selectTask= (e:any)=>{
        const task:Task = this.getTaskById(e.target.parentNode.id);
        task.setCompleted(!task.getCompleted());
        this.setState({
            activeTask:task
        });
        e.stopPropagation();
    }

    public makeTaskImportant = (e:any)=>{
        const task:Task = this.getTaskById(e.target.parentNode.id);
        task.setImportant(!task.getImportant());
        this.setState({
            activeTask:task
        });
        e.stopPropagation();
    }

    public addTaskToDay = ()=>{
        const task:Task = this.state.activeTask;
        task.setAddedToMyDate(!task.getAddedToMyDate());
        const addedToDay = this.state.todoList[0].getTasks();
        if(addedToDay.length === 0) {
           addedToDay.push(task);
        } else {
           for(let index=0;index<addedToDay.length;index++){
           if (addedToDay[index].getId() === task.getId()) {
             addedToDay.splice(index,1)
           }else{
             addedToDay.push(task);
           }
           }
        }
        this.setState({
            activeTask:task
        });
    }

    public render() {
        return (
            <div className='full-content'>
                <TopNav />
                <div className="contents">
                    <SideNav todoList={this.state.todoList} makeListActive={this.makeListActive}/>
                    <MainContent  activeTask={this.state.activeTask} activeList={this.state.activeList} makeTaskActive={this.makeTaskActive} makeTaskImportant={this.makeTaskImportant} selectTask={this.selectTask}/>
                    <TaskContent  activeTask={this.state.activeTask} addTaskToDay={this.addTaskToDay} showTaskContent = {this.state.showTaskContent} makeTaskImportant={this.makeTaskImportant} selectTask={this.selectTask}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps=(state:any) => ({
    todoList: state.todoList
})

 
export default connect(mapStateToProps)(FullContent);
