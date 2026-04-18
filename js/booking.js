import { app } from "./firebase-config.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore(app);

window.saveBooking = async function () {
  const user = localStorage.getItem("user");
  const pickup = localStorage.getItem("pickup");
  const drop = localStorage.getItem("drop");
  const fare = localStorage.getItem("fare");

  try {
    await addDoc(collection(db, "bookings"), {
      user,
      pickup,
      drop,
      fare,
      time: new Date()
    });

    alert("Booking saved successfully!");
  } catch (error) {
    alert(error.message);
  }
};