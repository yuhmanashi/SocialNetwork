import React from "react";
import { Link } from "react-router-dom";

class MenuBar extends React.Component {
    constructor(props){
        super(props);
        this.handleImage = this.handleImage.bind(this);
    }
    
    handleImage(user){
        if (!user.imageUrl) {
            return <i className="fa-solid fa-circle-user fa-xl"></i>
        } else {
            return <img className="profile-image"src={user.imageUrl} />;
        }
    }

    render(){
        const { user } = this.props;
        if (!user) return null;
        return(
            <div className="menu-items">
                <div className="user">
                    <Link to={`/profile/${this.props.currentUserId}`}>
                        <div className="links">
                            {this.handleImage(user)}
                            <div className='name'>
                                {user.first_name} {user.last_name}
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <div className="aboutme">
                    <img className='slogo' src="../../../assets/s-logo.png" />
                    <div className="title">About Me</div>
                </div> */}
                <div className="github">
                    <a href="https://github.com/yuhmanashi/SocialNetwork/" target="_blank">
                        <img className='glogo' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/github-logo.png?raw=true" />
                        <div className="title">Github</div>
                    </a>
                </div>
                <div className='linkedin'>
                    <a href="https://linkedin.com/in/yaoxu03" target="_blank">
                        <img className='lilogo' src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/linkedin-logo.png?raw=true"/>
                        <div className="title">LinkedIn</div>
                    </a>
                </div>
                <div className='angellist'>
                    <a href="https://angel.co/u/yao-xu-3" target="_blank">
                        <img className="" src="https://github.com/yuhmanashi/SocialNetwork/blob/main/app/assets/images/angellist-logo.png?raw=true" />
                        <div className="title">AngelList</div>
                    </a>
                </div>
                {/* <div className="aboutme">
                    <a className="me" href="https://github.com/yuhmanashi/SocialNetwork/" target="_blank">
                        <i className="fa-solid fa-circle-user fa-xl"></i>
                        <div className="title">About Me</div>
                    </a>
                </div> */}
            </div>
        )
    }
};

export default MenuBar;