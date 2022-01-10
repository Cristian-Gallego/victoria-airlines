import { Link } from 'react-router-dom';

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
								<Link to="/about" className="footer-link">
									About
								</Link>
							</li>
							<li>
								<Link to="/victoria-miles" className="footer-link">
									Victoria Miles
								</Link>
							</li>
							<li>
								<Link to="/careers" className="footer-link">
									Careers
								</Link>
							</li>
						</ul>
					</div>

					<div className="information">
						<h3>Useful Information</h3>
						<ul>
							<li>
								<Link to="/destinations" className="footer-link">
									Destinations
								</Link>
							</li>
							<li>
								<Link to="/sitemap" className="footer-link">
									Sitemap
								</Link>
							</li>
						</ul>
					</div>

					<div className="support">
						<h3>Customer Support</h3>
						<ul>
							<li>
								<Link to="/faq" className="footer-link">
									FAQ / Help
								</Link>
							</li>
							<li>
								<Link to="/refunds" className="footer-link">
									Refunds / Compensation
								</Link>
							</li>
						</ul>
					</div>

					<div className="legal">
						<h3>Legal</h3>
						<ul>
							<li>
								<Link to="/legal-notice" className="footer-link">
									Legal Notice
								</Link>
							</li>
							<li>
								<Link to="/terms-of-use" className="footer-link">
									Terms of Use
								</Link>
							</li>
							<li>
								<Link to="/privacy-policy" className="footer-link">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="copyright">
					<small>Designed & Developed by Cristian Gallego</small>
					<small>&copy; 2022 - Victoria Airlines</small>
					<div className="icons">
						<a href="https://github.com/" target="_blank" rel="noreferrer">
							<img
								src={GithubIcon}
								width="25px"
								height="25px"
								alt="github"
								className="github-icon"
							/>
						</a>
						<a href="https://linkedin.com/" target="_blank" rel="noreferrer">
							<img
								src={LinkedInIcon}
								width="20px"
								height="20px"
								alt="github"
								className="linkedin-icon"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
