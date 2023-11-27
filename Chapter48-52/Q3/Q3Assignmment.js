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

    alert(nameArray + "\n" + emailArray + "\n" + passwordArray);

    for (i = 0; i<=nameArray.length-1; i++) {
        alert(i);
        document.getElementById(`no${i}`).innerText = i
        document.getElementById(`n${i}`).innerText = nameArray[i];
        document.getElementById(`e${i}`).innerText = emailArray[i];
        document.getElementById(`a${i}`).innerText = passwordArray[i];
    }
}

function onDelete(no) {
    for (i = 0; i<=nameArray.length-1; i++) {
        
        document.getElementById(`no${i}`).innerText = ""
        document.getElementById(`n${i}`).innerText = "";
        document.getElementById(`e${i}`).innerText = "";
        document.getElementById(`a${i}`).innerText = "";
            
    }

    nameArray.splice(no,1);    
    emailArray.splice(no,1);
    passwordArray.splice(no,1)
    

    for (i = 0; i<=nameArray.length-1; i++) {
        
        document.getElementById(`no${i}`).innerText = i
        document.getElementById(`n${i}`).innerText = nameArray[i];
        document.getElementById(`e${i}`).innerText = emailArray[i]
        document.getElementById(`a${i}`).innerText = passwordArray[i];
        document.getElementById(`d${i}`).innerText = "delete";

    }

}
    
function onEdit(i) {
    alert(i);
    document.getElementById('name1').value = nameArray[i];
    document.getElementById('email1').value = emailArray[i];
    document.getElementById('password1').value = passwordArray[i];
    // update(i);

}
// function update(i,name1,email1,password1) {
//         // alert(i,name1,email1,password1);
//         var namespl = document.getElementById(name1).value;
//         var emspl = document.getElementById(email1).value;
//          var passpl =document.getElementById(password1).value
//          alert(namespl, emspl, passpl);
//         document.getElementById(`n${i}`).innerHTML = nameArray.splice(i,1,namespl);
//         document.getElementById(`e${i}`).innerHTML = emailArray.splice(i,1,emspl);
//         document.getElementById(`a${i}`).innerHTML = passwordArray.splice(i,1,passpl);
// }

