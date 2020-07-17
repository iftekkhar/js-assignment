/*
Feet To Mile Converter
*/
function feetToMile(feet) {

    if (Math.sign(feet) >= 0) {
        mile = (feet / 5280);
        return mile; 
     }
     else {
        return 'Please Enter a Valid Number';
     }
}
var result = feetToMile(5280) ;
console.log('Feet =', result);


/*
Wood Calculator
*/
function woodCalculator(numberOfTable = 0, numberOfChair = 0, numberOfbed = 0) {

    if (Math.sign(numberOfTable) >= 0 && Math.sign(numberOfChair) >= 0 && Math.sign(numberOfbed) >= 0) {
    //wood needed to manufecture = chair 1cf , table = 3cf, bed = 5cf
    tableWood = ( numberOfTable * 1 );
    chairWood = ( numberOfChair * 3 );
    bedWood = ( numberOfbed * 5 );
    
    // Total Wood
    totalWood = (tableWood + chairWood + bedWood);
        return totalWood;
    }
    else {
            return 'Please Enter a Valid Number';
         }
}

var totalWood = woodCalculator(4, -1, 78);
console.log('Total Wood = ', totalWood);


/*
Brick Calculator
*/
function brickCalculator(floor) {
    if (Math.sign(floor) > 0) {
        if (floor <= 10) {
            //For 1st 10 floor, per floor is 15ft high 
            totalHeight = (floor * 15)
        }
        if (10 < floor <= 20) {
            //For 1st 10 floor, per floor is 15ft high 
            //For later 10 floor, per floor is 12ft high 
            totalHeight = ((floor - 10) * 12 ) + 150;
        }
        if (floor > 20) {
            //For 1st 10 floor, per floor is 15ft high 
            //For later 10 floor, per floor is 12ft high 
            //Rest is 10 ft
            totalHeight = ((floor - 20) * 10 ) + 150 + 120;
        }
        // Total Calculated Brick
        calculatedBrick = (totalHeight * 1000);
        
        return calculatedBrick;
    }
    else {
        return 'Please Enter a Valid Number';
    }
}

var totalBrick = brickCalculator(35);
console.log('Total Brick = ', totalBrick);


/*
Smallest Name Finder
*/
function tinyFriend(myFriends) {
    var tinyName = myFriends[0];
for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] == 'string' && myFriends[i] !== '' && myFriends[i] !== ' ') {
    var currentName = myFriends[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    else {
        tinyName = `Invalid Name Present "${myFriends[i]}"`;
        break;
    }

    }
    return tinyName;
}

var myFriends = ['Anika', 'Tamanna', 'Nowshin ', "Sumaiya", 'Onika', "Fariha","Nawrin"];
tinyResult = tinyFriend(myFriends);
console.log('Smallest Name is =', tinyResult);

