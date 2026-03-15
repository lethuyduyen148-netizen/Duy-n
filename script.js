function addComment(){
let text=document.getElementById("commentText").value;

if(text!=""){
let p=document.createElement("p");
p.innerText=text;

document.getElementById("comments").appendChild(p);

document.getElementById("commentText").value="";
}
}
