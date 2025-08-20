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
							This project focused on building a B-Tree in C++. My main objective was to ensure that 
                       	 	the tree could handle insertion operations and properly split nodes when capacity was 
                        	exceeded. The implementation required careful pointer management and recursive logic 
                        	to maintain balance. By the end, the tree was able to split multiple times, preserving 
                        	the B-Tree properties and allowing efficient data organization. 

				 	</>
				}
	    />
	    	<RoundedBox
	    		title="Tar Util"
	    		text={
					<>
                        	For this project, I created a custom implementation of the Unix tar utility 
                        	in C++. The goal was to package and extract groups of files using a format similar to the 
                        	real tool. I worked on designing the archive structure, handling file metadata, and ensuring 
                        	files could be correctly reconstructed after extraction. This helped me understand file I/O 
                        	operations in depth as well as the details of how archival tools manage data.
				 	</>
				}
	    	/>

			<RoundedBox
				title="Cmp Util"
				text={
					<>
							Similar in style to the <code>tar</code> project, I built my own version of the 
                        	<code>cmp</code> utility in C++. This tool compares two files byte by byte and reports 
                        	the first difference. The challenge was ensuring accuracy and efficiency, particularly 
                        	with large files. Working on this gave me a better appreciation for low-level file 
                        	handling and the kind of optimizations needed in system-level utilities.
				 	</>
				}
			/>
			
			<RoundedBox
				title="The Poker Project"
				text={
					<>
							This project involved creating a 5-card stud poker simulation with full tie-breaking logic. 
                        	I implemented algorithms to handle card ranking, suit prioritization, and special rules 
                        	to ensure there were no ties. To challenge myself, I wrote the simulation in ten 
                        	different programming languages, exploring language-specific strengths and weaknesses. 
                        	Later, I collaborated with a group to extend the project in Ruby by adding joker wildcards 
                        	and more advanced rule sets.
				 	</>
				}
			/>
			
			<RoundedBox
				title="Game of Life"
				text={
					<>
							For this project, I implemented Conways Game of Life entirely in Python. The program runs 
                        	in the command line and simulates the cellular automaton based on user-defined starting 
                        	states. I focused on optimizing the update loop and ensuring clarity in the output display. 
                        	This project was a great exercise in algorithm design and reinforced my skills in grid-based 
                        	simulations.
				 	</>
				}
			/>
			
			<RoundedBox
				title="M-Project"
				text={
					<>
							This was a large-scale, full-stack development project built with two other students. 
                        	I was primarily responsible for designing and managing the database, creating methods 
                        	for accessing and updating records, and integrating it with the rest of the system. 
                        	I also contributed to the UI design and helped configure our custom server. The project 
                        	was implemented in Java using Java Swing for the interface, and it provided great 
                        	experience in combining front-end and back-end components into one working system.
				 	</>
				}
			/>
			<RoundedBox
				title="Simple Chat Bot"
				text={
					<>
							This project was a lightweight chat bot written in Python. The bot used basic natural 
                        	language processing by cleaning and then scanning input sentences for keywords and generating responses 
                        	based on those triggers. While simple, it provided a foundation for understanding how 
                        	conversational agents can be built and gave me the opportunity to experiment with 
                        	branching logic and text-based interaction design.
				 	</>
				}
			/>
        </div>

    );
}
