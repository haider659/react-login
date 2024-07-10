import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

const App = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);

    const switchToSignup = () => {
        setIsLoginPage(false);
    };

    const switchToLogin = () => {
        setIsLoginPage(true);
    };

    return (
        <div>
            {isLoginPage ? (
                <Login onSwitchToSignup={switchToSignup} />
            ) : (
                <Signup onSwitchToLogin={switchToLogin} />
            )}
        </div>
    );
};

export default App;
