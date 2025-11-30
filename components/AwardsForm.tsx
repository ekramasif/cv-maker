'use client';

import { Award } from '@/types/cv';

interface AwardsFormProps {
  awards: Award[];
  onChange: (awards: Award[]) => void;
}

export default function AwardsForm({ awards, onChange }: AwardsFormProps) {
  const addAward = () => {
    const newAward: Award = {
      id: Date.now().toString(),
      title: '',
      issuer: '',
      date: '',
      description: '',
    };
    onChange([...awards, newAward]);
  };

  const updateAward = (id: string, field: keyof Award, value: string) => {
    onChange(
      awards.map((award) =>
        award.id === id ? { ...award, [field]: value } : award
      )
    );
  };

  const deleteAward = (id: string) => {
    onChange(awards.filter((award) => award.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Awards & Achievements</h2>
        <button
          onClick={addAward}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Award
        </button>
      </div>

      {awards.map((award) => (
        <div key={award.id} className="border border-gray-300 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">
              {award.title || 'New Award'}
            </h3>
            <button
              onClick={() => deleteAward(award.id)}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Award Title *
              </label>
              <input
                type="text"
                value={award.title}
                onChange={(e) => updateAward(award.id, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Employee of the Year"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issuing Organization *
              </label>
              <input
                type="text"
                value={award.issuer}
                onChange={(e) => updateAward(award.id, 'issuer', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Received *
            </label>
            <input
              type="month"
              value={award.date}
              onChange={(e) => updateAward(award.id, 'date', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={award.description}
              onChange={(e) => updateAward(award.id, 'description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of the achievement..."
            />
          </div>
        </div>
      ))}

      {awards.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No awards added yet. Click &quot;Add Award&quot; to get started.
        </div>
      )}
    </div>
  );
}
