import personalData from '../data/personalData';

export default function Skills() {
  const skills = personalData.skills;
  
  // Group skills by level
  const advancedSkills = skills.filter(skill => skill.level === 'Advanced');
  const intermediateSkills = skills.filter(skill => skill.level === 'Intermediate');
  const basicSkills = skills.filter(skill => skill.level === 'Basic');
  
  return (
    <div className="skills-section">
      <h2 className="section-title">
        <img src="/icons/skills.svg" alt="Skills icon" />
        Technical Skills
      </h2>
      
      <div className="skills-group">
        <h3 className="section-subtitle">
          <span className="skill-level-dot advanced"></span>
          Advanced
        </h3>
        <div className="skills-container">
          {advancedSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-group">
        <h3 className="section-subtitle">
          <span className="skill-level-dot intermediate"></span>
          Intermediate
        </h3>
        <div className="skills-container">
          {intermediateSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-group">
        <h3 className="section-subtitle">
          <span className="skill-level-dot basic"></span>
          Basic
        </h3>
        <div className="skills-container">
          {basicSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}