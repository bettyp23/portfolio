class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: rgba(11, 23, 39, 0.9);
          color: white;
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #3a86ff, #8338ec);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }
        .footer-links h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #3a86ff;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #b8c2cc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #3a86ff;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          background: rgba(255,255,255,0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: #3a86ff;
          transform: translateY(-3px);
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #6b7280;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-container">
        <div class="footer-about">
          <div class="footer-logo">
            <i data-feather="cpu"></i> BP
          </div>
          <p>Building secure, AI-powered defense solutions for tomorrow's challenges.</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="Email"><i data-feather="mail"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>Technologies</h3>
          <ul>
            <li><a href="#">AI Integration</a></li>
            <li><a href="#">Embedded Systems</a></li>
            <li><a href="#">Cybersecurity</a></li>
            <li><a href="#">Machine Learning</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:betty.phipps@example.com">betty.phipps@example.com</a></li>
            <li><a href="#">LinkedIn Profile</a></li>
            <li><a href="#">GitHub Profile</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        &copy; 2025 Betty Phipps. All rights reserved.
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);