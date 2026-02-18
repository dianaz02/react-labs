#README — Lab 3.2  
#Data Loading with useEffect

```md
# Lab 3.2 — Data Loading with useEffect

#Objective
Use useEffect to fetch data from a public API, manage loading and error states, implement cleanup with AbortController, and correctly use dependency arrays.

#API Used

Public API:
https://jsonplaceholder.typicode.com/users/:id

#What is implemented

#UserProfile Component

Uses:
 useState for:
  user (object or null)
 loading (boolean)
  error (string or null)

useEffect for:
 Fetching data on mount
 Fetching data when userId changes

# Loading & Error Handling

UI shows:

"Loading..." while fetching
 Error message if request fails
User data when loaded

#Cleanup & AbortController

To prevent memory leaks:

AbortController is used
 Previous request is aborted before new fetch
Cleanup function aborts request on unmount

#Dependency Array

```js
useEffect(() => {
  fetchUser(userId);
  return () => controller.abort();
}, [userId]);