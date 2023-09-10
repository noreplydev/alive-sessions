# alive-sessions
Trigger a callback when a session expires and revalidate expire time of a session.

When a session expires, the callback is triggered and the session is removed from the store. Since the store is a javascript object the time complexity of the operations is O(1), which is good for handling many sessions. 

This trigger callback can be used to remove a session from a database.

## Getting started
Install this package using npm.
```
npm install alive-sessions
```

#### Esm
```
import * as aliveSessions from 'alive-sessions'
-or-
import { createSession } from 'alive-sessions'
```

#### CommonJS
```
const aliveSessions = require('alive-sessions')
-or-
const { createSession } = require('aliveSessions')
```

## API

Constraint| Constraint meaning |
--- | --- |
REQ | Required
OPT | Optional
DEF=X | Default value is X

#### ⚙️ Create a new session 
Creating a new session will insert a new session in the store and start the expire timer. When the session expires the callback will be triggered. 

```
createSession({
  sessionID: 'you-session-id', 
  expireMs: 300000, 
  data: any,
  action: () => console.log('Session expired')
})
```
**Params:**
`REQ` sessionID: The session id. It can be any string.
`DEF=5min` expireMs: The session expire time in milliseconds.
`REQ` action: The callback to be triggered when the session expires.
`DEF=null` data: Any data to be passed to the callback.

**Returns:** `Undefined` if the session was created successfully or `throws an error` if something went wrong.

#### ⚙️ Revalidate a session
Revalidating a session will update the expire time of the session and prevent the session from expiring.

```
revalidateSession(sessionID, expireMs)
```
**Params:**
`REQ` sessionID: The session id. It can be any string.
`REQ` expireMs: The session expire time in milliseconds.

**Returns:** `Undefined` if the session was revalidated successfully or `throws an error` if something went wrong.

#### ⚙️ Check for a session  
Check if a session exists in the store and prevent duplicate sessions. 

```
sessionExists(sessionID)
```
**Params:**
`REQ` sessionID: The session id. It can be any string.

**Returns:** `True` if the session exists or `False` if the session does not exist.

#### ⚙️ Remove a session  
Remove a session from the store before it expires.

```
removeSession(sessionID)
```
**Params:**
`REQ` sessionID: The session id. It can be any string.

**Returns:** `Undefined` if the session was removed successfully or `throws an error` if something went wrong.

#### ⚙️ Get a session data  
Given a session id, get the data associated with the session.

```
getSessionData(sessionID)
```
**Params:**
`REQ` sessionID: The session id. It can be any string.

**Returns:** The session value (`any`) or `throws an error` if something went wrong. The default session value is `null`.

#### ⚙️ Sessions
Get all sessions from the store for testing purposes. Modifying the store directly is not recommended and may result in unexpected errors.

```
sessions()
```
**Params:**
N/A

**Returns:** An object with all the sessions in the store.

#### ⚙️ Conversions
alive-sessions package also provides helper functions to convert minutes and seconds to milliseconds.

```
secondsToMs(seconds)
minutesToMs(minutes)
```
**Params:**
`REQ` seconds/minutes: The number of the unit on each case.

**Returns:** The number of milliseconds.
