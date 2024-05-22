import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBu6AdNovblJcWfP7Ixb2QGKogGt7JHP-I',
  authDomain: 'tutorial-b40bc.firebaseapp.com',
  projectId: 'tutorial-b40bc',
  storageBucket: 'tutorial-b40bc.appspot.com',
  messagingSenderId: '68115717354',
  appId: '1:68115717354:web:9a477fe8e76f6cadb2cb93',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
