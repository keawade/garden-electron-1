import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>This is only a test.</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('application')
);
