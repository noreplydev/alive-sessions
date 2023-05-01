const { removeSession } = require('../lib/aliveSessions')

// SESSION EXISTS TESTS
test('RemoveSession throws an error when session does not exist', () => {
  expect(() => removeSession('1234')).toThrow('SessionID does not exists')
})

test('RemoveSession returns an error when the param is not present', () => {
  expect(() => removeSession()).toThrow('Required a sessionID parameter. Type: string')
})

test('RemoveSession returns an error when the param is a empty string', () => {
  expect(() => removeSession('')).toThrow('Required a sessionID parameter. Type: string')
})

test('RemoveSession returns an error when the param is not a string', () => {
  expect(() => removeSession(23)).toThrow('SessionID must be a string')
})
