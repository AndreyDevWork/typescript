let message: string | number = 4
message = 'i can be number or string'

let messages: string[] | number[] = ['a', 'b']
messages = [1, 4, 6]

function printMsg(msg: string | number): void {
    console.log(msg)
}
printMsg(123)
printMsg('dasdas')