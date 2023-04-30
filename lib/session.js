export class Session {
  constructor (sessionID, milliseconds, action) {
    this.sessionID = sessionID
    this.milliseconds = milliseconds
    this.action = action
    this._timeout = setTimeout(() => {
      this.action()
    }, milliseconds)
  }

  // Regenerate the session timeout
  revalidate (milliseconds) {
    this.milliseconds = milliseconds

    // Clear the timeout and set a new one
    clearTimeout(this._timeout)

    this._timeout = setTimeout(() => {
      this.action()
    }, this.milliseconds)
  }
}
