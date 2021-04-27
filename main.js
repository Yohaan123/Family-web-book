var reasonarray=["sidharrth","ruchi","Yohaan","bhagwati","shobha","vineet","aditi","dia","lavaneea"];
var imagearray=["Fatherimg.jpg","Father img.jpg","Father img.jpg","Father img.jpg","Father img.jpg",
"Father img.jpg","Father img.jpg","Father img.jpg","Father img.jpg"];

var i=0;
function nextslide(){
    document.getElementById("reasontext").innerHTML=reasonarray[i];
    document.getElementById("familyalbum").src=imagearray[i];
    i++;
}