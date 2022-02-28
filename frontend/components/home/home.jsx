import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId);
    }
    
    render(){
        const { first_name } = this.props;
        
        return(
            <div className="home-page">
                <h1>Home</h1>
                <p>Welcome, {first_name}</p>
            </div>
        )
    }
}

export default Home;