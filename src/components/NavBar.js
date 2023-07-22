import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleSignInImg from '../assets/google-sign-in.png';

const NavBar = () => {
    const auth = getAuth();
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const signOutUser = () => {
        signOut(auth);
    };

    return (
        <>
            <nav className='nav-bar'>
                <h1>React Chat</h1>
                {user ? (
                    <button onClick={signOutUser} className="sign-out" type="button">
                        Sign Out
                    </button>
                ) : (
                    <button className='sign-in'>
                        <img onClick={googleSignIn}
                            src={GoogleSignInImg}
                            alt='sign in with Google'
                            type="button"
                        />
                    </button>
                )}

            </nav>
        </>
    );
};

export default NavBar;