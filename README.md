# GeekSessions.io

Repository for the [GeekSessions.io web app](https://geeksessionsio.geeksessions.now.sh/), to promote tech events for professionals and enthusiasts alike.

## Installation

You need [Node.js 12+](https://nodejs.org/en/) (with NPM).

1. clone or download project
2. run `npm install` from project folder

## Run project (dev)

After [installing project](#installation):

1. run `npm run dev` to start server
2. (optional) [set up google calendar](#set-up-google-calendar-API) (see instructions below)

App is available in `localhost:3000`. Serverless functions are in `localhost:3000/api/<function_name>`.

### Set up Google Calendar API

You can use your **public Google Calendar** to load events locally:

1. **get API key and id** for Google calendar service (see ["Creating a Google API Key"](https://docs.simplecalendar.io/google-api-key/))
2. create an `.env` file with:

   ```env
   GOOGLE_CALENDAR_ID=<calendar_id>
   GOOGLE_CALENDAR_API_KEY=<api_key>
   API_HOST=http://localhost:3000
   ```

3. in `.env`, replace:
   - <calendar_id> with your Google Calendar's ID
   - <api_key> with its matching API key

## Make production build

Run `npm run build` from the project folder.

## Contributing

To contribute to *geeksessions.io* you can:

- work on a feature or fix
- improve documentation
- open an issue
  
To work on a feature, fix, or documentation, fork the project and make a pull request to **master**.
