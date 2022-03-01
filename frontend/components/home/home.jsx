import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

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
// )