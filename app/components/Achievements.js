import personalData from '../data/personalData';

export default function Achievements() {
  const achievements = personalData.achievements || [];
  
  return (
    <div className="achievements-section">
      <h2 className="section-title">
        <img src="/icons/achievements.svg" alt="Achievements icon" />
        Achievements & Certifications
      </h2>
      
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-year">{achievement.year}</p>
            <p className="achievement-description">{achievement.description}</p>
            {achievement.url && (
              <a 
                href={achievement.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}