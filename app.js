function login(){

const username =
document.getElementById("username").value;

localStorage.setItem("username", username);

window.location.href = "chat.html";

const db = firebase.firestore();

function sendMsg(){
const msg = document.getElementById("msg").value;
const user = localStorage.getItem("username");

db.collection("messages").add({
text: msg,
user: user,
time: Date.now()
});

document.getElementById("msg").value = "";
}

db.collection("messages").orderBy("time")
.onSnapshot(snapshot => {

document.getElementById("messages").innerHTML = "";

snapshot.forEach(doc => {
let data = doc.data();

document.getElementById("messages").innerHTML += `
<div class="msg">
<b>${data.user}</b><br>
${data.text}
</div>
`;
});

});
}