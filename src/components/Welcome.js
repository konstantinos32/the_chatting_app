import styled from 'styled-components';
import React from 'react';
import GoogleSignInImg from '../assets/google-sign-in.png' ;
import { auth } from '../api/firebaseConfig';   
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const Welcome = () => {

    const googleSignIn = () => { 
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    return (
        <>
            <main className='welcome'>
                <h2>Welcome to RealTime Chat made with React/firebase</h2>
                <p>Sign in with your Google acount ,  to use this React/Firebase app</p>
                <button className='sign-in'>
                    <img onClick={googleSignIn} 
                        src={GoogleSignInImg}
                        alt='Sign in with Google'
                        type="button"
                    >
                    </img>
                </button>
            </main>
        </>
    );
}

export default Welcome;