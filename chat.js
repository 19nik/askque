function talk() {
    var know = {
        "who are you":"Hello, Nitish here",
        "how are you":"I am good here",
        "what can i do for you":"just keep talking",
        "good bye":"goodbye",

    };

var user=document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML=user+"<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML=know[user]+"<br>";

}else{
    document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";

}
    
}