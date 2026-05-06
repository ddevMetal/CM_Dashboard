import { useState } from 'react'
import projects from './data/projects.json'
import Header from './components/Header'
import MetricCards from './components/MetricCards'
import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'
import NewProjectForm from './components/NewProjectForm'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="p-6">
        <MetricCards projects={projects} />
        <ProjectList projects={projects} onSelect={setSelectedProject} />
        <NewProjectForm />
      </main>
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
