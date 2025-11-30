'use client';

import { CVData } from '@/types/cv';

interface CVPreviewProps {
  data: CVData;
}

export default function CVPreview({ data }: CVPreviewProps) {
  const { personalInfo, experiences, education, skills, projects } = data;

  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="bg-white shadow-lg max-w-[8.5in] mx-auto latex-cv" id="cv-preview">
      <div className="p-8 space-y-4">
        {/* Three-Part Header */}
        <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-black">
          {/* Left: Logo */}
          <div className="flex items-start">
            {personalInfo.logo && (
              <img
                src={personalInfo.logo}
                alt="Institute Logo"
                className="h-16 w-16 object-contain"
              />
            )}
          </div>

          {/* Center: Name and Details */}
          <div className="text-center flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-1">
              {personalInfo.fullName || 'YOUR NAME'}
            </h1>
            {personalInfo.rollNo && (
              <div className="text-sm">{personalInfo.rollNo}</div>
            )}
            {personalInfo.program && (
              <div className="text-sm">{personalInfo.program}</div>
            )}
            {personalInfo.institute && (
              <div className="text-sm font-medium">{personalInfo.institute}</div>
            )}
          </div>

          {/* Right: Contact */}
          <div className="text-right text-sm flex flex-col justify-center space-y-0.5">
            {personalInfo.phone && (
              <div>📞 {personalInfo.phone}</div>
            )}
            {personalInfo.email && (
              <div>
                ✉ <a href={`mailto:${personalInfo.email}`} className="text-black hover:underline">
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo.linkedin && (
              <div>
                🔗 <a href={personalInfo.linkedin} className="text-black hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div>
                💻 <a href={personalInfo.github} className="text-black hover:underline">
                  GitHub
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Education Section */}
        {education.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-2 border-b border-black pb-0.5 tracking-wide">
              EDUCATION
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold">
                      {edu.institution}
                    </div>
                    <div className="text-right">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <div className="italic">
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </div>
                    <div>
                      {edu.gpa && `CGPA: ${edu.gpa}`}
                    </div>
                  </div>
                  {edu.location && (
                    <div className="text-gray-700">{edu.location}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className="text-base font-bold mb-2 border-b border-black pb-0.5 tracking-wide">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience Section */}
        {experiences.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-2 border-b border-black pb-0.5 tracking-wide">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold">
                      {exp.company}
                    </div>
                    <div className="text-right">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <div className="italic">
                      {exp.position}
                    </div>
                    <div className="text-gray-700">
                      {exp.location}
                    </div>
                  </div>
                  <div className="mt-1 text-justify whitespace-pre-line leading-relaxed">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-2 border-b border-black pb-0.5 tracking-wide">
              PROJECTS
            </h2>
            <div className="space-y-2.5">
              {projects.map((project) => (
                <div key={project.id} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold">
                      {project.name}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-black hover:underline text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [Link]
                      </a>
                    )}
                  </div>
                  <div className="italic text-xs mt-0.5">
                    Tools & Technologies: {project.technologies}
                  </div>
                  <div className="mt-1 text-justify leading-relaxed">
                    {project.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Skills Section */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-2 border-b border-black pb-0.5 tracking-wide">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-sm">
              {Object.entries(groupedSkills).map(([category, skillsList]) => (
                <div key={category} className="flex">
                  <span className="font-bold min-w-[120px]">{category}:</span>
                  <span className="flex-1">{skillsList.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
