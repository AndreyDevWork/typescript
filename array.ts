const departments: string[] = ['dev', 'design', 'marketing']
const nums: number[] = [1, 4, 7, 11]
const nums2: number[][] = [[3, 5, 3], [1, 5, 7], [41, 867, 33]]

let department = departments[0]


const report: string[] = departments
    .filter((d: string) => d !== 'dev')
    .map((d: string) => `${d} - done`)


const [first, two] = departments
console.log(first, two);