// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBIkNAykxqDLSuXZi9VBBBgShzGt6g7GI",
    authDomain: "practice-69c5a.firebaseapp.com",
    databaseURL: "https://practice-69c5a-default-rtdb.firebaseio.com",
    projectId: "practice-69c5a",
    storageBucket: "practice-69c5a.appspot.com",
    messagingSenderId: "378891193281",
    appId: "1:378891193281:web:d22fcf4f96e04904a3bd40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

function addroom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "addinguser"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "zwitter_page.html";

}



function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //End code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();
function redirectToRoomname(name){
    console.log(name)
    localStorage.setItem("roomname",name);
    window.location="zwitter_page.html";

}
