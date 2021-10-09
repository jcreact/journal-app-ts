import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './conf';

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
