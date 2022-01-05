import LogoIcon from '../../assets/logo.svg';

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
								<a className="current" href="/Settings">
									Book
								</a>
							</li>
							<li>
								<a href="/About">About</a>
							</li>
							<li>
								<a href="/About">Login</a>
							</li>
							<li>
								<a href="/About">Sing Up</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
