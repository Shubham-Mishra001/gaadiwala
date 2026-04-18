import { app } from "./firebase-config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Signup
window.signup = async function () {
  const firstname = document.getElementById("firstname").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!firstname || !mobile || !email || !password) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data
    await setDoc(doc(db, "users", user.uid), {
      firstname,
      mobile,
      email
    });

    localStorage.setItem("user", firstname);

    alert("Signup successful!");
  } catch (err) {
    alert(err.message);
  }
};

// ✅ Login
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user data
    const docSnap = await getDoc(doc(db, "users", user.uid));

    if (docSnap.exists()) {
      const data = docSnap.data();
      localStorage.setItem("user", data.firstname);
    }

    alert("Login successful!");
    window.location.href = "index.html";

  } catch (err) {
    alert(err.message);
  }
};