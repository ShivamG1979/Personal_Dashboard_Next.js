import personalData from '../data/personalData';

export default function Profile() {
  const { name, title, bio, image, contact } = personalData.profile;
  
  return (
    <div className="profile">
      <h2 className="section-title">
        <img src="/icons/profile.svg" alt="Profile icon" />
        About Me
      </h2>
      
      <div className="profile-content">
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          className="profile-image"
        />
        
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        
        <div className="contact-item">
          <span>📱</span>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </div>
        
        <div className="contact-item">
          <span>📍</span>
          <span>{contact.location}</span>
        </div>
        
        <div className="contact-item">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </span>
          <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer">
            @{contact.github}
          </a>
        </div>
        
        <div className="contact-item">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </span>
          <a href={`https://linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer">
            @{contact.linkedin}
          </a>
        </div>
      </div>
      
      <div className="profile-cta">
        <a href="/resume.pdf" className="download-resume" download>
          Download Resume
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}