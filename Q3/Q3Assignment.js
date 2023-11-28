var nameArray = [];
var emailArray = [];
var passwordArray = [];


function get_data(nam, em, pass) {
    var tName = document.getElementById(nam).value;
    var tEmail = document.getElementById(em).value;
    var tPassword = document.getElementById(pass).value;

   
    nameArray.push(tName);
    emailArray.push(tEmail);
    passwordArray.push(tPassword);

     document.getElementById("tab").style.display='block'    

    
for (i = 0; i <= nameArray.length - 1; i++) {

    document.getElementById(`no${i}`).innerText = i
    document.getElementById(`n${i}`).innerText = nameArray[i];
    document.getElementById(`e${i}`).innerText = emailArray[i];
    document.getElementById(`a${i}`).innerText = passwordArray[i];
    document.getElementById(`d${i}`).innerText = "delete";
    document.getElementById(`ed${i}`).innerText = "edit";
    }
 
    
}

    

function onDelete(no) {

    
    for (i = 0; i<=nameArray.length-1; i++) {
        document.getElementById(`no${i}`).innerText = ""
        document.getElementById(`n${i}`).innerText = "";
        document.getElementById(`e${i}`).innerText = "";
        document.getElementById(`a${i}`).innerText = "";
        document.getElementById(`d${i}`).innerText = "";
        document.getElementById(`ed${i}`).innerText = "";
    }
    nameArray.splice(no, 1);    
    emailArray.splice(no,1);
    passwordArray.splice(no,1)
    

    for (i = 0; i<=nameArray.length-1; i++) {
        document.getElementById(`no${i}`).innerText = i
        document.getElementById(`n${i}`).innerText = nameArray[i];
        document.getElementById(`e${i}`).innerText = emailArray[i]
        document.getElementById(`a${i}`).innerText = passwordArray[i];
        document.getElementById(`d${i}`).innerText = "delete";
        document.getElementById(`ed${i}`).innerText = "edit";
    }

}
    
function onEdit(i) {
     
    document.getElementById("fom").style.display = 'block'
    document.getElementById("tab").style.display = 'none'
    document.getElementById("f1").style.display='none'
    
    document.getElementById('i1').value = i;
    document.getElementById('name1').value = nameArray[i];
    document.getElementById('email1').value = emailArray[i];
    document.getElementById('password1').value = passwordArray[i];
    
}


function update(j,k,l,m) {

      
    
    document.getElementById(`n${j}`).innerHTML=""
    document.getElementById(`e${j}`).innerHTML = ""
    document.getElementById(`a${j}`).innerHTML=""
    
    document.getElementById(`n${j}`).innerHTML = k
    document.getElementById(`e${j}`).innerHTML = l
    document.getElementById(`a${j}`).innerHTML = m

    document.getElementById("fom").style.display = 'none'
    document.getElementById("tab").style.display = 'block'
    
 }

