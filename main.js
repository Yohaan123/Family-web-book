var reasonarray=["Sidharrth","Ruchi","Yohaan"];
var imagearray=["Father img.jpg","mom.jpg","me.jpg"];

var i=0;
function nextslide(){
    console.log(reasonarray[i]);
    document.getElementById("name").innerHTML=reasonarray[i];
    document.getElementById("familyalbum").src=imagearray[i];
    i++;
     if(i >= 3){
         i=0;
     }
}
