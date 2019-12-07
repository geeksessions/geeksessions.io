const Wreck = require('@hapi/wreck');
const { DateTime } = require('luxon');

/**
 * Function to get events from calendar
 */
async function getEvents() {        
    const { payload } = await Wreck.get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_ID}/events?key=${process.env.GOOGLE_CALENDAR_API_KEY}`,
        {json: true});
    return payload.items;
}

module.exports = async (req, res) => {
    try {
        const events = await getEvents();    
        const parsedEvents = events.sort((event1, event2) => {
            // Sorts by date
            const event1Date = DateTime.fromISO(event1.start.dateTime);
            const event2Date = DateTime.fromISO(event2.start.dateTime);
            return event1Date.diff(event2Date).values.milliseconds;
        }).map((event) => ({
            // Return only relevant/formatted information to the frontend
            title: event.summary,
            description: event.description,
            location: event.location,
            startTime: DateTime.fromISO(event.start.dateTime).toLocaleString(DateTime.TIME_24_SIMPLE),   
            endTime: DateTime.fromISO(event.end.dateTime).toLocaleString(DateTime.TIME_24_SIMPLE),
            date: DateTime.fromISO(event.start.dateTime).toLocaleString(DateTime.DATE_FULL),
        })).filter(event => {
            // Removes events started by '_' (not official dates) and past dates
            return !event.title.startsWith("_") && DateTime.fromJSDate(new Date(event.date)).diffNow("days").values.days >= -1;
        });

        return res.status(200).send(parsedEvents);
    }
    catch (error) {
        return res.status(500).send({error});
    }
}