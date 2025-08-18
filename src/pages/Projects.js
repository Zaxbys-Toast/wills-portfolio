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
                        This site was done in collaboration with three other students. 
						I was in charge of creating the navigation bar as well as putting together all of our 
						makeshift components. As we could not install anything on the machine that the website 
						was being built on we opted to use JQuery to simulate react components. This allowed us 
						to create a semi-modular coding experience, with each piece being created and stored in a 
						separate file. This allowed us to keep the code clear to ourselves and to anyone looking at 
						it as well as creating reusable pieces. The site can be found <a href="http://webclass.cs.mercer.edu/~ia">here</a>.
                    </>
    }
            />
	    	<RoundedBox
	    		title="B-Tree Implementation"
	    		text={
					<>
							C++ Project. Goal was to implement a B-Tree capable of splitting at least one time. 

				 	</>
				}
	    />
	    	<RoundedBox
	    		title="Tar Util"
	    		text={
					<>
							Custom Tar implementation in C++
				 	</>
				}
	    	/>

			<RoundedBox
				title="Cmp Util"
				text={
					<>
							Custom Cmp implementation in C++
				 	</>
				}
			/>
			
			<RoundedBox
				title="The Poker Project"
				text={
					<>
							Created a 5 card stud poker simulation, with a tie breaking algorithm, in ten separate programming languages.
							Then as an extension of that project worked with a group of students to create a simulation including joker wild
							cards in Ruby.
				 	</>
				}
			/>
			
			<RoundedBox
				title="Game of Life"
				text={
					<>
							The classic Game of Life algorithm, written in Python. Runs in the command line.
				 	</>
				}
			/>
			
			<RoundedBox
				title="M-Project"
				text={
					<>
							A full-stack developement project created with two other students. I worked on the database and
							methods to utilize the database. Additionally helped with the UI and getting the custom server working.
							All done in Java utilizing Java Swing.
				 	</>
				}
			/>
			<RoundedBox
				title="Simple Chat Bot"
				text={
					<>
							A very simple chat bot with responses based on keywords in sentences. Written in python.
				 	</>
				}
			/>
        </div>

    );
}
