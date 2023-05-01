const { createSession } = require('../lib/aliveSessions.js')

// CREATE A SESSION TESTS
test('Create a new session and attach to the session obj', () => {
  const createSessionValue = createSession({
    sessionID: 'test',
    expireMs: 1000,
    action: () => {}
  })

  expect(createSessionValue).toBeUndefined()
})

test('Create a new session with no obj', () => {
  expect(() => createSession()).toThrow('You need to pass a config object to create a session')
})

test('Create a new session with no sessionID and no action ', () => {
  expect(() => createSession({})).toThrow('You need to pass a object with sessionID and action to create a session')
})
