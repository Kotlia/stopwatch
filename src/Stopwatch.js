import now from 'performance-now'

export { StopwatchManager } from './StopwatchManager.js'

export default class Stopwatch {
    constructor(name, option = null) {
        this.name = name
        this.total = 0
        let tempStart = 0
    }
    start() {
        this.tempStart = now()
        return this
    }
    stop() {
        this.total = now() - this.tempStart
        return this
    }
    toString() {
        return this.total.toString()
    }
}