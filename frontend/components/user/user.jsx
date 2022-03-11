import React from 'react'

class User extends React.Component{
    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        return ""
    }
}

export default User;