// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

var num1,num2,num3;
var arrayNotes = [];

var amount = Number(prompt("Enter amount  which is divisible by 10"));

if (isNaN(amount)) {
    
    alert("Please enter a number which is divisible by 10.");
    
}
else if (amount %10==0) {
    
    findNotes(amount);
    alert(arrayNotes[0]+arrayNotes[1]+arrayNotes[2]+arrayNotes[3]+arrayNotes[4]+arrayNotes[5]);
}
else
{
            
alert("you entered a number that is not divisible by 10")
}

    

            

function findNotes(amount) {
     
    num1 = Math.floor(amount / 100);
    num2 = Math.floor((amount % 100) / 50);
    num3 = ((amount % 100 % 50) / 10);
    
    arrayNotes.push(num1," hundred Notes ",num2," fifty Notes ",num3," ten Notes");
    
    
    if (arrayNotes[0] == 0)
    {
        arrayNotes[0] = "";
        arrayNotes[1] = "";
    }
    
    if (arrayNotes[2] == 0)
    {
        arrayNotes[2] = "";
        arrayNotes[3] = "";
    }

    if (arrayNotes[4] == 0)
    {
        arrayNotes[4] = "";
        arrayNotes[5] = "";
    }
}


