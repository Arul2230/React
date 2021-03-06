import * as React from 'react';

import Task from './Task';

class TaskContent extends React.Component<{ activeTask: Task,addTaskToDay:()=>void,showTaskContent:boolean,selectTask:(e:any)=>void,makeTaskImportant:(e:any)=>void},{}> {

  public render() {

    return (
        <div className={"task-content "+(this.props.activeTask.getId() === undefined?'display-none':'')}>
        <div className="task-name box-shadow-all" id={this.props.activeTask.getId()}>
          <i className={"task-select "+ (this.props.activeTask.getCompleted()?'fa fa-check-circle':"fa fa-circle-o ")} onClick={this.props.selectTask}/>
          <span>{this.props.activeTask.getContent()}</span>
          <i className={"float-r pointer task-important "+(this.props.activeTask.getImportant()?'fa fa-star':'fa fa-star-o')} onClick={this.props.makeTaskImportant}/>
          </div>
        <div className={"add-to-day box-shadow-all"+(this.props.activeTask.getAddedToMyDate()?' added-to-day':'')} onClick={this.props.addTaskToDay}>
          <i className="fa fa-sun-o" aria-hidden="true"/>
          <span>{(this.props.activeTask.getAddedToMyDate()?'Added To Day':'Add to Day')}</span>
        </div>
        <div className="task-options box-shadow-all">
          <div className="option box-shadow remind-me">
            <i className="fa fa-clock-o" aria-hidden="true"/>
            <span className="show-remind">{this.props.activeTask.getRemindDate()=== undefined ?'Remind-Date':this.props.activeTask.getRemindDate()}</span>
            <span className="input-add-remind display-none">
               <input type="date" className='remind-me-date-picker'/>
               </span>
           </div>
          <div className="option box-shadow due-date">
            <i className="fa fa-calendar" aria-hidden="true"/>
            <span className='show-due'>{this.props.activeTask.getDueDate()=== undefined ?'Add-Due-Date':this.props.activeTask.getDueDate()}</span>
            <span className="input-add-due display-none">
               <input type="date" className='due-date-picker'/>
            </span>
          </div>
          <div className="option box-shadow repeat">
            <i className="fa fa-repeat" aria-hidden="true"/>
            <span>Repeat</span>
          </div>
        </div>
        <textarea className="task-note" rows={8} cols={35} placeholder="Add a note" value={this.props.activeTask.getNote()}/>
           <div className="bottom-option border-top">
          <i className="fa fa-chevron-right pointer" aria-hidden="true"/>
          <span>Completed Today</span>
          <i className="fa fa-trash-o float-r pointer" aria-hidden="true"/>
        </div>
      </div>
    );
  }
}
export default TaskContent;