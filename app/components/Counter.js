// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-between">
          <a className="navbar-brand" href="#">tcmac</a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
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
              <div className={styles.backButton} data-tid="backButton">
                <Link to="/">
                  <i className="fa fa-arrow-left fa-3x" />
                </Link>
              </div>
              <div className={`counter ${styles.counter}`} data-tid="counter">
                {counter}
              </div>
              <div className={styles.btnGroup}>
                <button className={styles.btn} onClick={increment} data-tclassName="btn">
                  <i className="fa fa-plus" />
                </button>
                <button className={styles.btn} onClick={decrement} data-tclassName="btn">
                  <i className="fa fa-minus" />
                </button>
                <button className={styles.btn} onClick={incrementIfOdd} data-tclassName="btn">odd</button>
                <button className={styles.btn} onClick={() => incrementAsync()} data-tclassName="btn">async</button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
