const userName: string = "Andrey"
const ageUser: number = 18
const isAdult: boolean = false

logAdultMsg(ageUser, userName);
function logAdultMsg(age: number, name: string): void {
    if(age < 18) {
        console.log(`${name} is not adult`)
    } else {
        console.log(`${name} is adult`)
    }
}