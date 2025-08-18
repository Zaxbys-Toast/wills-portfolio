import React from 'react';
import Header from '../components/Header.js';
import RoundedBox from '../components/RoundedBox.js';

export default function Projects() {
    return (
        <div>
            <Header />
            <RoundedBox
                title="My Projects"
            />
            <RoundedBox
                title="Innovative Applications Website"
                text={
                    <>
                        This site was done in collaboration with three other students. I was in charge of creating the navigation bar as well as putting together all of our makeshift components. As we could not install anything on the machine that the website was being built on we opted to use JQuery to simulate react components. This allowed us to create a semi-modular coding experience, with each piece being created and stored in a separate file. This allowed us to keep the code clear to ourselves and to anyone looking at it as well as creating reusable pieces.The site can be found <a href="http://webclass.cs.mercer.edu/~ia">here</a>.
                    </>
    }
            />
	    <RoundedBox
	    	title="B-Tree Implementation"
	    	text=""
	    />
	    <RoundedBox
	    	title="Tar Util"
	    	text=""
	    />

	    <RoundedBox
	    	title="Cmp Util"
	    	text=""
	    />
	    
	    <RoundedBox
	    	title="The Poker Project"
	    	text=""
	    />
	    
	    <RoundedBox
	    	title="Game of Life"
	    	text=""
	    />
	    
	    <RoundedBox
	    	title="M-Project"
	    	text=""
	    />
	    <RoundedBox
	    	title="Simple Chat Bot"
	    	text=""
	    />
        </div>

    );
}
