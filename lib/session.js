module.exports = {
  Session: class Session {
    constructor(sessionID, milliseconds, action, data, sessionsTable) {
      this.sessionID = sessionID
      this.milliseconds = milliseconds
      this.action = action
      this.data = data
      this._sessionsTable = sessionsTable
      this._timeout = this.setTimer()
    }

    // Regenerate the session timeout
    revalidate(milliseconds) {
      this.milliseconds = milliseconds

      // Clear the timeout and set a new one
      clearTimeout(this._timeout)

      this._timeout = this.setTimer()
    }

    // Get session data
    getData() {
      return this.data
    }

    // Set a new timeout
    setTimer() {
      return setTimeout(() => {
        this.action()
        this._sessionsTable.removeSession(this.sessionID)
      }, this.milliseconds)
    }
  }
}
