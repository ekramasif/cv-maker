'use client';

import { Education } from '@/types/cv';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationForm({ education, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
    };
    onChange([...education, newEdu]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    onChange(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const deleteEducation = (id: string) => {
    onChange(education.filter((edu) => edu.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Education
        </button>
      </div>

      {education.map((edu) => (
        <div key={edu.id} className="border border-gray-300 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">
              {edu.degree || 'New Education'}
            </h3>
            <button
              onClick={() => deleteEducation(edu.id)}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution *
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="University of Example"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree *
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Bachelor of Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study *
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Computer Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Boston, MA"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date *
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                disabled={edu.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GPA
              </label>
              <input
                type="text"
                value={edu.gpa || ''}
                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="3.8/4.0"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id={`current-edu-${edu.id}`}
              checked={edu.current}
              onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={`current-edu-${edu.id}`} className="ml-2 text-sm text-gray-700">
              Currently enrolled
            </label>
          </div>
        </div>
      ))}

      {education.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No education added yet. Click &quot;Add Education&quot; to get started.
        </div>
      )}
    </div>
  );
}
