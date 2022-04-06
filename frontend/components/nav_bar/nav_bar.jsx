import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  logout(e) {
    e.preventDefault();
    this.props.logOut();
  }

  render(){
    const { userId } = this.props
    // const user = users.userId

    return (
      <div className="nav-bar">
        {/* <UserContainer /> */}
        <div className ='right'>
          <img className='logo' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/s-logo.png?raw=true"  />
          {/* <br/>
          <input type="text" placeholder='Search'/> */}
        </div>
        <div className="center">
          <div className="home-icon">
            <Link to='/home/'>
              <i className="fa-solid fa-house fa-xl"></i>
            </Link>
          </div>
          <div className="friends-icon">
            <Link to='/friends/'>
              <i className="fa-solid fa-user-group fa-xl"></i>
            </Link>
          </div>
          <div className="profile-icon">
            <Link to={`/profile/${userId}`}>
              <i className="fa-solid fa-user fa-xl"></i>
            </Link>
          </div>
        </div>
        <div className="left"> 
          {/* <div onClick={this.handleProfile} className="profile-icon">
            <Link to={`/profile/${userId}`}>
              <i className="fa-solid fa-circle-user fa-xl"></i>
            </Link>
          </div> */}
          <div onClick={this.logout} className="logout">
              <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
          </div>
        </div>
      </div>
    );
  };
}

export default NavBar;
  
