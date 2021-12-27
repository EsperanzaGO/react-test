import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
		return (
			<div className="footer-container">
				<section className="footer-subscription">
					<p className="footer-subscription-heading">
					jdfjfkndfj djksjfpj oejkfdokfpk ofksopdkdof dkfop kdokdf
					</p>
					<p className="footer-subscription-text">
					dksodksokdsodkods d dssdods dsokds dodskosdpfkfo
					</p>
					<div className="input-areas">
						<form>
							<input 
								type="email" 
								name="email" 
								placeholder="Correo" 
								className="footer-input"
							/>
							<Button buttonStyle="btn--outline">Suscribirse</Button>
						</form>
					</div>
				</section>
				<div className="footer-links">
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>Sobre nosotros</h2>
							<Link to="/sign-up">:D</Link>
							<Link to="/">Testimonios</Link>
							<Link to="/">Cursos</Link>
							<Link to="/">Términos de servicio</Link>
							<Link to="/">Ni idea</Link>
						</div>
						<div className="footer-link-items">
							<h2>Contáctanos</h2>
							<Link to="/sign-up">:D</Link>
							<Link to="/">Testimonios</Link>
							<Link to="/">Cursos</Link>
							<Link to="/">Términos de servicio</Link>
							<Link to="/">Ni idea</Link>
						</div>
					</div>
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>Videos</h2>
							<Link to="/sign-up">:D</Link>
							<Link to="/">Testimonios</Link>
							<Link to="/">Cursos</Link>
							<Link to="/">Términos de servicio</Link>
							<Link to="/">Ni idea</Link>
						</div>
						<div className="footer-link-items">
							<h2>Redes sociales</h2>
							<Link to="/sign-up">Instagram</Link>
							<Link to="/">Facebook</Link>
							<Link to="/">Youtube</Link>
							<Link to="/">Twitter</Link>
						</div>
					</div>
				</div>
				<section className="social-media">
					<div className="social-media-wrap">
						<div className="footer-logo">
							<Link to="/" className="social-logo">
									SHIBA <i className="fas fa-paw"/>
							</Link>
						</div>
						<small className="website-rights">SHIBA  © 2021</small>
						<div className="social-icons">
							<Link 
								className="social-icon-link facebook"
								to="/"
								target="_blank"
								aria-label="Facebook"
							>
								<i className="fab fa-facebook-f"></i>
							</Link>
							<Link 
								className="social-icon-link instagram"
								to="/"
								target="_blank"
								aria-label="Instagram"
							>
								<i className="fab fa-instagram"></i>
							</Link>
							<Link 
								className="social-icon-link twitter"
								to="/"
								target="_blank"
								aria-label="Twitter"
							>
								<i className="fab fa-twitter"></i>
							</Link>
							<Link 
								className="social-icon-link youtube"
								to="/"
								target="_blank"
								aria-label="Youtube"
							>
								<i className="fab fa-youtube"></i>
							</Link>
							<Link 
								className="social-icon-link linkedin"
								to="/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin"></i>
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
}

export default Footer
