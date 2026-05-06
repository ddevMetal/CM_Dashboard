import { useState } from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({ projects, onSelect }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = projects.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || p.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div>
      <div className="flex gap-3 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-gray-900 border border-gray-800 text-white text-sm rounded px-3 py-2 flex-1"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="bg-gray-900 border border-gray-800 text-white text-sm rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option value="live">Live</option>
          <option value="in-progress">In Progress</option>
          <option value="planned">Planned</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
