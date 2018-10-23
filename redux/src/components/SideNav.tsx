import * as React from 'react';

import { connect } from 'react-redux';

import * as Actions from "../actions/action";
import List from './List';
import SideNavIcons from './sideNavIcons';


class SideNav extends React.Component<any,{close:boolean,listinputvalue:string,showlist:boolean,todoList:List[]}> {

  constructor(props:any) {
    super(props);
  
    this.state = {
      close: false,
      listinputvalue: '',
      showlist: false,
      todoList: this.props.todoList
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
      let id = (this.props.todoList.length);
      this.props.todoList.push();
      this.props.actions(new List("List" + ++id, 'fa fa-list-ul', this.state.listinputvalue, []));
      this.getListInput();
      this.setState({
        listinputvalue: "",
        showlist: false
      });
      e.stopPropagation();
    }
  } 



  public render() {
    console.log(this.props.todoList)
    return (
      <nav className={'side-nav-bar ' + (this.state.close ? "small-side-nav" : '')}>
        <ul>
          <li className="menu">
            <button onClick={this.toggle} className='no-outline'>
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
          </li>
          <SideNavIcons todoList={this.state.todoList} makeListActive={this.props.makeListActive}/>
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

const mapStateToProps=(state:any) => ({
  todoList: state.todoList
})

function mapDispatchToProps(dispatch:any){
  return {actions: (value:List) => dispatch(Actions.addList(value))}
}
export default connect(mapStateToProps,mapDispatchToProps) (SideNav);