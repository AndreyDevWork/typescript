interface IConfig {
    protocol: "http" | "htpps",
    port: 3000 | 3001,
}

interface IRole {
    role: string
}
interface IConfigWithRole extends IRole, IConfig {
    additionalProperty: string,
    log: (msg: string) => void,
    hmm: Function
}

const serverConf: IConfigWithRole = {
    protocol: "http",
    port: 3000,
    role: 'admin',
    additionalProperty: 'some text',
    log: (msg:string): void => {console.log(msg)},
    hmm: (): void => {console.log('Какая то функция')}
}

serverConf.log('just text')