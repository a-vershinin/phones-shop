import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';

class Home extends PureComponent {
  render() {
    const {match} = this.props;
    return (
      <PageTemplate>
        <h1>Home page</h1>
        <Link to='/'>Back to layout</Link>
        <p>{match}</p>
      </PageTemplate>
    );
  }
}

export default Home;
