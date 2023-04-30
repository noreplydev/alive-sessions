import { Session } from './Session.js'

const sessions = {}

export const createSession = (config) => {
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

  const existingSession = sessions[sessionID]

  if (existingSession) {
    throw new Error('SessionID already existID already exists')
  }

  const newSession = new Session(sessionID, expireMs, action)
  // Store the new session in memory
  sessions[sessionID] = newSession
}

export const sessionExists = sessionID => {
  if (typeof sessionID !== 'string') {
    throw new Error('Session ID must be a string')
  }

  return !!sessions[sessionID]
}

export const retimeSession = (sessionID, expireMs) => {
  if (!sessions[sessionID]) {
    throw new Error('SessionID does not exists')
  }

  sessions[sessionID].retime(expireMs)
}

export const secondsToMs = seconds => {
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
export const minutesToMs = minutes => {
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
