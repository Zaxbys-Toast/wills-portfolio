import React from 'react';
import Header from '../components/Header.js';
import RoundedBox from '../components/RoundedBox.js';
import { ReactComponent as skyline } from '../assets/skyline.svg';

export default function home() {
    return (
        <div>
          <Header />
          <RoundedBox
            title="Welcome"
            text="This website is both a personal portfolio as well as an exercise in creating React webapps. I created this page initially for personal satisfaction, however, it has been repurposed into a place to share my projects."
            ImageComponent={skyline}
          />
          
        </div>
    );
}
