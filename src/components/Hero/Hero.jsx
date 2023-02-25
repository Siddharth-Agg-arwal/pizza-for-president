import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


import {
	LpContainer,
	LpContent,
	LpItems,
	Lph1,
	Lpp,
	Lpbtn,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<LpContainer>
			<NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<LpContent>
				<LpItems>
					<Lph1>Secrets to Mouth-watering Recipes</Lph1>
					<Lpp>Get recipes matching your needs in moments!</Lpp>
					<Lpbtn>Start Now</Lpbtn>
				</LpItems>
			</LpContent>
		</LpContainer>
	);
}

export default Hero;
