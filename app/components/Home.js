// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles['form-signin']}>
        <form className="form-signin">
          <h2 className="form-signin-heading text-center">tcmac</h2>
          <input type="text" id="inputEmail" className="form-control form-control-lg" placeholder="Token" required autoFocus />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <Link to="/counter">to Counter</Link>
        </form>
      </div>
    );
  }
}
