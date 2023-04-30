import { minutesToMs, secondsToMs } from '../lib/aliveSessions.js'

// MINUTES TO MS TESTS
test('Convert from Minutes to ms', () => {
  expect(minutesToMs(5)).toBe(300000)
})

test('Convert from Minutes bad string to ms', () => {
  expect(() => minutesToMs('hi!')).toThrow('Minutes must be a number')
})

test('Convert from Minutes to ms with negative numbers', () => {
  expect(() => minutesToMs(-1).toThrow('Minutes must be greater than 0'))
})

test('Convert from Minutes to ms with no params', () => {
  expect(() => minutesToMs().toThrow('Required a minutes parameter. Type: number'))
})

// SECONDS TO MS TESTS
test('Convert from Seconds to ms', () => {
  expect(secondsToMs(5)).toBe(5000)
})

test('Convert from Seconds bad string to ms', () => {
  expect(() => secondsToMs('hi!')).toThrow('Seconds must be a number')
})

test('Convert from Seconds to ms with negative numbers', () => {
  expect(() => secondsToMs(-1).toThrow('Seconds must be greater than 0'))
})

test('Convert from Seconds to ms with no params', () => {
  expect(() => secondsToMs().toThrow('Required a Seconds parameter. Type: number'))
})
