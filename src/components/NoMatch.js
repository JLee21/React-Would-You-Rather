import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Alert, Button } from 'react-bootstrap';

class NoMatch extends React.Component {

  render() {
    const { location } = this.props
    return (
      <Grid>
        <Alert bsStyle="danger">
          <h4>Oh snap! {`The location ${location.pathname} doesn't exist`}</h4>
          <p>
            <Link to='/'>
              <Button>&larr; Go Back Home</Button>
            </Link>
          </p>
        </Alert>
      </Grid>
    );
  }
}

export default NoMatch
