# Geek Sessions website

This repos is used to hold the geek sessions website

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build
```

To run in development

Install Now CLI

```sh
npm install -g now
```

To test with your own google calendar, you need to follow these steps:
1) Register a project on https://code.google.com/apis/console
2) Generate a Simple API Access key
3) Ensure Calendar API is activated under services.
4) Your test calendar must be public (on calendar settings)

On a .env file, add the following keys from Google Calendar API
```sh
GOOGLE_CALENDAR_ID=<id_of_your_calendar_available_on_calendar_settings>
GOOGLE_CALENDAR_API_KEY=<simple_key_generated_on_google_projects_console>
```

Next, run now in development mode
```sh
now dev
```

Open a browser on `localhost:3000`

Serverless functions will be available e.g. `localhost:3000/api/<yourserverlessfunctionname>`