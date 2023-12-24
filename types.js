var userName = "Andrey";
var ageUser = 15;
var isAdult = false;
logAdultMsg(ageUser, userName);
function logAdultMsg(age, name) {
    if (age < 18) {
        console.log("".concat(name, " is not adult"));
    }
    else {
        console.log("".concat(name, " is adult"));
    }
}
