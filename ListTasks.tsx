import * as React from 'react';
import List from './List';
import Task from './Task';

class ListTasks extends React.Component<{list:List, makeTaskActive:(e:any)=> void,selectTask:(e:any)=>void},{}> {
  
    public render() {
    return (
        this.props.list.getTasks().map((task:Task) =>
        <div className="task box-shadow" key={task.getId()} id={task.getId()} onClick={this.props.makeTaskActive}>
          <i className="fa fa-circle-o pointer task-select" onClick={this.props.selectTask}/>
          <span className="tasks-value">{task.getContent()}</span>
          <i className="fa fa-star-o float-r pointer task-important"/>
        </div>
        )
    )
  }
}
export default ListTasks;