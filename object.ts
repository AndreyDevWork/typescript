const userData2 = {
    isBirthDayData: false,
    ageData: 40,
    userNameData: 'John',
    smth: 'smth property',
    messages: {
        error: 'Errorrrrrr'
    }
}

function logBrtMsg({
   isBirthDayData,
   userNameData,
   ageData,
   messages: { error }
}: {
    isBirthDayData: boolean
    userNameData: string
    ageData: number,
    messages: { error: string}
}): string {
    if(isBirthDayData) {
        return `Congrats ${userNameData}, age: ${ageData + 1}  ${error}`
    } else {
        return `Not birth day  ${error}`
    }
}


console.log(logBrtMsg(userData2))