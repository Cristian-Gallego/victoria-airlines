import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logo.svg';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="menu">
					<div className="logo">
						<img src={LogoIcon} width="35px" height="35px" alt="logo" />
						<a href="/">Victoria Airlines</a>
					</div>
					<div className="navbar-menu">
						<ul>
							<li>
								<Link to="/" className="current link home-size">
									Home
								</Link>
							</li>
							<li>
								<Link to="/book" className="link book-size">
									Book
								</Link>
							</li>
							<li>
								<Link to="/about" className="link about-size">
									About
								</Link>
							</li>
							<li>
								<Link to="/sign-up" className="link sign-up-size">
									Sign Up
								</Link>
							</li>
							<li>
								<Link to="/sign-in" className="link sign-in-size">
									Sign In
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
