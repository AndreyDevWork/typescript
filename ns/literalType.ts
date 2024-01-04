let msg: 'Hello' = 'Hello' // Литеральный тип,

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
    console.log(`Server started on ${protocol}://server:${port}`)
    return 'Server started'
}

console.log(startServer('https', 3000))

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in' // Псведоним типов
type AnimationId = string | number

function createAnime(
    AnimationId: string | number,
    animName: string,
    timing: AnimationTimingFunc = 'ease',
    duration: number,
    iterCount: 'infinite' | number
    ): void {
    const elem = document.querySelector(`#${AnimationId}`) as HTMLElement
    if(elem) {
        elem.style.animation = `${animName} ${timing} ${duration} ${iterCount}`
    }
}