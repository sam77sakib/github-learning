/*var firstName=prompt("what is your first name?");
var lastName=prompt("what is your last name?");
var userName=prompt("what is your user name?");
var password=prompt("what is your passwod?");

if(password<99999){
	alert("to small password, give a bigger one!");
	password= prompt("what is your password again?");
}

userInformation=[
	{
		First_Name: firstName,
		Last_Name: lastName,
		User_Name: userName,
		Password: password
	}
];


var signInUserName=prompt("enter your username?");
var signInPassword=prompt("enter your password?");

newsFeed=[
	{
		username: "Nadim",
		status: "Hello! everyone!"
	},
	{
		username: "anju",
		status: "eid mubarak"
	}
]

function logIn(id, pass){
	if(pass===userInformation[0].Password && id===userInformation[0].User_Name){
		console.log(newsFeed);
	}else{
		console.log("you have entered wrong password!");
	}
}

logIn(signInUserName, signInPassword);

*/

//FACEBOOK APP//
/*userData=[];
for(var i=0; i<=1; i++){
	userData[i]={
		userId: prompt("what is your username?"),
		password: prompt("what is your password?")
	}
}

var userName= prompt("Enter your username?");
var securityKey= prompt("Enter is your password?");

function signIn(id, pass){
	for(var i=0; i<=userData.length; i++){
		if(id===userData[i].userId && 
			pass===userData[i].password){
			console.log("Yes! you are logged in");
		}else{
			console.log("wrong password!!!");
		}

	}
}

signIn(userName, securityKey);*/

//---Posting status--//
/*var input=document.getElementById("input");
var button=document.getElementById("button");
var section=document.querySelector("section");

function inputLength(){
	return input.value.length;
}

function createElement(){
	var div=document.createElement("div");
	div.appendChild(document.createTextNode(input.value));
	section.appendChild(div);
	input.value="";
}

function addDivAfterClick(){
	if(inputLength() > 0){
		createElement();
	}	
}
function addDivAfterKeypress(keyEvent){
	if(inputLength() > 0 && keyEvent.keyCode===13){
		createElement();
	}
}

button.addEventListener("click", addDivAfterClick);
input.addEventListener("keypress", addDivAfterKeypress);*/

var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}


function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	console.log(evt.target.parentNode)
	evt.target.parentNode.remove();
} 

//Chsnge in coment .
