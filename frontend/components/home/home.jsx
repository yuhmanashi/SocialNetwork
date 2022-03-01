import React from 'react';

// class Home extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     componentDidMount() {
//         this.props.getUser(this.props.user.id);
//     }
    
//     render(){
//         const { first_name } = this.props;
        
//         return(
//             <div className="home-page">
//                 <h1>Home</h1>
//                 <p>Welcome, {first_name}</p>
//             </div>
//         )
//     }
// }

// class Home extends React.Component {
//     render(){
//         return(
//             <div className='homepage'>
//                 <h1>Home</h1>
//                 <p>Welcome</p>
//             </div>
//         )
//     }
// }

// export default Home;

export default () => (
    <div className='homepage'>
        <h1>Home</h1>
        <p>Welcome</p>
    </div>
)