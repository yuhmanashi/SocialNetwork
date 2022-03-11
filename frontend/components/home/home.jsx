import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../posts/post_index_container';
import UserContainer from '../user/user_container';

class Home extends React.Component {
<<<<<<< HEAD
    constructor(props){
        super(props);
    }

=======
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault();
        this.props.logOut();
    }
=======
    constructor(props){
        super(props);
    }

>>>>>>> branch2
    render(){
        const { logOut } = this.props;
        
        return(
            <div className="home-page">
                <h1>Home</h1>
                <p>Welcome</p>
                <div className="logout">
                    <button onClick={() => logOut}>Log Out</button>
                </div>
            </div>
        )
    }
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> branch2

    render(){
        if (!this.props) return null;
        const {currentUser} = this.props;
        return(
            <div className='homepage'>
                <UserContainer />
                <NavBarContainer />
                <div className='page'>
                    <div className="menu">
                        <div className="menu-items">
                            <div className="user-icon">
                                <div className='userprofile-placeholder'>
                                    <i className="fa-solid fa-circle-user fa-xl"></i>
                                </div>
                                <div className='name'>
                                    {currentUser.first_name} {currentUser.last_name}
                                </div>
                            </div>
                            {/* <div className="aboutme">
                                <img className='slogo' src="../../../assets/s-logo.png" />
                                <div className="title">About Me</div>
                            </div> */}
                            <div className="github">
                                <a href="https://github.com/yuhmanashi/SocialNetwork/">
                                    <img className='glogo' src="../../../assets/github-logo.png" />
                                </a>
                                <div className="title">Github</div>
                            </div>
                            <div className='linkedin'>
                                <a href="https://linkedin.com/in/yaoxu03">
                                    <img className='lilogo' src="../../../assets/linkedin-logo.png"/>
                                </a>
                                <div className="title">LinkedIn</div>
                            </div>
                        </div>
                    </div>
                    <div className="page-main">
                        <div className='content'>
                            <PostIndexContainer page="home"/>
                        </div>
                        <div className="etc">
                            <p>Sponsored</p>
                            <hr className="hr-top"/>
                            <div className='game-ad'>
                                <a href="https://yuhmanashi.github.io/Defend_the_Realm/">
                                    <img className='game' src="../../../assets/ad.png"/>
                                </a>
                            </div>
                            <h3>Defend The Realms</h3>
                            <div>
                                Defend the realm from 
                                hordes of enemies in a 
                                classic tower defense game.
                            </div>
                            <hr className="hr-bottom"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default Home;
=======
>>>>>>> branch2
export default Home;

// export default () => (
//     <div className='homepage'>
//         <h1>Home</h1>
//         <p>Welcome</p>
//         <div className="navbar">
//             <header className="nav-bar">
//                 <div>
//                     <button onClick={logOut}>Log Out</button>
//                 </div>
//             </header>
//         </div>
//     </div>
<<<<<<< HEAD
// )
=======
// )
>>>>>>> main
>>>>>>> branch2
