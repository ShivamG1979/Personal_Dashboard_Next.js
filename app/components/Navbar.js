export default function Navbar({ 
  activeSection, 
  handleNavigation, 
  isMobile, 
  showMobileMenu, 
  toggleMobileMenu,
  theme,
  toggleTheme
}) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-brand" onClick={() => handleNavigation('profile')}>
          /*<img src="/logo-1.png" alt=" Logo" />*/
          <span>Personal Dashboard</span>
        </a>
        
        <div className="nav-controls">
          {isMobile && (
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {showMobileMenu ? '✕' : '☰'}
            </button>
          )}
        </div>
        
        <div className={`nav-links ${showMobileMenu ? 'show' : ''}`}>
          <button 
            className={activeSection === 'profile' ? 'active' : ''} 
            onClick={() => handleNavigation('profile')}
          >
            Profile
          </button>
          <button 
            className={activeSection === 'academics' ? 'active' : ''} 
            onClick={() => handleNavigation('academics')}
          >
            Academics
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => handleNavigation('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'achievements' ? 'active' : ''} 
            onClick={() => handleNavigation('achievements')}
          >
            Achievements
          </button>
          <button 
            className={activeSection === 'hobbies' ? 'active' : ''} 
            onClick={() => handleNavigation('hobbies')}
          >
            Hobbies
          </button>
        </div>
      </div>
    </nav>
  )
}
