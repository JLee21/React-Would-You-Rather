import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';

class NoMatch extends React.Component {

  render() {
    const { location } = this.props
    return (
      <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
        <h4>Oh snap! You got an error!</h4>
        <p>
          <Button onClick={this.handleDismiss}>Go Back Home</Button>
        </p>
      </Alert>
    );
  }
}

export default NoMatch
