let message: string | number = 4
message = 'i can be number or string'

let messages: string[] | number[] = ['a', 'b']
messages = [1, 4, 6]

// function printMsg(msg: string | number): void {
//     if(typeof msg === 'string') {
//         console.log(msg.toUpperCase())
//     } else {
//         console.log(msg.toExponential())
//     }
// }


function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m))
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed())
    } else {
        console.log(msg)
    }
}

printMsg(123)

const printReadings = (a: number | string, b: number | boolean): void => {
    if (a === b) {
        console.log(a, b)
    }
}

const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3))
}

function checkReadings3 (readings: {system: number} | {user:number}): void {
    if ('system' in readings) {
        console.log(readings.system)
    } else {
        console.log(readings.user)
    }
}

function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getDay())
    } else {
        console.log(x.length)
    }
}