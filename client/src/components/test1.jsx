import React from 'react';
import ReactDOM from 'react-dom';

import propTypes from 'prop-types';

class Test1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'default_name',
      email: 'default_email',
    }
  }

  render() {
    return (
      <div>
        name: {this.props.name}
        email: {this.props.email}
      </div>
    );
  }
}

Test1.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
};

export default Test1;
