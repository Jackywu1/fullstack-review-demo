import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

import Test1 from './test1.jsx';
import Test2 from './test2.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      body: '',
    }
  }

  componentDidMount() {
    axios.get('/test')
      // .then((data) => {
      //   console.log(data);
      //   return data;
      // })
      .then(({ data }) => this.setState({
        name: data[0].asker_name,
        email: data[0].asker_email,
        body: data[0].question_body,
      }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log('current state:', this.state);
    return (
      <>
        <Test1
          name={this.state.name}
          email={this.state.email}
        />
        <Test2
          body={this.state.body}
        />
      </>
    );
  }
}

export default App;
