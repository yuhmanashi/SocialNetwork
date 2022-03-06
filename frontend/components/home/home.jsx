import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../posts/post_index_container';

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
        return(
            <div className='homepage'>
                <NavBarContainer />
                <div className='page'>
                    <div className="menu">
                        <p>Menu goes here</p>
                    </div>
                    <div className='content'>
                        <PostIndexContainer />
                    </div>
                    <div className="etc">
                        <p>Ads and etc go here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;