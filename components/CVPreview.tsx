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
    <div className="bg-white shadow-lg max-w-[8.5in] mx-auto" id="cv-preview">
      <div className="p-8 space-y-6">
        {/* Personal Info Header */}
        <div className="border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>•</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>•</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
            {personalInfo.website && personalInfo.linkedin && <span>•</span>}
            {personalInfo.website && (
              <a href={personalInfo.website} className="text-blue-600 hover:underline">
                Website
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    {exp.location && <span> • {exp.location}</span>}
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">{edu.degree}</span>
                    {edu.field && <span> in {edu.field}</span>}
                    {edu.location && <span> • {edu.location}</span>}
                    {edu.gpa && <span> • GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
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

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Skills
            </h2>
            <div className="space-y-2">
              {Object.entries(groupedSkills).map(([category, skillsList]) => (
                <div key={category} className="text-sm">
                  <span className="font-semibold text-gray-900">{category}:</span>{' '}
                  <span className="text-gray-700">{skillsList.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
