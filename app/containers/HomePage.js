// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/Home';
import { fetchUser } from '../actions/user';

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  moveToDashboard: () => dispatch(push('/dashboard')),
  fetchUser: () => {
    const token = localStorage.token;
    if (token) {
      dispatch(fetchUser(token));
    }
  },
  saveToken: (token) => localStorage.token = token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
