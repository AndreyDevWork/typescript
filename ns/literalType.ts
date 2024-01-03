let msg: 'Hello' = 'Hello' // Литеральный тип,

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
    console.log(`Server started on ${protocol}://server:${port}`)
    return 'Server started'
}

console.log(startServer('https', 3000))


function createAnime(
    id: string | number,
    animName: string,
    timing: 'ease' | 'ease-out' | 'ease-in' = 'ease',
    duration: number,
    iterCount: 'infinite' | number
    ): void {
    const elem = document.querySelector(`#${id}`) as HTMLElement
    if(elem) {
        elem.style.animation = `${animName} ${timing} ${duration} ${iterCount}`
    }
}