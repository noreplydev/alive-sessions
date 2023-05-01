const { Session } = require('./Session.js')
const { SessionsTable } = require('./sessionsTable.js')

const sessionsTable = new SessionsTable()

const createSession = (config) => {
  if (!config) {
    throw new Error('You need to pass a config object to create a session')
  }

  const {
    sessionID,
    expireMs = 300000, // by default, expire after 5 minutes
    action
  } = config

  if (!sessionID || !action) {
    throw new Error('You need to pass a object with sessionID and action to create a session')
  }

  if (sessionExists(sessionID)) {
    throw new Error('SessionID already existID already exists')
  }

  // Store the new session in the store
  const newSession = new Session(sessionID, expireMs, action, sessionsTable)
  sessionsTable.addSession(newSession)
}

const sessionExists = sessionID => {
  if (typeof sessionID !== 'string') {
    throw new Error('Session ID must be a string')
  }

  return !!sessionsTable.sessionExists(sessionID)
}

const revalidateSession = (sessionID, expireMs) => {
  if (!sessionID) {
    throw new Error('Required a sessionID parameter. Type: string')
  }

  if (typeof sessionID !== 'string') {
    throw new Error('SessionID must be a string')
  }

  if (!sessionExists(sessionID)) {
    throw new Error('SessionID does not exists')
  }

  sessionsTable
    .getSession(sessionID)
    .revalidate(expireMs)
}

const secondsToMs = seconds => {
  if (!seconds) {
    throw new Error('Required a seconds parameter. Type: number')
  }

  if (typeof seconds !== 'number') {
    throw new Error('Seconds must be a number')
  }

  if (seconds < 0) {
    throw new Error('Seconds must be greater than 0')
  }

  return seconds * 1000
}
const minutesToMs = minutes => {
  if (!minutes) {
    throw new Error('Required a minutes parameter. Type: number')
  }

  if (typeof minutes !== 'number') {
    throw new Error('Minutes must be a number')
  }

  if (minutes < 0) {
    throw new Error('Minutes must be greater than 0')
  }

  return secondsToMs(minutes * 60)
}

module.exports = {
  createSession,
  sessionExists,
  revalidateSession,
  secondsToMs,
  minutesToMs
}
