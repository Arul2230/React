import * as React from 'react';

class TopNav extends React.Component {
  public render() {
    return (
        <div className="top-header">
          <span>To-Do</span>
          <div className="search-bar">
            <button type="submit" className="no-outline">
              <i className="fa fa-search "/>
            </button>
            <input type="text" className="no-outline" placeholder="Search"/>
          </div>
        </div>
    );
  }
}
export default TopNav;
