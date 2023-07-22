// import { auth } from './api/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Welcome from '../src/components/Welcome.js';
import NavBar from '../src/components/NavBar.js';
import ChatBox from '../src/components/ChatBox.js';

import './App.css';
import { useState } from 'react';


function App() {
  const auth = getAuth();

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;