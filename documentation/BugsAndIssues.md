# Bugs and issues

## Bug: Refresh in browser returns "cannot GET" error
Potential solution:
* Add a redirect to backend

## Issue: Mars weather temperature and wind direction unavailable
Potential solutions:
* View Nasa's API, it has changed?
* DONE: remove wind direction data for now to avoid breaking the page
* Replace wind direction with placeholder message if it's unavailable