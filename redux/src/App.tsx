import * as React from 'react';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import './style.css';

import * as Action from './actions/action';
import FullContent from './components/FullContent';

class App extends React.Component<any,{}>{

  public componentWillMount(){
    this.props.actions();
  }

  public render() {
    return (
      <div className="App">
        <FullContent/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch:any){
  return {actions: () => dispatch(Action.renderList())}
}
export default connect(null, mapDispatchToProps) (App);