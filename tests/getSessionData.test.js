const { createSession, getSessionData } = require('../lib/aliveSessions')

// RETIME SESSION TESTS
test('Create a new session and get the data', () => {
  const sessionId = Date.now().toString()
  createSession({
    sessionID: sessionId,
    action: () => { },
    data: {
      name: 'John Doe'
    }
  })

  expect(getSessionData(sessionId)).toEqual({ name: 'John Doe' })
})
