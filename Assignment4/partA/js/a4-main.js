var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

 function loadTableWithFilters(){
 document.querySelector("#main-table-body").innerHTML = "";
for(var i = 0; i < petData.length; i++){
if ((filterType == petData[i].type || filterType == "") && (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)) {
    var row = document.createElement("tr");
    var desc = document.createElement("td");
    var desc2 = document.createElement("td");
    var img = document.createElement("img");
    var h4 = document.createElement("h4");
    var name = document.createTextNode(petData[i].name);
    var par = document.createElement("p");
    var span = document.createElement("span");
    var age = document.createTextNode("Age: " + petData[i].age + " years old.");

    img.src = petData[i].image.src;
    img.alt = petData[i].image.alt;
    img.height = petData[i].image.height;
    img.width = petData[i].image.width;
    desc.appendChild(img);
    row.appendChild(desc);
   
   h4.appendChild(name);
   desc2.appendChild(h4);  
  
   par.innerHTML = petData[i].description;
   desc2.appendChild(par);

   span.appendChild(age);
   desc2.appendChild(span);
   row.appendChild(desc2);

  document.querySelector("#main-table-body").appendChild(row);
  }
 }
 filterType="";
 filterAgeMin=0;
 filterAgeMax = Number.MAX_VALUE;
}


function filterDog(){
    filterType ="dog";
    loadTableWithFilters();
}

function filterCat(){
    filterType ="cat";
    loadTableWithFilters();
}

function filterBird(){
    filterType="bird";
    loadTableWithFilters();
}

function filter_zero_1(){
    filterAgeMin = 0;
    filterAgeMax =1;
    loadTableWithFilters();
}

function filter_1_3(){
    filterAgeMin = 1;
    filterAgeMax =3;
    loadTableWithFilters();
}

function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax =Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets(){
    filterType="";
    filterAgeMin=0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

window.onload =loadTableWithFilters; 