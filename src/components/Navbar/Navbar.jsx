import React from "react";
import "./Navbar.css";
import ArrowDown from "../../svgs/arrow_down.svg";
import User from "../../svgs/user.svg";

const Navbar = () => {
	return (
		<div className='navbar__container'>
			<div className='navbar'>
				<img src='logo.png' alt='tutedude logo' className='navbar__logo' />
				<div className='navbar__menuItems'>
					<div className='navbar__menuItem'>My Assignment</div>
					<div className='navbar__menuItem'>Chat with Mentor</div>
					<div className='navbar__userProfile'>
						<img src={User} alt='' className='user_logo' />
						<span>ProfileName</span>
						<img src={ArrowDown} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
