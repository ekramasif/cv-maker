'use client';

import { Project } from '@/types/cv';

interface ProjectsFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export default function ProjectsForm({ projects, onChange }: ProjectsFormProps) {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: '',
    };
    onChange([...projects, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    onChange(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const deleteProject = (id: string) => {
    onChange(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="border border-gray-300 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">
              {project.name || 'New Project'}
            </h3>
            <button
              onClick={() => deleteProject(project.id)}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name *
            </label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="My Awesome Project"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of the project and your role..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Used *
            </label>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Link
            </label>
            <input
              type="url"
              value={project.link || ''}
              onChange={(e) => updateProject(project.id, 'link', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/username/project"
            />
          </div>
        </div>
      ))}

      {projects.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No projects added yet. Click &quot;Add Project&quot; to get started.
        </div>
      )}
    </div>
  );
}
