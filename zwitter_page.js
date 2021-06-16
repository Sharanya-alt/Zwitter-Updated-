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
roomname = localStorage.getItem("roomname");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();
