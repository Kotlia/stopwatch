import now from 'performance-now'

export default class Stopwatch {
    constructor(name, option) {
        this.name = name
        this.option = option
        this.total = 0
        this.tempStart = 0
        this.tempEnd = 0
    }
    start() {
        this.tempStart = now()
    }
    end() {
        this.tempEnd = now()
        this.total = this.tempEnd - this.tempStart
    }
    toString() {
        return this.total.toString()
    }
}
