interface IBasicConfig {
    protocol: string,
    port: number
}

const backupConf: IBasicConfig = {
    protocol: 'tdasd',
    port: 313
}
const TwoConf = {
    protocol: 'tdasd',
    port: 313,
    dasd: 413,
    qqq: 'dadsad'
}


const startServ = (config: IBasicConfig): 'Started' => {
    console.log(config.port) // Но обратится можем только по ключам с интерфейса
    return 'Started'
}

startServ(TwoConf) // Оба подходят, объекты будет отфильтрофан
startServ(backupConf) // Оба подходят, объекты будет отфильтрофан