import React from 'react';
import { Link } from 'react-router';


export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <h2>Admin</h2>
        <Link to="/home">Home</Link>
        <Link to="/admin/pages">Pages</Link>
        {this.props.children}
      </div>
    );
  }
}