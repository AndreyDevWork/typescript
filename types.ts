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

const logAdultMsgReturn = (age: number, name: string): string => {
    if(age < 18) {
       return `${name} is not adult`
    } else {
        return `${name} is adult`
    }
}


const userData = '{"isBirthdayData": true, "ageData": 49, "userNameData": "John"}'
const userObj: {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string
} = JSON.parse(userData)


console.log(userObj)