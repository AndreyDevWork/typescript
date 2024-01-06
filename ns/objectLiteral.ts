const serverConfig: {
    protocol: 'https' | 'http', // Объектный литерал
    port: 3001 | 3000, // Объектный литерал
} = {
    protocol: 'https',
    port: 3001
}







type Config = {
    protocol: 'https' | 'http',
    port: 3001 | 3000,
}
type Role = {
    role: string
}
type ConfigWithRole = Config & Role // Пересечение типаов (intersection) (соеденяет в одно)

const serverCon: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
}


const backupCon: ConfigWithRole = {
    protocol: 'https',
    port: 3000,
    role: 'sisAdmin'
}



type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string

const startServerr: StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001): "serverStarted" => {
    console.log('serverStarted')
    return "serverStarted"
}