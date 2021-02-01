# Software Requirement Specifications

## Purpose

SpaceApp is a web-based app that allows a search for NASA's image of the day, other Nasa images, and the weather on Mars.

## Users

NasaApp will be browsable without logging in, but will also have a comment function available for logged in users.

## Platforms and frameworks
The frontend of SpaceApp is done in React and TypeScript. The backend is made in Node and TypeScript.

The backend will use NASA's public APIs. Users and comments will have a database on MongoDB.

SpaceApp will be available on Heroku.

## Functionality in basic version
### APOD
- DONE: Astronomy Picture of the Day, with copyright info, link to Nasa's APOD page, and togglable description
- DONE: Past APODs
- functionality to render APOD when it's a video
- APOD description with links and paragraph formatting

### Mars Weather
- DONE: Weather info from Mars for current day
- DONE: Weather info for previous 5 days
- Flavor picture(s) of Mars

### Image Search
- Search function for Nasa image database (DONE for single words)
- Search by keyword(s), year range, media type (image/video)
- Info popup about search
- Info about results: what was searched, how many results
- DONE: "No results" info if no results

### Users And Comments
- Create user account, Login
- Possibility to leave comments
- Email notifications for comments

### General
- Error notifications

## Additional Features
- wait animation
- custom hook implementation to SearchForm