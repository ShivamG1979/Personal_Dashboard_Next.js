import personalData from '../data/personalData';

export default function Hobbies() {
  const hobbies = personalData.hobbies;
  
  return (
    <div className="hobbies-section">
      <h2 className="section-title">
        <img src="/icons/hobbies.svg" alt="Hobbies icon" />
        Hobbies & Interests
      </h2>
      
      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">
              {getHobbyIcon(hobby.name)}
            </div>
            <div className="hobby-content">
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to get icon based on hobby name
function getHobbyIcon(hobbyName) {
  // These would be replaced by actual SVG icons in a real implementation
  switch(hobbyName.toLowerCase()) {
    case 'photography':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      );
    case 'reading':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      );
    case 'hiking':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2h-4v6h4V2zm-2 14v7m-2-8l-7-3 7-3v6zm4 0l7-3-7-3v6z"></path>
        </svg>
      );
    case 'playing guitar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      );
    case 'cooking':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6V13.87Z"></path>
          <line x1="6" y1="17" x2="18" y2="17"></line>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      );
  }
}