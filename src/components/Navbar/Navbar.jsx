import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>Bon Appetite</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
