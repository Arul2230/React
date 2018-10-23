import * as React from 'react';
import './style.css';

import FullContent from './components/FullContent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <FullContent />
      </div>
    );
  }
}

export default App;
