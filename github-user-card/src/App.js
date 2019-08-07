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
      // added for search
      userQuery: '',
      userData: [],
      followersData: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount called');
    this.fetchUser();
    this.fetchFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate got called');
    if (prevState.user !== this.state.user) {
      this.fetchUser(this.state.user)
      this.fetchFollowers();
      console.log('componentDidUpdate inside')
    }
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log('response in fetchUser', response)
        return response.json();
      })
      .then(fetchedUser => {
        console.log('response in fetchedUser')
        return this.setState({ userData: fetchedUser })})
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
      .then(fetchedFollowers => {
        console.log('fetchedFollowers');
        return this.setState({ followersData: fetchedFollowers })})
      // .then(fetchedFollowers => console.log('fetchedFollowers', fetchedFollowers))
      .catch(err => {
        console.log('There is an error in App.js fetchFollowers', err);
      })
  }

  handleChange = event => {
    console.log('handleChange called')
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitUserQuery = event => {
    console.log('submitUserQUery called');
    event.preventDefault();
    this.setState({ user: this.state.userQuery});
    
    this.state.userQuery = '';
  }

  render () {
    console.log('render in app.js, userData', this.state.userData)
    console.log('render in app.js, followersData', this.state.followersData)
    return (
      <div>
        {/* <a class="fab fa-github-square fa-lg "></a> */}
        <h1 className='page-header'>GitHub User</h1>
        <form onSubmit={this.submitUserQuery}>
          <input 
            type='text'
            // changed for search
            value={this.state.userQuery}
            //changed for search
            name='userQuery'
            onChange={this.handleChange}
          />
          <button className='submit-search'>Submit</button>
        </form>
        <UserCard userData={this.state.userData} />
        <FollowersList userData={this.state.userData} followersData={this.state.followersData} />
      </div>
    )
  }
}

export default App;
