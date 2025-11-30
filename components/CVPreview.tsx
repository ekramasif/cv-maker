'use client';

import { CVData } from '@/types/cv';

interface CVPreviewProps {
  data: CVData;
}

export default function CVPreview({ data }: CVPreviewProps) {
  const { personalInfo, experiences, education, skills, projects, certifications, awards, languages } = data;

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
      <div className="px-12 py-10">
        {/* Three-Column Header - LaTeX Style */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 mb-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            {personalInfo.logo && (
              <img
                src={personalInfo.logo}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            )}
          </div>

          {/* Center: Name and Details */}
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {personalInfo.fullName?.toUpperCase() || 'YOUR NAME'}
            </h1>
            {personalInfo.program && (
              <div className="text-sm mb-0.5">{personalInfo.program}</div>
            )}
            {personalInfo.institute && (
              <div className="text-sm mb-0.5">{personalInfo.institute}</div>
            )}
            {personalInfo.location && (
              <div className="text-sm">{personalInfo.location}</div>
            )}
          </div>

          {/* Right: Contact Info with Icons */}
          <div className="text-right text-sm space-y-0.5 flex flex-col justify-center">
            {personalInfo.phone && (
              <div>☎ {personalInfo.phone}</div>
            )}
            {personalInfo.email && (
              <div>
                ✉ <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div>
                ⚙ <a href={personalInfo.github} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {personalInfo.github.replace('https://github.com/', '')}
                </a>
              </div>
            )}
            {personalInfo.linkedin && (
              <div>
                in <a href={personalInfo.linkedin} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {personalInfo.linkedin.replace('https://linkedin.com/in/', '').replace('https://www.linkedin.com/in/', '')}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Divider line after header */}
        <div className="border-t border-black my-3"></div>

        <div className="space-y-4">
          {/* Education Section */}
          {education.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold">{edu.institution}</div>
                      <div className="text-sm">{edu.location}</div>
                    </div>
                    <div className="flex justify-between items-baseline text-sm">
                      <div className="italic">
                        {edu.degree}{edu.field && ` in ${edu.field}`}
                      </div>
                      <div className="italic">
                        {formatDate(edu.startDate)} -- {edu.current ? 'Present' : formatDate(edu.endDate)}
                      </div>
                    </div>
                    {edu.gpa && (
                      <div className="text-sm italic">CGPA: {edu.gpa}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Professional Experience */}
          {experiences.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Experience
              </h2>
              <div className="space-y-3">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold">{exp.company}</div>
                      <div className="text-sm">{exp.location}</div>
                    </div>
                    <div className="flex justify-between items-baseline text-sm mb-1">
                      <div className="italic">{exp.position}</div>
                      <div className="italic">
                        {formatDate(exp.startDate)} -- {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span>•</span>
                          <span className="flex-1">{line.trim().replace(/^[•\-]\s*/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <div>
                        <span className="font-bold">{project.name}</span>
                        {project.technologies && (
                          <span className="text-sm italic"> | {project.technologies}</span>
                        )}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-sm hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      )}
                    </div>
                    <div className="text-sm space-y-1">
                      {project.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span>•</span>
                          <span className="flex-1">{line.trim().replace(/^[•\-]\s*/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Technical Skills
              </h2>
              <div className="space-y-1">
                {Object.entries(groupedSkills).map(([category, skillsList]) => (
                  <div key={category} className="text-sm">
                    <span className="font-bold">{category}</span>: {skillsList.join(', ')}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold">{cert.name}</span>
                      <span className="italic">{formatDate(cert.date)}</span>
                    </div>
                    <div className="italic">{cert.issuer}</div>
                    {cert.credentialId && (
                      <div className="text-xs">Credential ID: {cert.credentialId}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards & Achievements */}
          {awards.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Achievements
              </h2>
              <div className="space-y-1">
                {awards.map((award) => (
                  <div key={award.id} className="flex gap-2 text-sm">
                    <span>•</span>
                    <div className="flex-1">
                      <span className="font-bold">{award.title}</span> - {award.issuer} ({formatDate(award.date)})
                      {award.description && <div className="mt-0.5">{award.description}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase mb-2 border-b border-black pb-0.5">
                Languages
              </h2>
              <div className="text-sm">
                {languages.map((lang, idx) => (
                  <span key={lang.id}>
                    {lang.name} ({lang.proficiency}){idx < languages.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
