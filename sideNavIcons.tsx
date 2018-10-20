import * as React from 'react';
import todoList from './TodoList';

class SideNavIcons extends React.Component<{makeListActive:(e:any)=> void},{}> {
  
    public render() {
    return (
        todoList.map((list) =>
        <li id={list.getId()} key={list.getId()} onClick={this.props.makeListActive}>
        <i className={list.getIconClass()}/>
          <span className='nav-values'>  {list.getName()}
        </span>
        </li>
     )
    );
  }
}
export default SideNavIcons;