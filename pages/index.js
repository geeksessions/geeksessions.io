import { Fragment } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Footer from '../components/footer';
import Header from '../components/header';
import EventCard from '../components/event-card';
import Activity from '../components/activity';

const getHostName = (request) => process.env.API_HOST || `https://${request.headers.host}`;

const Index = (props) => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <title>Geek Sessions Faro</title>
      <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Geek Sessions organizes regular events like talks, workshops and fireside chats with the goal of bringing local tech denizens together."
      />
    </Head>
    <Header />
    <main>
      <section className="hero container mx-auto flex flex-col items-center text-center px-14">
        <div className="max-w-3xl flex flex-col h-full justify-between">
          <h1 className="text-3xl tracking-wider leading-relaxed h-full transform translate-y-1/4 sm:translate-y-1/3">
            GeekSessions organizes regular events with the goal of bringing local tech denizens together.
          </h1>
          <span className="block text-4xl my-5 animate-bounce">&#8595;</span>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row flex-wrap w-full text-gray-900 mb-20 bg-gray-100 p-14">
        <Activity
          title="Talks"
          description={
            <>
              Geek Sessions organizes tech talks with speakers from all around the world to encourage knowledge sharing and networking in the region of Algarve.
              <br /><br />
              Interested in giving a talk?{' '}
              <a
                className="text-blue-500 visited:text-purple-600 hover:underline"
                href="https://github.com/geeksessions/talks/issues/"
                rel="noopener"
                target="_blank"
              >
                Submit one to our repo!
              </a>
            </>
          }
          imageSrc="/assets/icon_microphone.svg"
        />
        <Activity
          title="Workshops"
          description="Ever wanted to learn a new technology or improve in one you already know? Join us in one of our workshops, from Node schools to IoT you never know what will come next."
          imageSrc="/assets/icon_computer.svg"
        />
        <Activity
          title="Fireside Chats"
          description="Join the Geek Sessions in informal conversations with professionals from IT where we attempt to encourage open discussion of a given topic."
          imageSrc="/assets/icon_fire.svg"
        />
      </section>
      <section className="container mx-auto flex flex-col items-center px-14 mb-40">
        <h2 className="uppercase text-3xl font-bold tracking-wider leading-relaxed mb-8">
          Our events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-200">
          {
            props.error &&
            <h3 className="text-red-700 text-lg col-span-3">Oopsie there was an error with the API, blame the backend developers. :)</h3>
          }
          {props.events.map((event) => {
            return (
              <EventCard key={event.id} event={event} />
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </Fragment>
);

Index.getInitialProps = async function (context) {
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