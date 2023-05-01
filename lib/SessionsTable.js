module.exports = {
  SessionsTable: class SessionsTable {
    constructor () {
      this.sessions = {}
    }

    addSession (session) {
      this.sessions[session.sessionID] = session
    }

    getSession (sessionID) {
      return this.sessions[sessionID]
    }

    sessionExists (sessionID) {
      return !!this.sessions[sessionID]
    }

    removeSession (sessionID) {
      if (!this.sessions[sessionID]) {
        throw new Error('Session ID does not exists')
      }

      delete this.sessions[sessionID]
    }

    getSesssions () {
      return this.sessions
    }
  }
}
