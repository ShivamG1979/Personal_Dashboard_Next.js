import personalData from '../data/personalData';

export default function Academics() {
  const academics = personalData.academics;
  
  return (
    <div className="academics-section">
      <h2 className="section-title">
        <img src="/icons/education.svg" alt="Education icon" />
        Education & Experience
      </h2>
      
      <div className="education-list">
        {academics.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-year">
              {item.year}
            </div> 
            <div className="education-details">
              <h3>{item.degree}</h3>
              <p><strong>{item.institution}</strong></p>
              <p>{item.description}</p>
              {item.achievements && (
                <ul className="education-achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>   
        ))}
      </div>
    </div>
  );
}