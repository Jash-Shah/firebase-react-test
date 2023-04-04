import React, { useState } from 'react'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';

export const Auth = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try{
      await createUserWithEmailAndPassword(auth, mail, password);
    } catch (err) {
      console.error(err);
    }
  };
  
  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  
  const logout = async () => {
    try{
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="auth">
      <input onChange={(e) => setMail(e.target.value)} placeholder='Email...' type="email" />
      <input onChange={(e) => setPassword(e.target.value)} placeholder='Password...' type="password" />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={logout}>Logout</button>
      <h4>{auth.currentUser? "Logged In": "Not Logged In"}</h4>
    </div>
  )
}
