
import { useState } from 'react';
import './App.css'
import Logout from './Components/Logout';
import Login from './Components/Login';
import User from './Components/User';
import Message from './Components/Message';
import ShowDetails from './Components/ShowDetails';





function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState({name : 'Juwel',age : 35});
  // const [message,setMessage] = useState(['Hello','Hi']);
  // const [ShowDetails,setShowDetails]=useState(false);
  // const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* Simple ternary */}
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      
      {/* Ternary with JSX elements */}
      {isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(false)}/>
      ) : (
        <Logout onLogout={() => setIsLoggedIn(true)}/>
        // <User user={()=>{setUser("Kalif",33)}}/>,
        // <Message messages={()=>setMessage(['What a message Here man !!'])}/>,
        // <ShowDetails ShowDetails={()=>setShowDetails(false)}/>

      )}
    </div>
  );
}

export default App
