//var numeInput = document.querySelector(".nume").value;
//var telefonInput = document.querySelector(".telefon").value;

var lista=[];
var idxEditare = -1;

function onlyDigits(text, event){
   var char = event.key;
 
   if(char>=0 && char<=9){
     return true;
   }
     
   event.preventDefault();
   
 }

 function draw(){
    var str="";
    for(var i=0;i<lista.length;i++){
      str+=`
     <tr>
        <td>${lista[i].numeInput}</td>              
        <td>${lista[i].telefonInput}</td>
      <td>
        <a href="#" class="edit" type="text" value="Edit" onclick="editeaza(${i});">Modifica</a>
        <a href="#" class="del" type="text" value="Del" onclick="sterge(${i});">Sterge</a>
		</td>
   </tr>
      `;
      
     
    }
    document.querySelector("table").innerHTML=str;
 }

 function sterge(contact){
   if(confirm(`Esti sigur ca vrei sa stergi inregistrarea ${lista[contact].numeInput} ?`)){
      lista.splice(contact,1);
      draw();
   }
}

function editeaza(contacte){
   //salvez indexul elementului din lista in variabila globala 
   //ca sa stiu daca trebuie sa adaug la sfarsit sau sa modific
   window.idxEditare = contacte;
      
   //preiau elementul din lista
   var obj = lista[contacte];
   
   //preiau referinta catre formular
   var form = document.querySelector("#formular");
   
   //populez formularul cu ce contine persoana mea
   form.querySelector(".nume").value = obj.numeInput;
   form.querySelector(".telefon").value = obj.telefonInput;
}

 function adauga(form, event){
    event.preventDefault();

    var obj = {
   };

   obj.numeInput = document.querySelector(".nume").value;
   obj.telefonInput = document.querySelector(".telefon").value;

   
   if(idxEditare===-1){
      //cand este idxEditare -1 atunci inseamna ca adaug
      lista.push(obj);
      
   }else{
      //cand este idxEditare diferit de -1 atunci inseamna ca editez pozitia idxEditare
      lista[idxEditare] = obj;
      //resetam idxEditare in -1 pentru ca am terminat cu editarea
      idxEditare = -1;
   }

   draw();
 }

 function createTHead(text, event) {
   event.preventDefault();
   
   var table = document.querySelector('.liste');
   var row = table.insertRow(0);

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);

   cell1.innerHTML = "<b>Nume</b>";
   cell2.innerHTML = "<b>Telefon<b>";
 }