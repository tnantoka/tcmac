// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  state = {
    token: '',
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id) {
      this.props.moveToDashboard();
    }
  }

  handleClickSignIn = () => {
    this.props.saveToken(this.state.token);
    this.props.fetchUser();
  }

  handleChangeToken = (e) => {
    this.setState({ token: e.target.value });
  }

  render() {
    return (
      <div className={styles['form-signin']}>
        <form className="form-signin">
          <h2 className="form-signin-heading text-center">tcmac</h2>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Access Token"
            value={this.state.token}
            onChange={this.handleChangeToken}
            required
            autoFocus
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.handleClickSignIn}
            disabled={this.state.token.length < 1}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
