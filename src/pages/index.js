// React
import React, { Component, Fragment } from "react";
// Styles
import styles from "./index.module.css";
// Icons
import LogoIcon from "./../assets/svg/logo_white.svg";
import MicrophoneIcon from "./../assets/svg/icon_microphone.svg";
import ComputerIcon from "./../assets/svg/icon_computer.svg";
import FireIcon from "./../assets/svg/icon_fire.svg";
import FacebookIcon from "./../assets/svg/icon_facebook.svg";
import GithubIcon from "./../assets/svg/icon_github.svg";
import TwitterIcon from "./../assets/svg/icon_twitter.svg";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state ={
            error: false,
            events: []
        }
    }

    async componentDidMount() {
        const response = {
            error: false,
            events: []
        }
        
        try {
            const res = await fetch(`/api/events`);
            const data = await res.json();
    
            response.events = data;
        } catch (error) {
            console.log(error);
            response.error = true;
        } finally {
            this.setState(response);
        }
    }

    render() {
        return (
            <Fragment>
                <header className={styles.header}>
                    <LogoIcon alt="Geek Sessions Faro" className={styles.logo} />
                    <a className={styles.joinGeekSessionsLink} href="https://chat.geeksessions.io/" target="_blank" rel="noopener noreferrer">
                        Join Geek Sessions on Discord
                    </a>
                </header>
                <main className={styles.mainBody}>
                    <h1>
                        Geek Sessions organizes regular events like talks, workshops and fireside chats with the goal of bringing
                        local tech
                        denizens together.
                    </h1>
                    <div className={styles.eventContainer}>
                        <article className={styles.eventArticle}>
                            <MicrophoneIcon alt="talks" className={styles.eventLogo} />
                            <p>
                                Talks. Geek Sessions organizes tech talks with speakers from all around the world to encourage
                                knowledge sharing and networking in the region of Algarve.
                            </p>
                            <p>
                                Interested in giving a talk? Let us know in our Discord.
                            </p>
                        </article>
                        <article className={styles.eventArticle}>
                            <ComputerIcon alt="workshops" className={styles.eventLogo} />
                            <p>
                                Workshops. Ever wanted to learn a new technology or improve in one you already know? Join us in one
                                of our workshops, from Node schools to IoT you never know what will come next.
                            </p>
                        </article>
                        <article className={styles.eventArticle}>
                            <FireIcon alt="fireside chats" className={styles.eventLogo} />
                            <p>
                                Fireside Chats. Join the Geek Sessions in informal conversations with professionals from IT where we
                                attempt to encourage open discussion of a given topic.
                            </p>
                        </article>
                    </div>
                    <section className={styles.eventCalendar}>
                        <h2>Our events</h2>
                        <div id="eventList">
                                {this.state.error && <h3 id="eventError">Oopsie there was an error with the API, blame the backend developers :)</h3>}
                                {this.state.events.map((event, index) => {
                                    return (
                                    <article key={index} className={styles.event}>
                                        <h3>{event.title}</h3>
                                        <time>{event.date}</time>
                                        <time>{event.startTime} - {event.endTime}</time>
                                        <a href={`https://maps.google.com/?q=${event.location}`} target="_blank" rel="noopener noreferrer">{event.location}</a>
                                        <p>
                                            {event.description}
                                        </p>
                                    </article>        
                                    );
                                })}
                        </div>
                    </section>
                </main>
                <footer>
                    <a className={styles.socialMediaLogo} href="https://pt-pt.facebook.com/GeekSessionsFaro" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon alt="facebook" />
                    </a>
                    <a className={styles.socialMediaLogo} href="https://github.com/geeksessions" target="_blank" rel="noopener noreferrer">
                        <GithubIcon alt="github" />
                    </a>
                    <a className={styles.socialMediaLogo} href="https://twitter.com/GeekSessionsFAO" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon alt="twitter" />
                    </a>
                </footer>
            </Fragment>
            )
    }
}
  

Index.defaultProps = {
    error: false,
    events: []
}

export default Index;