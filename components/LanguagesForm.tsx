'use client';

import { Language } from '@/types/cv';

interface LanguagesFormProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

export default function LanguagesForm({ languages, onChange }: LanguagesFormProps) {
  const addLanguage = () => {
    const newLang: Language = {
      id: Date.now().toString(),
      name: '',
      proficiency: 'Intermediate',
    };
    onChange([...languages, newLang]);
  };

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    onChange(
      languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    );
  };

  const deleteLanguage = (id: string) => {
    onChange(languages.filter((lang) => lang.id !== id));
  };

  const proficiencyLevels = [
    'Native',
    'Fluent',
    'Advanced',
    'Intermediate',
    'Basic',
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
        <button
          onClick={addLanguage}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Language
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {languages.map((lang) => (
          <div key={lang.id} className="flex gap-2 items-start border border-gray-300 rounded-lg p-3">
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={lang.name}
                onChange={(e) => updateLanguage(lang.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Language name"
              />
              <select
                value={lang.proficiency}
                onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {proficiencyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => deleteLanguage(lang.id)}
              className="text-red-600 hover:text-red-700 mt-2"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {languages.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No languages added yet. Click &quot;Add Language&quot; to get started.
        </div>
      )}
    </div>
  );
}
