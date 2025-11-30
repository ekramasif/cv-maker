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
      {/* Header Section with Background */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
        <div className="flex items-start gap-6">
          {personalInfo.logo && (
            <img
              src={personalInfo.logo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            {(personalInfo.program || personalInfo.institute) && (
              <div className="text-xl mb-3 opacity-95">
                {personalInfo.program}
                {personalInfo.program && personalInfo.institute && ' | '}
                {personalInfo.institute}
              </div>
            )}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {personalInfo.email && (
                <div>📧 {personalInfo.email}</div>
              )}
              {personalInfo.phone && (
                <div>📞 {personalInfo.phone}</div>
              )}
              {personalInfo.location && (
                <div>📍 {personalInfo.location}</div>
              )}
              {personalInfo.linkedin && (
                <div>
                  🔗{' '}
                  <a href={personalInfo.linkedin} className="hover:underline">
                    LinkedIn
                  </a>
                </div>
              )}
              {personalInfo.github && (
                <div>
                  💻{' '}
                  <a href={personalInfo.github} className="hover:underline">
                    GitHub
                  </a>
                </div>
              )}
              {personalInfo.website && (
                <div>
                  🌐{' '}
                  <a href={personalInfo.website} className="hover:underline">
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Core Competencies / Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Core Competencies
            </h2>
            <div className="space-y-2">
              {Object.entries(groupedSkills).map(([category, skillsList]) => (
                <div key={category} className="flex gap-2">
                  <span className="font-semibold text-gray-800 min-w-[150px]">
                    {category}:
                  </span>
                  <span className="text-gray-700 flex-1">
                    {skillsList.join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {experiences.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-gray-600 font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="text-lg font-semibold text-blue-600">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
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
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Technologies:</span> {project.technologies}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
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
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </h3>
                    <span className="text-sm text-gray-600 font-medium">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div className="text-base font-semibold text-blue-600">
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
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="border-l-4 border-blue-500 pl-3">
                  <div className="font-bold text-gray-900">{cert.name}</div>
                  <div className="text-sm text-gray-700">{cert.issuer}</div>
                  <div className="text-sm text-gray-600">
                    {formatDate(cert.date)}
                    {cert.credentialId && ` • ID: ${cert.credentialId}`}
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      className="text-xs text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Credential →
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
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Awards & Achievements
            </h2>
            <div className="space-y-2">
              {awards.map((award) => (
                <div key={award.id} className="flex gap-3">
                  <div className="text-blue-600 text-xl">🏆</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-gray-900">{award.title}</span>
                      <span className="text-sm text-gray-600">{formatDate(award.date)}</span>
                    </div>
                    <div className="text-sm text-gray-700">{award.issuer}</div>
                    <div className="text-sm text-gray-600">{award.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-200">
              Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map((lang) => (
                <div key={lang.id} className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{lang.name}</div>
                  <div className="text-sm text-gray-600">{lang.proficiency}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
