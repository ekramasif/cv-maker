'use client';

import { Experience } from '@/types/cv';
import { useState } from 'react';

interface ExperienceFormProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export default function ExperienceForm({ experiences, onChange }: ExperienceFormProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange([...experiences, newExp]);
    setEditingId(newExp.id);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const deleteExperience = (id: string) => {
    onChange(experiences.filter((exp) => exp.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Experience
        </button>
      </div>

      {experiences.map((exp) => (
        <div key={exp.id} className="border border-gray-300 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">
              {exp.position || 'New Experience'}
            </h3>
            <button
              onClick={() => deleteExperience(exp.id)}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position *
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company *
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tech Corp"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="San Francisco, CA"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date *
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id={`current-${exp.id}`}
              checked={exp.current}
              onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={`current-${exp.id}`} className="ml-2 text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="• Achieved X by doing Y&#10;• Led team of Z engineers&#10;• Improved performance by N%"
            />
          </div>
        </div>
      ))}

      {experiences.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No work experience added yet. Click &quot;Add Experience&quot; to get started.
        </div>
      )}
    </div>
  );
}
