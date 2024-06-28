const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyB1DL4h0VL5ZngcbpV_FEhXYdF6lXSOwrw",
    authDomain: "xlogicacademy-3477c.firebaseapp.com",
    databaseURL: "https://xlogicacademy-3477c-default-rtdb.firebaseio.com",
    projectId: "xlogicacademy-3477c",
    storageBucket: "xlogicacademy-3477c.appspot.com",
    messagingSenderId: "1084429180345",
    appId: "1:1084429180345:web:23e75d48d3f5e4a5f22a68"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, Course) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    Course: Course,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
