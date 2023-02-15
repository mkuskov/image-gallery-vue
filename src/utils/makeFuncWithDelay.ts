export function makeFuncWithDelay(func: any, delay: number) {
    setTimeout(func, delay)
}