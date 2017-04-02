# Timestamp Microservice API
Free Code Camp APIs TimeStamp MicroService

## What is this?
This is a microservice API project for Free Code Camp that is intended to return a date object with both, unix and "readable" date.

In order to let it return to you this object, you will have to type an unix or a readable date with url notation. If you put an invalid entry, the object will return `null` values.

## User stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

## Usage:
`https://timestamp-vp.herokuapp.com/January 10, 2015`

`https://timestamp-vp.herokuapp.com/1420848000`

## Example Response:
`{ unix: "1420848000", natural: "January 10, 2015" }`
