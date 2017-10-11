// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.css';
import type { userStateType } from '../reducers/user';

class Dashboard extends Component {
  props: {
    user: userStateType,
  };

  componentDidMount() {
    if (!this.props.user.id) {
      this.props.moveToRoot();
    }
  }

  render() {
    const { user } = this.props;
    if (!user.id) {
      return <div />
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-between">
          <a className="navbar-brand" href="#">tcmac</a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">{user.nickname}</a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
              <ul className={`nav nav-pills flex-column`}>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </nav>

            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>チーム名</th>
                  </tr>
                </thead>
                <tbody>
                  {user.teams.map(team =>
                    <tr key={team.id}>
                      <td>{team.id}</td>
                      <td>{team.name}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
