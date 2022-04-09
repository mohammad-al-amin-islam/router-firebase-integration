import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form>

                <input type="email" name="" id="" placeholder='Enter Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;