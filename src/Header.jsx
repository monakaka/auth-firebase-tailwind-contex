import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProviders, { AuthContext } from './providers/AuthProviders';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {

            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Daisy UI</a>
                <Link className="btn btn-ghost normal-case text-xl" to={'./'}>Home</Link>
                {/* if i want to hide any route if the user is not login  */}
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to={'./order'}>Order</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to={'./login'}>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'./register'}>Register</Link>
                {
                    user ? <><span>{user.email}</span> <button className='btn btn-primary' onClick={handleLogOut}>Sign Out</button></> : <Link to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;