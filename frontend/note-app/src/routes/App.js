import React from 'react';
import '../components-css/App.css';
import MainNavBar from '../components/MainNavBar';
import UserNotes from '../components/UserNotes';

class App extends React.Component{
  logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  render = () => {
    let token = localStorage.getItem('token')
    return (
      <div className="app-main">
        {
          token 
          ?
          <div className='app-content'>
            <MainNavBar class="nav-bar" logout={this.logout}></MainNavBar>
            <UserNotes></UserNotes>
          </div>
          :
          ''
        }
      </div>
    );
  }

}

export default App;
