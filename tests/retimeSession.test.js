import { retimeSession } from '../lib/aliveSessions.js'

// RETIME SESSION TESTS
test('Retime a session with a invalid session id', () => {
  expect(() => retimeSession('valid-id')).toThrow('SessionID does not exists')
})
