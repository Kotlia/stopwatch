import Databse from 'better-sqlite3'

export class StopwatchManager {
    constructor(location, tablename) {
        this.location = location
        this.tablename = tablename
        this.db = Databse(location)
        this.stopwatches = []
    }
    add(...args) {
        args.forEach(it => {
            this.stopwatches += it
        })
    }
    log() {
        this.db.prepare(`CREATE TABLE IF NOT EXISTS "" ("id" TEXT NOT NULL UNIQUE, "time" NUMERIC NOT NULL);`)
    }
    rollback() {

    }
}