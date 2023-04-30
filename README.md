# alive-sessions
Trigger a callback when a session expires and revalidate expire time when a session is used.

When a session expires, the callback is triggered and the session is removed from the store (the store is a javascript object).

This trigger callback can be used to remove a session from a database.

## API

#### Create a new session 
Creating a new session will insert a new session in the store and 

```
  createSession({
    sessionID: 'you-session-id', 
    expireMs: 300000, 
    action: () => console.log('Session expired')
  })
```
**sessionID:** The session id. It can be any string.
**expireMs:** The session expire time in milliseconds.
**action:** The callback to be triggered when the session expires.

#### Revalidate a session
Revalidating a session will update the expire time of the session and prevent the session from expiring.

```
  revalidateSession(sessionID, expireMs)
```
**sessionID:** The session id. It can be any string.
**expireMs:** The session expire time in milliseconds.

#### Check for a session  
Check if a session exists in the store and prevent duplicate sessions. 

```
  sessionExists(sessionID)
```
**sessionID:** The session id. It can be any string.

#### Conversions
alive-sessions package also provides helper functions to convert minutes and seconds to milliseconds.

```
  secondsToMs(seconds)
  minutesToMs(minutes)
```
**seconds/minutes:** The number of the unit on each case.
