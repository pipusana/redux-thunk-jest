import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile }  from './action/fetchgithub';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.gitProfile()
  }

  render() {
    return (
      <div className="App">
        <h1> {this.props.profile.name} </h1>
        <img  src={this.props.profile.image} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  const urlGithub = 'https://api.github.com/users/pipusana';
  return {
    gitProfile: () => dispatch(fetchProfile(urlGithub))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
