import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Home page! {<span>{user && user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;