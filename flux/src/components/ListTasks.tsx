import * as React from 'react';
import List from './List';
import Task from './Task';

class ListTasks extends React.Component<{list:List, makeTaskActive:(e:any)=> void,selectTask:(e:any)=>void,makeTaskImportant:(e:any)=>void},{}> {
  
    public render() {
    return (
        this.props.list.getTasks().map((task:Task) =>
        <div className="task box-shadow" key={task.getId()} id={task.getId()} onClick={this.props.makeTaskActive}>
          <i className={"pointer task-select "+(task.getCompleted()?'fa fa-check-circle':'fa fa-circle-o')} onClick={this.props.selectTask}/>
          <span className="tasks-value">{task.getContent()}</span>
          <i className={"float-r pointer task-important "+(task.getImportant()?'fa fa-star':'fa fa-star-o')} onClick={this.props.makeTaskImportant}/>
        </div>
        )
    )
  }
}
export default ListTasks;