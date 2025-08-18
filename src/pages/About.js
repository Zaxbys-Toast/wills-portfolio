import React from 'react';
import Header from '../components/Header.js';
import RoundedBox from '../components/RoundedBox.js';

export default function About() {
    return (
        <div>
            <Header />
            <RoundedBox
                title="Who am I?"
                text="My name is John King, but everyone knows me as Will. I recently graduated from Mercer University with a degree in Computer Science and a minor in Mathematics. I have been passionate about math and computers from a young age, and during college I was active in the Poker Club, which deepened my love for statistics, and participated in a study abroad in South Africa teaching coding to underprivileged children. Outside of school, I love cooking, enjoying the process of combining ingredients to create something greater than the sum of its parts, much like coding. I am currently based on Tybee Island, Georgia, but I am always open to exploring new places and opportunities."
                /* I need to add a picture here */
            />
            <RoundedBox
                title="Contact Me"
                text={
                    <>
                        Contact me at any of the following:<br />
                        Email: Jwk1915@gmail.com<br />
                        Phone: +1 (912) 243-5017
                    </>
    }
            />
        </div>
    );
}
