import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import MenuBarContainer from '../nav_bar/menu_bar_container';
import PostIndexContainer from '../posts/post_index_container';
import UserContainer from '../user/user_container';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault();
        this.props.logOut();
    }

    render(){
        if (!this.props) return null;
        const { currentUser } = this.props;
        return(
            <div className='homepage'>
                <UserContainer />
                <NavBarContainer />
                <div className='page'>
                    <div className="menu">
                        <MenuBarContainer user={currentUser}/>
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
                                    <img className='game' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/ad.png?raw=true"/>
                                </a>
                            </div>
                            <h3>Defend The Realms</h3>
                            <div>
                                Defend the realm from 
                                hordes of enemies in a 
                                classic tower defense game.
                            </div>
                            <hr className="hr-bottom"/>
                            <div className='map-ad'>
                                <a href="https://mapstatestopost.herokuapp.com/#/">
                                    <img className='map' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/ad2.png?raw=true"/>
                                </a>
                            </div>
                            <h3>MapStatesToPosts</h3>
                            <div>
                                Keep track of the states
                                that you have visited!
                                See where other's have been. 
                                Be inspired to travel.
                            </div>
                            <hr className="hr-bottom"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
