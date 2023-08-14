//alert("loading");
function addNewWEField()
{
    //console.log("Adding new Field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("my-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewEQField()
{
    let newNode2=document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("eqField");
    newNode2.classList.add("my-2");
    newNode2.setAttribute("rows",3);
    newNode2.setAttribute("placeholder","Enter here");

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode2,eqAddButtonOb);
}

function generateCV()
{
   // console.log("generating");
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");        // Long Method
   nameT1.innerHTML=nameField;

   //Shortcut
   document.getElementById("nameT2").innerHTML=nameField;

   let contactField=document.getElementById("contactField").value;
   document.getElementById("contactT").innerHTML=contactField;

   //let addressField=document.getElementById("addressField").value;
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("igT").innerHTML=document.getElementById("igField").value;
   document.getElementById("lT").innerHTML=document.getElementById("liField").value;

   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   let wes=document.getElementsByClassName("weField");
   let str="";
   for(let e of wes)
   {
    str=str + `<li> ${e.value}</li>` ;
   }
   document.getElementById("weT").innerHTML=str;


   let eqs=document.getElementsByClassName("eqField");
   let s="";
   for(let e of eqs)
   {
    s=s + `<li> ${e.value}</li>` ;
   }
   document.getElementById("aqT").innerHTML=s;

   //Set Image
   let file=document.getElementById("imgField").files[0];
   console.log(file);
   let reader = new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);
   //Set the image to template
   reader.onloadend=function(){
    document.getElementById("imgT").src=reader.result; 
   }

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
}

function printCV()
{
    window.print();
}