import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserCard from './components/Cards/Card.js';
import FollowersList from './components/FollowersList.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: 'pdadlani',
      userData: [],
      followersData: []
    }
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log('response', response)
        return response.json();
      })
      .then(fetchedUser => this.setState({ userData: fetchedUser }))
      // .then(fetchedUser => console.log('fetchedUser', fetchedUser))
      .catch(err => {
        console.log('There is an error in App.js fetchUser', err);
      })
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(response => {
        console.log('fetchFollowers response', response)
        return response.json();
      })
      .then(fetchedFollowers => this.setState({ followersData: fetchedFollowers }))
      // .then(fetchedFollowers => console.log('fetchedFollowers', fetchedFollowers))
      .catch(err => {
        console.log('There is an error in App.js fetchFollowers', err);
      })
  }

  render () {
    console.log('render in app.js, userData', this.state.userData)
    console.log('render in app.js, followersData', this.state.followersData)
    return (
      <div>
        {/* <a class="fab fa-github-square fa-lg "></a> */}
        <h1 className='page-header'>GitHub User</h1>
        <UserCard userData={this.state.userData} />
        <FollowersList userData={this.state.userData} followersData={this.state.followersData} />
      </div>
    )
  }
}

export default App;
