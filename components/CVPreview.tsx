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
    <div className="bg-white shadow-lg max-w-[8.5in] mx-auto professional-cv" id="cv-preview">
      <div className="p-12">
        {/* Header Section - Simple and Clean */}
        <div className="text-center pb-6 mb-6 border-b-2 border-gray-900">
          {personalInfo.logo && (
            <img
              src={personalInfo.logo}
              alt="Profile"
              className="w-24 h-24 mx-auto mb-4 object-cover"
            />
          )}

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInfo.fullName || 'Your Name'}
          </h1>

          {(personalInfo.program || personalInfo.institute) && (
            <div className="text-lg text-gray-700 mb-3">
              {personalInfo.program}
              {personalInfo.program && personalInfo.institute && ' | '}
              {personalInfo.institute}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>•</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>•</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-1">
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="hover:underline">
                LinkedIn
              </a>
            )}
            {personalInfo.github && personalInfo.linkedin && <div>•</div>}
            {personalInfo.github && (
              <a href={personalInfo.github} className="hover:underline">
                GitHub
              </a>
            )}
            {personalInfo.website && (personalInfo.linkedin || personalInfo.github) && <div>•</div>}
            {personalInfo.website && (
              <a href={personalInfo.website} className="hover:underline">
                Website
              </a>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Core Competencies / Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Core Competencies
              </h2>
              <div className="space-y-1.5">
                {Object.entries(groupedSkills).map(([category, skillsList]) => (
                  <div key={category} className="flex gap-2 text-sm">
                    <span className="font-semibold text-gray-900 min-w-[140px]">
                      {category}:
                    </span>
                    <span className="text-gray-700 flex-1">
                      {skillsList.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Experience */}
          {experiences.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="text-base font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-gray-600">
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <div className="text-sm font-semibold text-gray-700">
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-600">
                        {exp.location}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Key Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-bold text-gray-900">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-xs text-gray-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link →
                        </a>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Technologies:</span> {project.technologies}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-bold text-gray-900">
                        {edu.degree}{edu.field && ` in ${edu.field}`}
                      </h3>
                      <span className="text-sm text-gray-600">
                        {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm font-semibold text-gray-700">
                        {edu.institution}
                      </div>
                      <div className="text-sm text-gray-600">
                        {edu.gpa && `GPA: ${edu.gpa}`}
                      </div>
                    </div>
                    {edu.location && (
                      <div className="text-sm text-gray-600">{edu.location}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <div className="font-bold text-sm text-gray-900">{cert.name}</div>
                    <div className="text-xs text-gray-700">{cert.issuer}</div>
                    <div className="text-xs text-gray-600">
                      {formatDate(cert.date)}
                      {cert.credentialId && ` • ID: ${cert.credentialId}`}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="text-xs text-gray-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards & Achievements */}
          {awards.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Awards & Achievements
              </h2>
              <div className="space-y-2">
                {awards.map((award) => (
                  <div key={award.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-sm text-gray-900">{award.title}</span>
                      <span className="text-xs text-gray-600">{formatDate(award.date)}</span>
                    </div>
                    <div className="text-xs text-gray-700">{award.issuer}</div>
                    <div className="text-xs text-gray-600">{award.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Languages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {languages.map((lang) => (
                  <div key={lang.id} className="text-sm">
                    <span className="font-semibold text-gray-900">{lang.name}</span>
                    <span className="text-gray-600"> - {lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
