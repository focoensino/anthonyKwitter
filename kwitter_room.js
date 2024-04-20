  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHleCRXUPD-kAT1mG2MW_NTZNwuNCtIIQ",
    authDomain: "converse-mendigo.firebaseapp.com",
    databaseURL: "https://converse-mendigo-default-rtdb.firebaseio.com",
    projectId: "converse-mendigo",
    storageBucket: "converse-mendigo.appspot.com",
    messagingSenderId: "764689821128",
    appId: "1:764689821128:web:58633f1d15b85e2ca324fd"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user-name").innerHTML = "olá, você não é bem vindo(a) " + user_name + " !";

function addRoom(){

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "Adicionado nome de sala"
  });
  
  localStorage.setItem("room_name", room_name);

  window.location = "Kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData()

function redirectToRoomName(name){

  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout(){

  console.log("foi");
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}