import * as React from 'react';

import List from './List';
import SideNavIcons from './sideNavIcons';
import todoLists from './TodoList';

class SideNav extends React.Component<{makeListActive:(e:any)=> void},{close:boolean,listinputvalue:string,showlist:boolean,todoList:any}> {

  constructor(props:any) {
    super(props);
  
    this.state = {
      close: false,
      listinputvalue: '',
      showlist: false,
      todoList: todoLists,

    };
  }

  public toggle = () => {
    this.setState({
      close: !this.state.close,
      showlist: false
    })
  };

  public getListInput = () => {
    this.setState({
      close: false,
      showlist: true
    });
  };

  public saveListName = (e: any) => {
    this.setState({ listinputvalue: e.target.value });
  };

  public saveList = (e:any) => {
    if(this.state.listinputvalue !== ''){
      let id = (this.state.todoList.length);
      this.state.todoList.push(new List("List" + ++id, 'fa fa-list-ul', this.state.listinputvalue, []));
      this.getListInput();
      this.setState({
        listinputvalue: "",
        showlist: false
      });
      e.stopPropagation();
    }
  } 



  public render() {
    return (
      <nav className={'side-nav-bar ' + (this.state.close ? "small-side-nav" : '')}>
        <ul>
          <li className="menu">
            <button onClick={this.toggle} className='no-outline'>
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
          </li>
          <SideNavIcons makeListActive={this.props.makeListActive}/>
          <li className="new-list" onClick={this.getListInput}>
            <i className="fa fa-plus " aria-hidden="true" onClick={this.saveList} />
            <input type="text" maxLength={25} placeholder="List Name"  value={this.state.listinputvalue}
              className={'list-input ' + (this.state.showlist ? '' : 'display-none')} onChange={this.saveListName} />
            <span className={'new-list-value nav-values ' + (this.state.showlist ? "display-none" : '')}>New List</span>
          </li>
        </ul>
      </nav>
    );
  }
}
export default SideNav;