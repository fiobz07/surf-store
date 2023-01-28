
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyApsLyR-DNd-zmAruROfc4duVqAqzeXGfI",
  authDomain: "surf-store-6b247.firebaseapp.com",
  projectId: "surf-store-6b247",
  storageBucket: "surf-store-6b247.appspot.com",
  messagingSenderId: "751427700842",
  appId: "1:751427700842:web:c489a010e186462aa9a213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app)
