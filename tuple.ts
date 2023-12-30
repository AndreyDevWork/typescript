const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'john', 'pudge', 'riki']
const mapRes = userDataTuple.map(el => el = '333')

const [isAdlt, age, nickname] = userDataTuple

console.log(age)