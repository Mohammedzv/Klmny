const db = firebase.firestore();

const username =
localStorage.getItem("username") || "مستخدم";

function sendMsg(){

const input =
document.getElementById("msg");

if(input.value.trim() == "") return;

db.collection("messages").add({

user: username,
text: input.value,
time: Date.now()

});

input.value = "";

}

db.collection("messages")
.orderBy("time")
.onSnapshot(snapshot=>{

const messages =
document.getElementById("messages");

messages.innerHTML = "";

snapshot.forEach(doc=>{

const data = doc.data();

messages.innerHTML += `

<div class="message">

<div class="user">
${data.user}
</div>

${data.text}

</div>

`;

});

messages.scrollTop =
messages.scrollHeight;

});

function toggleMode(){

document.body.classList.toggle("light");

}