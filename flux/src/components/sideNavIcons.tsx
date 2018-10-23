import * as React from 'react';

import List from './List';

class SideNavIcons extends React.Component<{makeListActive:(e:any)=> void,todoList:List[]},{}> {
  
    public render() {
    return (
        this.props.todoList.map((list) =>
        <li id={list.getId()} key={list.getId()} onClick={this.props.makeListActive}>
        <i className={list.getIconClass()}/>
          <span className='nav-values'>  {list.getName()}
        </span>
        <span className='float-r'>{list.getTasks().length<1?'':list.getTasks().length}</span>
        </li>
     )
    );
  }
}
export default SideNavIcons;