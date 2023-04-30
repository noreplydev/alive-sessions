import { sessionExists } from '../lib/aliveSessions.js'

// SESSION EXISTS TESTS
test('SessionExists returns false when session does not exist', () => {
  expect(sessionExists('1234')).toBe(false)
})

test('SessionExists returns an error when the param is not a string', () => {
  expect(() => sessionExists()).toThrow('Session ID must be a string')
})

test('SessionExists returns an error when the param is a empty string', () => {
  expect(sessionExists('')).toBe(false)
})
