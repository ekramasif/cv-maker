'use client';

import { Skill } from '@/types/cv';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      category: 'Technical',
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    onChange(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const deleteSkill = (id: string) => {
    onChange(skills.filter((skill) => skill.id !== id));
  };

  const categories = ['Technical', 'Languages', 'Soft Skills', 'Tools', 'Other'];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div key={skill.id} className="flex gap-2 items-start border border-gray-300 rounded-lg p-3">
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Skill name"
              />
              <select
                value={skill.category}
                onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => deleteSkill(skill.id)}
              className="text-red-600 hover:text-red-700 mt-2"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {skills.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No skills added yet. Click &quot;Add Skill&quot; to get started.
        </div>
      )}
    </div>
  );
}
