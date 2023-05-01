const { revalidateSession } = require('../lib/aliveSessions.js')

// RETIME SESSION TESTS
test('Revalidate a session with a invalid session id', () => {
  expect(() => revalidateSession('valid-id')).toThrow('SessionID does not exists')
})
