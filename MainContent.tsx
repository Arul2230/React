import * as React from 'react';

import List from './List';
import ListTasks from './ListTasks';
import Task from './Task';

class MainContent extends React.Component<{ activeTask:Task,activeList: List , makeTaskActive:(e:any)=> void,selectTask:(e:any)=>void}, { newList: boolean, taskValue: string }> {

  constructor(props: any) {
    super(props)
    this.state = {
      newList: false,
      taskValue: ''
    };
  }
  public addNewTask = (): void => {
    this.setState({
      newList: true
    });
  }

  public setTaskName = (e: any): void => {
    this.setState({
      taskValue: e.target.value
    });
  }

  public addTask = (): void => {
    if (this.state.taskValue !== '') {
      const taskName: string = this.state.taskValue;
      const task: Task = new Task();
      const list: List = this.props.activeList;
      task.setContent(taskName);
      task.setId('Task' + ++list.getTasks().length);
      console.log(list);
      list.getTasks().push(task);
      this.setState({
        newList: false,
        taskValue: ''
      });
    }
  }

  public render() {
    return (
      <div className="page-content box-shadow-right">
        <div className="list-content">
          <span className="list-name">{this.props.activeList.getName()}</span><i className="fa fa-ellipsis-h" aria-hidden="true" />
          <div className="sort">
            <i className="fa fa-trash-o pointer display-none list-delete" />
            <i className="fa fa-exchange fa-rotate-90" aria-hidden="true" />
            <span>Sort</span>
          </div>
        </div>
        <div className="task-list">
          <div className="new-tasks" id={this.props.activeList.getId()}>
            <ListTasks list={this.props.activeList} makeTaskActive={this.props.makeTaskActive} selectTask={this.props.selectTask}/>
          </div>
          <div className={'add-new-task box-shadow ' + (this.state.newList ? 'display-none' : '')} onClick={this.addNewTask}>
            <i className="fa fa-plus pointer" aria-hidden="true" />
            <span> Add a Task </span>
          </div>
          <div className={'add-task box-shadow ' + (this.state.newList ? '' : 'display-none')}>
            <a> <i className="fa fa-circle-o color" />
              <input type="text" className="task-value" value={this.state.taskValue} placeholder="Add a task" onChange={this.setTaskName} />
              <button className="starred change-color" onClick={this.addTask}>ADD</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default MainContent;
