import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  IconDashboard,
  IconTicket,
  IconCredit,
  GlobalStyles,
  Card,
  LayoutWrapper,
} from '../src';
import { UserRole } from '../src/types/entities';

const App = () => {
  const [term, setTerm] = React.useState('');
  return (
    <div>
      <GlobalStyles />
      <LayoutWrapper
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
        searchTerm={term}
        onChange={(e): void => setTerm(e.target.value)}
        user={{
          name: 'Suellen Marques',
          avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
          email: 'suellen@femsa.com.br',
          role: UserRole.ADMIN,
        }}
        notifications={[
          {
            id: '1',
            title: 'Novo ticket',
            description: 'Novo ticket criado',
            icon: <IconTicket />,
            url: 'https://femsa.com.br',
          },
          {
            id: '2',
            title: 'Ticket Atualizado',
            description: 'Novo lote de canetas',
            icon: <IconTicket />,
            url: 'https://femsa.com.br',
          },
        ]}
        messages={[
          {
            id: '1',
            title: 'Novo ticket',
            description: 'Novo ticket criado',
            url: 'https://femsa.com.br',
          },
        ]}
      >
        <Card>
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
          <h4>Hello World</h4>
          <h5>Hello World</h5>
          <h6>Hello World</h6>
          <p>Hello World</p>
          <small>Hello World</small>
        </Card>
      </LayoutWrapper>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
