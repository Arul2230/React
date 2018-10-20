import * as React from 'react';

import List from './List'; 
import MainContent from './MainContent';
import SideNav from './SideNav';
import Task from './Task';
import TaskContent from './TaskContent';
import todoList from './TodoList';
import TopNav from './TopNav';

class FullContent extends React.Component<{}, {activeList:List,activeTask:Task,showTaskContent:boolean}>{

    constructor(props: any) {
        super(props)

        this.state = {
            activeList: todoList[3],
            activeTask: new Task(),
            showTaskContent:false
        };
    }
    public getListById(id:string): List {
        let list: List = new List('', '', '', []);
        for (const listItem of todoList) {
          if (listItem.getId() === id) {
            list = listItem;
          };
        }
        console.log(list);
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
        console.log(this.getTaskById(e.target.parentNode.id));
        const task:Task = this.getTaskById(e.target.parentNode.id);
        task.setCompleted(!task.getCompleted());
        this.setState({
            activeTask:task
        });
        e.stopPropagation();
    }

    public render() {
        return (
            <div className='full-content'>
                <TopNav />
                <div className="contents">
                    <SideNav makeListActive={this.makeListActive}/>
                    <MainContent  activeTask={this.state.activeTask} activeList={this.state.activeList} makeTaskActive={this.makeTaskActive} selectTask={this.selectTask}/>
                    <TaskContent  activeTask={this.state.activeTask} showTaskContent = {this.state.showTaskContent}/>
                </div>
            </div>
        );
    }
}

export default FullContent;
