export function makeFuncWithDelay(func: (value: number) => boolean, delay: number) {
  setTimeout(func, delay)
}