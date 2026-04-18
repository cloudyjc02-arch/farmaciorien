// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA65eOAfzHpOuxgGA9765kjn-U3-f0KJU8",
  authDomain: "farmaciorien.firebaseapp.com",
  projectId: "farmaciorien",
  storageBucket: "farmaciorien.appspot.com",
  messagingSenderId: "1051714146552",
  appId: "1:1051714146552:web:b6ccda5711e41324e1ab0d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;