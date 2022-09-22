var grade = 7.5
if (grade >= 5.0){
    console.log("Passed")
}else {
    console.log("Falsed")
}
let point = 9.5
if(point >= 9.0 && point <= 10){
    console.log("Distinction")
}else if(point >= 5.0 && point <9){
    console.log("Grade: Passed")
}else if (point >= 0 && point <5.0){
    console.log("Falsed")
}else{
    console.log("Invalid grade")

}
    

let gender = "n"
if (gender == "n" || gender == "m"){
    console.log("You are male")
}else if(gender == 'f' || gender == 'F'){
    console.log("You are female")
}
var menu = 2
switch (menu){
    case 1:
        console.log("You have select menu 1")
        break;
        
     case 2:
        console.log("You have select menu 2")
        break;
     case 3:
        console.log("You have select menu 3")
        break;
        default:
            console.log("Invalid menu")
            break;

}


