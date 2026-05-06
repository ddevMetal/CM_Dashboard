function ProjectCard({ project, onSelect }) {

  const statusColors = {
    'live': 'bg-green-900 text-green-400',
    'in-progress': 'bg-yellow-900 text-yellow-400',
    'planned': 'bg-blue-900 text-blue-400',
  }

  const badgeColor = statusColors[project.status] || 'bg-gray-800 text-gray-400'

  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-gray-900 border border-gray-800 rounded-lg p-4 cursor-pointer hover:border-gray-600 transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white font-semibold">{project.name}</h2>
        <span className={`text-xs px-2 py-1 rounded-full ${badgeColor}`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-3">{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.stack.map(tech => (
          <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
