import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ChuckNorris from './ChuckNorris';
import './App.css'
function App() {
    const [token, setToken] = useState(null);

    const handleLogout = () => {
        setToken(null); 
    };

    return (
        <div className="App">
            {token ? (
                <>
                <p>Logged in with token: {token}</p>
                    <ChuckNorris token={token} />
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <LoginForm setToken={setToken} />
            )}
        </div>
    );
}

export default App;