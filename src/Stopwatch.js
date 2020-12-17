import now from 'performance-now'

export { StopwatchManager } from './StopwatchManager.js'

export default class Stopwatch {
    constructor(name, option = null) {
        this.name = name
        this.total = 0
        let tempStart = 0
        if (option) {
            if (option.run) {
                Object.entries(option.run)
                    .forEach(k => {
                        setTimeout(() => {
                            k[1]()
                        }, parseFloat(k[0]))
                    })
            }
        }

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