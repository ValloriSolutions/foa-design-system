import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sidebar } from '../src/components/';
import {
  IconDashboard,
  IconTicket,
  IconCredit,
  IconCalendar,
  GlobalStyles,
} from '../src';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Sidebar
        menuItems={[
          {
            title: 'Página Inicial',
            path: '/',
            icon: <IconDashboard />,
            active: true,
          },
          {
            title: 'Tickets',
            path: '/',
            icon: <IconTicket />,
          },
          {
            title: 'Req. de Compra',
            path: '/',
            icon: <IconCredit />,
            dropdownItems: [
              {
                title: 'Sub Item 1',
                path: '/',
              },
              {
                title: 'Sub Item 2',
                path: '/',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
