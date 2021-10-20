import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sidebar } from '../src/components/';

const App = () => {
  return (
    <div>
      ue
      <Sidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
