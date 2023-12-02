
var priorities_high = [];
var priorities_medium = [];
var priorities_low = []; 
function form1() {
    document.getElementById("fom").style.display = 'block';
}

function task_func(task, val) {
    document.getElementById("fom").style.display = 'block';
    alert("Welcome to Form function");
    var t = document.getElementById(task).value;
    var v = document.getElementById(val).value;
    alert(t + " task ");
    alert(v + " priority ");

    if (v === "high") {
        
        priorities_high.push(t);

    }

    else if (v == "medium") {
                
        priorities_medium.push(t);

        
    }

    else {
        
        priorities_low.push(t);

        
    }

    
  
        
    // for (var j = 0; j <= priorities_high.length - 1; j++) {
    //     document.getElementById(`num${j}`).innerHTML = j;
    //     document.getElementById(`t${j}`).innerHTML = priorities_high[j];
    //     document.getElementById(`pri${j}`).innerHTML = "high";
    // }

    // for (var k = 0; k <= priorities_medium.length - 1; k++) {
    //     document.getElementById(`num${k}`).innerHTML = k;
    //     document.getElementById(`t${k}`).innerHTML = priorities_medium[k];
    //     document.getElementById(`pri${k}`).innerHTML = "medium";
    // }

    // for (var l = 0; l <= priorities_low.length - 1; l++) {
    //     document.getElementById(`num${l + 2}`).innerHTML = l+2;
    //     document.getElementById(`t${l+2}`).innerHTML = priorities_low[l];
    //     document.getElementById(`pri${l+2}`).innerHTML = "low";
    // }
    
    
    }





    
    



// function remove(n){

//     alert("welcome to Remove  Form")
//     for (var i = 0; i <= tasks.length - 1; i++) {

//         document.getElementById(`num${i}`).innerHTML = "";
//         document.getElementById(`t${i}`).innerHTML = "";
//         document.getElementById(`pri${i}`).innerHTML = "";
//         document.getElementById(`check${i}`).innerHTML = "";
//     }
//     tasks.splice(n, 1)
//     priorities.splice(n, 1)
    

//     for (var i = 0; i <= tasks.length - 1; i++) {
//         document.getElementById(`num${i}`).innerHTML = i;
//         document.getElementById(`t${i}`).innerHTML = tasks[i];
//         document.getElementById(`pri${i}`).innerHTML = priorities[i];
    
//     }
// }
    

// function edit_form(i) {

//     alert("welcome to Edit  Form")
//     document.getElementById("edit_fom").style.display = 'block';
     
//     document.getElementById('id0').value = i;
//     document.getElementById('edt0').value = tasks[i];
//     document.getElementById('prior').value = priorities[i];;



// }

// function update(j, k, l) {
//     alert("update")   
//     alert(j)
//     alert(k)
//     alert(l)

    
//     document.getElementById(`t${j}`).innerHTML = k
//     document.getElementById(`pri${j}`).innerHTML = l
    
// }