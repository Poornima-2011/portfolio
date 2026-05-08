const text = "Software Engineer";
let i = 0;

function typeEffect(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect,120);
}
}

window.onload = typeEffect;

function sendMessage(){

fetch("http://localhost:8082/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:document.getElementById("name").value,
email:document.getElementById("email").value,
message:document.getElementById("message").value
})
})
.then(response => response.json())
.then(data => {
alert("Message Sent Successfully!");
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";
})
.catch(error => {
alert("Error sending message");
});
}