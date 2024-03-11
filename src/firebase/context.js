
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHUaSK1lyKbLFearTLPGXe9YpgaIuUNZs",
  authDomain: "cafeteria-web-app.firebaseapp.com",
  projectId: "cafeteria-web-app",
  storageBucket: "cafeteria-web-app.appspot.com",
  messagingSenderId: "697370407057",
  appId: "1:697370407057:web:28152a710eb72d82184f30",
  measurementId: "G-DWSXQP2SC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);