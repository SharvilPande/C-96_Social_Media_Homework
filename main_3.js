//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCGbBrH17txWa7VQKQAzFPKtTuvSdK9aAg",
    authDomain: "kwitter-app-homework.firebaseapp.com",
    databaseURL: "https://kwitter-app-homework-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-homework",
    storageBucket: "kwitter-app-homework.appspot.com",
    messagingSenderId: "1019848816019",
    appId: "1:1019848816019:web:4dcb2b7ef05def36c72466"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room name");

  function send() {
      
     text = document.getElementById("input_text").value;

     firebase.database().ref(text).push({
        like: 0 ,
        msg: text , 
        name: username  
     });

     document.getElementById("input_text").innerHTML="";
  }

  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;



 } });  }); }
getData();

function logout() {

    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    localStorage.removeItem("room name");
    window.location = "index.html";
}
