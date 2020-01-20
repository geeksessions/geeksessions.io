// Import
import { Fragment } from "react";
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

function getHostName(request) {
    return process.env.API_HOST || `https://${request.headers.host}`;
}

const Index = (props) =>  (
    <Fragment>
         <Head>
            <meta charset="utf-8" />
            <title>Geek Sessions Faro</title>
            <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
            <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,latin-ext' rel='stylesheet' type='text/css' /> 
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                content="Geek Sessions organizes regular events like talks, workshops and fireside chats with the goal of bringing local tech denizens together." />
        </Head>
        <header className="header">
            <img alt="Geek Sessions Faro" className="logo" src="assets/logo_white.svg" />
            <a className="joinGeekSessionsLink" href="https://chat.geeksessions.io/" rel="noopener" target="_blank">
                Join Geek Sessions on Discord
            </a>
        </header>
        <main className="mainBody">
            <h1>
                Geek Sessions organizes regular events like talks, workshops and fireside chats with the goal of bringing
                local tech
                denizens together.
            </h1>
            <div className="eventContainer">
                <article className="eventArticle">
                    <img alt="talks" className="eventLogo" src="/assets/icon_microphone.svg" />
                    <p>
                        Talks. Geek Sessions organizes tech talks with speakers from all around the world to encourage
                        knowledge sharing and networking in the region of Algarve.
                    </p>
                    <p>
                        Interested in giving a talk?
                    </p>
                    <a class="talksRepoLink" href="https://github.com/geeksessions/talks/issues/" rel="noopener" target="_blank">Submit one to our repo</a>
                </article>
                <article className="eventArticle">
                    <img alt="workshops" className="eventLogo" src="/assets/icon_computer.svg" />
                    <p>
                        Workshops. Ever wanted to learn a new technology or improve in one you already know? Join us in one
                        of our workshops, from Node schools to IoT you never know what will come next.
                    </p>
                </article>
                <article className="eventArticle">
                    <img alt="fireside chats" className="eventLogo" src="/assets/icon_fire.svg" />
                    <p>
                        Fireside Chats. Join the Geek Sessions in informal conversations with professionals from IT where we
                        attempt to encourage open discussion of a given topic.
                    </p>
                </article>
            </div>
            <section className="eventCalendar">
                <h2>Our events</h2>
                <div id="eventList">
                        {props.error && <h3 id="eventError">Oopsie there was an error with the API, blame the backend developers :)</h3>}
                        {props.events.map((event, index) => {
                            return (
                            <article key={index} className="event">
                                <h3>{event.title}</h3>
                                <time>{event.date}</time>
                                <time>{event.startTime} - {event.endTime}</time>
                                <a href={`https://maps.google.com/?q=${event.location}`} rel="noopener" target="_blank">{event.location}</a>
                                {/* <p>
                                    {event.description}
                                </p> */}
                            </article>        
                            );
                        })}
                </div>
            </section>
        </main>
        <footer>
            <a className="socialMediaLogo" href="https://pt-pt.facebook.com/GeekSessionsFaro" rel="noopener" target="_blank">
                <img alt="facebook" src="/assets/icon_facebook.svg" />
            </a>
            <a className="socialMediaLogo" href="https://github.com/geeksessions" rel="noopener" target="_blank">
                <img alt="github" src="/assets/icon_github.svg" />
            </a>
            <a className="socialMediaLogo" href="https://twitter.com/GeekSessionsFAO" rel="noopener" target="_blank">
                <img alt="twitter" src="/assets/icon_twitter.svg" />
            </a>
        </footer>
        <style jsx global>{`
        body {
            background-color: black;
            color: white;
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif;
            height: 100vh;
            margin: 0;
        }


        body::after {
            background-attachment: fixed;
            background-image: url("./assets/background.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            bottom: 0;
            content: "";
            left: 0;
            opacity: 0.6;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
        }

        .header {
            align-items: center;
            display: flex;
            flex-direction: row;
            height: 80px;
            justify-content: space-between;
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 30px;
        }

        .logo {
            height: 80px;
            width: auto;
        }

        .joinGeekSessionsLink {
            align-items: center;
            background-color: rgba(255, 255, 255, .2);
            border-radius: 30px;
            color: white;
            display: flex;
            flex-direction: row;
            height: 35px;
            justify-content: center;
            text-decoration: none;
            width: 250px;
        }

        .mainBody {
            align-items: center;
            display: flex;
            flex: 1 1 100%;
            flex-direction: column;
            justify-content: center;
            padding: 0% 20%;
        }

        .mainBody h1 {
            font-size: 36px;
            font-weight: 300;
            text-align: center;
        }

        .eventContainer {
            align-items: flex-start;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 10%;
            width: 100%;
        }

        .eventArticle {
            font-size: 16px;
            font-weight: 300;
            max-width: 300px;
        }

        .eventArticle p {
            margin: 0;
            text-align: left;
        }

        .eventLogo {
            width: 40px;
            height: 40px;
            margin-bottom: 30px;
        }

        .talksRepoLink {
            color: #3333ff;
        }

        .talksRepoLink:visited {
            color: #913c91;
        }

        .talksRepoLink:active {
            color: #ff3636;
        }

        .eventCalendar {
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-top: 100px;
        }

        #eventList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .event {
            display: flex;
            flex-direction: column;
            height: 300px;
            justify-content: space-between;
            max-height: 300px;
            padding: 10px;
            width: 200px;
        }

        #eventError {
            color: #ff0033;
        }

        footer {
            display: flex;
            flex-direction: column;
            margin: auto;
            position: fixed;
            right: 2%;
            top: 40%;
            width: 30px;
        }

        .socialMediaLogo {
            align-items: center;
            background-color: rgba(255, 255, 255, .2);
            border-radius: 15px;
            display: flex;
            height: 30px;
            justify-content: center;
            margin-top: 20px;
            width: 30px;
        }

        .socialMediaLogo img {
            height: 15px;
            width: 15px;
        }
    `}</style>
    </Fragment>
);

Index.getInitialProps = async function(context) {
    const response = {
        error: false,
        events: []
    }
    
    try {
        const HOST_NAME = getHostName(context.req);
        const res = await fetch(`${HOST_NAME}/api/events`);
        const data = await res.json();

        response.events = data;
    } catch (error) {
        console.log(error);
        response.error = true;
    } finally {
        return response;
    }
};

Index.defaultProps = {
    error: false,
    events: []
}

export default Index;