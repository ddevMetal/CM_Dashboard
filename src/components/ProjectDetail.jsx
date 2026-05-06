function ProjectDetail({ project, onClose }) {
  if (!project) return null

  const statusColors = {
    'complete': 'text-green-400',
    'in-progress': 'text-yellow-400',
    'planned': 'text-blue-400',
    'blocked-v2': 'text-red-400',
  }

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-1/2 bg-gray-900 border-l border-gray-800 p-6 overflow-y-auto z-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">{project.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white text-sm border border-gray-700 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>

      <p className="text-gray-400 text-sm mb-6">{project.description}</p>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Stack</p>
        <div className="flex gap-2 flex-wrap">
          {project.stack.map(tech => (
            <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Machine</p>
        <p className="text-sm text-gray-300">{project.machine}</p>
      </div>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Endpoints</p>
        {project.endpoints.map(url => (
          <a key={url} href={url} target="_blank"
            className="block text-sm text-blue-400 hover:underline mb-1">
            {url}
          </a>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Phases</p>
        {project.phases.map(p => (
          <div key={p.phase} className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-600 w-6">#{p.phase}</span>
            <span className="text-sm text-gray-300 flex-1">{p.name}</span>
            <span className={`text-xs ${statusColors[p.status] || 'text-gray-500'}`}>
              {p.status}
            </span>
          </div>
        ))}
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Notes</p>
        <p className="text-sm text-gray-400">{project.notes}</p>
      </div>
    </div>
  )
}

export default ProjectDetail
