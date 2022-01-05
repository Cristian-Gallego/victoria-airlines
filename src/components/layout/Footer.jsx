import GithubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="links">
					<div className="about">
						<h3>About Victoria Airlines</h3>
						<ul>
							<li>
								<a href="/">About Us</a>
							</li>
							<li>
								<a href="/">Careers</a>
							</li>
						</ul>
					</div>

					<div className="info">
						<h3>Useful Information</h3>
						<ul>
							<li>
								<a href="/">Destinations</a>
							</li>
							<li>
								<a href="/">Sitemap</a>
							</li>
						</ul>
					</div>

					<div className="support">
						<h3>Customer Support</h3>
						<ul>
							<li>
								<a href="/">FAQ / Help</a>
							</li>
							<li>
								<a href="/">Refunds / Compensation</a>
							</li>
						</ul>
					</div>

					<div className="legal">
						<h3>Legal</h3>
						<ul>
							<li>
								<a href="/">Legal notice</a>
							</li>
							<li>
								<a href="/">Terms of use</a>
							</li>
							<li>
								<a href="/">Cookie Policy </a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="copyright">
					<small>Designed & Developed by Cristian Gallego</small>
					<small>&copy; 2022 - Victoria Airlines</small>
					<div className="icons">
						<img
							src={GithubIcon}
							width="25px"
							height="25px"
							alt="github"
							className="github-icon"
						/>
						<img
							src={LinkedInIcon}
							width="20px"
							height="20px"
							alt="github"
							className="linkedin-icon"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
