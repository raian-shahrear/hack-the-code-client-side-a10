import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWMXPBFlcYqxMAEOQaQETF3vTELjrNRzI",
  authDomain: "hack-the-code-c69c1.firebaseapp.com",
  projectId: "hack-the-code-c69c1",
  storageBucket: "hack-the-code-c69c1.appspot.com",
  messagingSenderId: "586092731412",
  appId: "1:586092731412:web:4fa6e40ffa71c467511b01"
};

const app = initializeApp(firebaseConfig);

export default app;