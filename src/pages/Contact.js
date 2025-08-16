import React from 'react';
import Header from '../components/Header.js';
import RoundedBox from '../components/RoundedBox.js';

export default function About() {
    return (
        <div>
            <Header />
            <RoundedBox
                title="Contact Me"
                text={
                    <>
                        Contact me at any of the following:<br />
                        Email: Jwk1915@gmail.com<br />
                        Phone: +1 (912) 243-5017<br />
                        Address: 607 2nd Ave, Tybee Island, GA 31328
                    </>
    }
            />
        </div>
    );
}