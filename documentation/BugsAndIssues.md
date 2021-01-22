# Bugs and issues

## Bug: Refresh in browser returns "cannot GET" error
Potential solution:
* Get everything from instead of calling Nasa API from front
* Then redirect server requests from server to front

## Issue: Mars weather temperature and wind direction unavailable
Potential solutions:
* View Nasa's API, it has changed?
* DONE: remove wind direction data for now to avoid breaking the page
* Replace wind direction with placeholder message if it's unavailable