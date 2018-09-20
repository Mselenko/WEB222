// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    var oFruits=document.querySelector("#Fruits");
    var oList =document.querySelector("#list");
    //var myList="<ul>";
    //var myFruits ="<ol>";
    oFruits.innerHTML = "<ol>";
   for (var i=0; i<fruits.length; i++){
       oFruits.innerHTML += "<b><li>";
       oFruits.innerHTML +=  fruits[i];
       //oFruits.innerHTML += "</li></b>";
   }
   oFruits.innerHTML += "</ol>";
}
   /*for(var i=0; i < directory.length; i++){
    myList +="<b><li>" + directory[i].name + "</li></b>";
    if (directory[i].type == "directory"){
    for (var a = 0; a < directory[i].files.length; a++){
        myList += "<b><ul><li>" + directory[i].files[a].name + "</li></ul><b>";
    }
}
}
myList += "</ul>";
myFruits += "</ol>";
oList.innerHTML = myList;
oFruits.innerHTML = myFruits;
}*/

