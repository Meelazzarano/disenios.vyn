import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnubK_B7bCqlsEv9rYVPVW2P8OZEt5S-I",
  authDomain: "disenios-vyn.firebaseapp.com",
  projectId: "disenios-vyn",
  storageBucket: "disenios-vyn.appspot.com",
  messagingSenderId: "462167275539",
  appId: "1:462167275539:web:e0ce0b5ba1de99b7d5e7e6"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


