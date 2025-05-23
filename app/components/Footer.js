import personalData from '../data/personalData';

export default function Footer() {
  const { name } = personalData.profile;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
          <div className="footer-links">
            <a
              href="#"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              ⬆️ Back to Top
            </a>
            <a href="mailto:contact@example.com" className="footer-link">✉️ Contact</a>
            <a href="/privacy-policy.html" className="footer-link">🔒 Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
