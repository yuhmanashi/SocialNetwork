import React from "react";

class MenuBar extends React.Component {    
    render(){
        const { user } = this.props;
        if (!user) return null;
        return(
            <div className="menu-items">
                <div className="user-icon">
                    <div className='userprofile-placeholder'>
                        <i className="fa-solid fa-circle-user fa-xl"></i>
                    </div>
                    <div className='name'>
                        {user.first_name} {user.last_name}
                    </div>
                </div>
                {/* <div className="aboutme">
                    <img className='slogo' src="../../../assets/s-logo.png" />
                    <div className="title">About Me</div>
                </div> */}
                <div className="github">
                    <a href="https://github.com/yuhmanashi/SocialNetwork/">
                        <img className='glogo' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/github-logo.png?raw=true" />
                    </a>
                    <div className="title">Github</div>
                </div>
                <div className='linkedin'>
                    <a href="https://linkedin.com/in/yaoxu03">
                        <img className='lilogo' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/linkedin-logo.png?raw=true"/>
                    </a>
                    <div className="title">LinkedIn</div>
                </div>
            </div>
        )
    }
};

export default MenuBar;