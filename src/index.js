import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends React.Component {
  render() {
    let user = {
      name: "Luis Martinez",
      hobbies: [
        'soccer',
        'web development'
      ]
    }
    return (
      <div>
        <Header/>
        <Home
          name={"LCM"}
          age={27}
          user={user}
        />
      </div>
    );
  };
};

render(
  <App/>,
  document.getElementById('app')
);
