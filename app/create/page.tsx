'use client';

import { useState } from 'react';
import PersonalInfoForm from '@/components/PersonalInfoForm';
import ExperienceForm from '@/components/ExperienceForm';
import EducationForm from '@/components/EducationForm';
import SkillsForm from '@/components/SkillsForm';
import ProjectsForm from '@/components/ProjectsForm';
import CertificationsForm from '@/components/CertificationsForm';
import AwardsForm from '@/components/AwardsForm';
import LanguagesForm from '@/components/LanguagesForm';
import CVPreview from '@/components/CVPreview';
import { CVData, initialCVData } from '@/types/cv';

export default function Home() {
  const [cvData, setCVData] = useState<CVData>(initialCVData);
  const [activeTab, setActiveTab] = useState<string>('personal');

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = JSON.stringify(cvData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cv-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          setCVData(data);
        } catch (error) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' },
    { id: 'languages', label: 'Languages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm no-print sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">CV Maker</h1>
            <div className="flex gap-3">
              <label className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 cursor-pointer transition-colors">
                Load JSON
                <input
                  type="file"
                  accept=".json"
                  onChange={handleLoadJSON}
                  className="hidden"
                />
              </label>
              <button
                onClick={handleDownloadJSON}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Save JSON
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Print / Export PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="no-print">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
                {activeTab === 'personal' && (
                  <PersonalInfoForm
                    data={cvData.personalInfo}
                    onChange={(personalInfo) =>
                      setCVData({ ...cvData, personalInfo })
                    }
                  />
                )}

                {activeTab === 'experience' && (
                  <ExperienceForm
                    experiences={cvData.experiences}
                    onChange={(experiences) =>
                      setCVData({ ...cvData, experiences })
                    }
                  />
                )}

                {activeTab === 'education' && (
                  <EducationForm
                    education={cvData.education}
                    onChange={(education) =>
                      setCVData({ ...cvData, education })
                    }
                  />
                )}

                {activeTab === 'skills' && (
                  <SkillsForm
                    skills={cvData.skills}
                    onChange={(skills) =>
                      setCVData({ ...cvData, skills })
                    }
                  />
                )}

                {activeTab === 'projects' && (
                  <ProjectsForm
                    projects={cvData.projects}
                    onChange={(projects) =>
                      setCVData({ ...cvData, projects })
                    }
                  />
                )}

                {activeTab === 'certifications' && (
                  <CertificationsForm
                    certifications={cvData.certifications}
                    onChange={(certifications) =>
                      setCVData({ ...cvData, certifications })
                    }
                  />
                )}

                {activeTab === 'awards' && (
                  <AwardsForm
                    awards={cvData.awards}
                    onChange={(awards) =>
                      setCVData({ ...cvData, awards })
                    }
                  />
                )}

                {activeTab === 'languages' && (
                  <LanguagesForm
                    languages={cvData.languages}
                    onChange={(languages) =>
                      setCVData({ ...cvData, languages })
                    }
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="mb-4 no-print">
              <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
              <p className="text-sm text-gray-600">
                This is how your CV will look when printed or exported to PDF
              </p>
            </div>
            <CVPreview data={cvData} />
          </div>
        </div>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }

          .no-print {
            display: none !important;
          }

          main {
            display: block !important;
            max-width: none !important;
            padding: 0 !important;
          }

          #cv-preview {
            max-width: none !important;
            box-shadow: none !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
