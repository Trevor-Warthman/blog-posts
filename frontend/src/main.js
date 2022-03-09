import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWvDsaIFyTRyw7jdl3Cu38bsFtg0m9wjU",
  authDomain: "blog-posts-54942.firebaseapp.com",
  projectId: "blog-posts-54942",
  storageBucket: "blog-posts-54942.appspot.com",
  messagingSenderId: "1077907260413",
  appId: "1:1077907260413:web:a888bd89a3417016344f94",
  measurementId: "G-ZZCK0SRXKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createApp(App).mount('#app')
