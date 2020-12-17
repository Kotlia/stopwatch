import now from 'performance-now'

export default class Stopwatch {
    constructor(name, option = null) {
        this.name = name
        this.option = option
        this.total = 0
        let tempStart = 0
        let tempStop = 0
    }
    start() {
        this.tempStart = now()
        return this
    }
    stop() {
        this.tempEnd = now()
        this.total = this.tempEnd - this.tempStart
        return this
    }
    toString() {
        return this.total.toString()
    }
}