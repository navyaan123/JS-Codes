// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

var num1,num2,num3;
var array = [];

var amount = Number(prompt("Enter amount  which is divisible by 10"));



if (!isNaN(amount)) {
    
        if (amount %10==0) {
    
            array=findNotes(amount);         
            alert(array[0]+" hundred Notes  "+array[1]+" fifty Notes  "+array[2]+" ten Notes ")
            
        }
        else {
            
            alert("you entered a number that is not divisible by 10")
        }
}
else {
        alert("Please enter a number which is divisible by 10.");
    }

            

function findNotes(amount) {
     
    num1 = Math.floor(amount / 100);
    num2 = Math.floor((amount % 100) / 50);
    num3 = ((amount % 100 % 50) / 10);

    array.push(num1, num2, num3)
    return array;
 }   
    
