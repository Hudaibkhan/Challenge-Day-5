// QUESTION 13
let transportation:string[]=['Bike','Revo','Civic'];
 for (let i=0; i<transportation.length; i++){
    console.log('I would like to own a '+ transportation[i]);
 }
 
// QUESTION 14
let guestList1:string[]=['Hamza','Haseeb','Absar'];
for(let i=0; i<guestList1.length; i++){
    console.log("Dear " + guestList1[i] + " You are ivited the dinner" )
}

// // QUESTION 15
let guestList:string[]=['Hamza','Haseeb','Absar'];
let cannotAttend:string='Hamza';
console.log(`${cannotAttend} can't attend the dinner`);
let newGuest:string='Osama';
guestList[guestList.indexOf(cannotAttend)]=newGuest;
for (let i=0; i<guestList.length; i++){
         console.log("Dear " + guestList[i] + " You are ivited the dinner." )
 }