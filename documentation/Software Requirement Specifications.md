# Software Requirement Specifications

## Purpose

SpaceApp is a web-based app that allows a search for NASA's image of the day, weather on Mars, and other NASA data.

## Platform

SpaceApp will be available on Heroku.

## Users

NasaApp will be browsable without logging in, but will also have a comment function available for logged in users.

## Backend and Databases

NasaApp will use NASA's public APIs as its backend. Comments will have a backend server made by me and a database on MongoDB.

## Functionality in basic version
### APOD
- DONE: Astronomy Picture of the Day, with copyright info, link to Nasa's APOD page, and togglable description
- Past APODs

### Mars Weather
- DONE: Weather info from Mars for current day
- DONE: Weather info for previous 5 days
- Flavor picture(s) of Mars

### Image Search
- Search function for Nasa image database
- Search by keyword(s), year range, media type (image/video)

### Comments
- Create user account, Login
- Possibility to leave comments
- Email notifications for comments

## Additional features
These features will be implemented if there's time.

## Todo
- error handling
- error notifications
- wait animation