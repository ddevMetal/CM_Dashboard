import { useState } from 'react'

function NewProjectForm() {
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [machine, setMachine] = useState('GitHub Pages')
  const [projectType, setProjectType] = useState('real-world')
  const [mode, setMode] = useState('hand-held')
  const [category, setCategory] = useState('Utility Tool')
  const [agent, setAgent] = useState('Agent Dev')
  const [checklist, setChecklist] = useState(null)

  function handleSubmit() {
    if (!name) return
    setChecklist({ name, stack, machine, projectType, mode, category, agent })
  }

  function buildChecklist(c) {
    var warn = c.stack ? '' : '# WARNING: Stack is empty — fill in before running\n\n'
    return warn + [
      '# PROJECT INFO',
      '# Name:     ' + c.name,
      '# Stack:    ' + (c.stack || 'NOT SET'),
      '# Machine:  ' + c.machine,
      '# Type:     ' + c.projectType,
      '# Mode:     ' + c.mode,
      '# Category: ' + c.category,
      '# Agent:    ' + c.agent,
      '',
      '# Step 1 - Create GitHub repo',
      'gh repo create ' + c.name + ' --private',
      '',
      '# Step 2 - Scaffold locally on Machine 1',
      'cd ~/Git',
      'mkdir ' + c.name,
      'cd ' + c.name,
      'git init',
      'git remote add origin https://github.com/ddevMetal/' + c.name + '.git',
      '',
      '# Step 3 - Create folder structure',
      'mkdir -p docs src .github/workflows',
      '',
      '# Step 4 - Create .gitignore BEFORE first commit',
      'echo "node_modules/" > .gitignore',
      'echo ".env" >> .gitignore',
      'echo "dist/" >> .gitignore',
      'echo "*.log" >> .gitignore',
      '',
      '# Step 5 - Add CI/CD placeholder content',
      'cat > .github/workflows/ci.yml << \'CIEOF\'',
      'name: CI Pipeline',
      'on:',
      '  push:',
      '    branches: [ main, dev ]',
      'jobs:',
      '  placeholder:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - run: echo "CI pipeline placeholder"',
      'CIEOF',
      '',
      'cat > .github/workflows/cd.yml << \'CDEOF\'',
      'name: CD Pipeline',
      'on: [workflow_dispatch]',
      'jobs:',
      '  placeholder:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - run: echo "CD pipeline placeholder"',
      'CDEOF',
      '',
      '# Step 6 - Copy shared docs from devops_meng',
      'cp ~/Git/devops_meng/docs/conventions.md docs/',
      'cp ~/Git/devops_meng/docs/consideration_for_design.md docs/',
      'cp ~/Git/devops_meng/docs/dev_environment.md docs/',
      'cp ~/Git/devops_meng/docs/agent_config.md docs/',
      'cp ~/Git/devops_meng/docs/security.md docs/',
      '',
      '# Step 7 - Create handoff.md',
      'cp ~/Git/devops_meng/docs/handoff.md docs/handoff_main_to_' + c.name + '.md',
      '',
      '# Step 8 - Create empty project-specific files',
      'touch docs/context.md docs/project_objective.md docs/architecture.md',
      '',
      '# Step 9 - Create Dockerfile and docker-compose.yml',
      'touch Dockerfile docker-compose.yml',
      '',
      '# Step 10 - Create README.md',
      'echo "# ' + c.name + '" > README.md',
      'echo "" >> README.md',
      'echo "> Platform: CM_theBuilder" >> README.md',
      'echo "> Stack: ' + (c.stack || 'TBD') + '" >> README.md',
      'echo "> Machine: ' + c.machine + '" >> README.md',
      'echo "> Agent: ' + c.agent + '" >> README.md',
      '',
      '# Step 11 - Create n-security.md',
      'cat > docs/n-security.md << \'SECEOF\'',
      '# n-security.md',
      '> Inherits from: main — security.md',
      '> Project: ' + c.name,
      '> All rules from main/security.md apply.',
      '> Project-specific additions below only.',
      '',
      '## Known Gaps',
      '| # | Gap | Priority |',
      '|---|---|---|',
      '| — | None identified yet | — |',
      'SECEOF',
      '',
      '# Step 12 - Create ROADMAP.md',
      'cat > ROADMAP.md << \'RMEOF\'',
      '# ROADMAP.md',
      '> Project: ' + c.name,
      '> Platform: CM_theBuilder',
      '> Category: ' + c.category,
      '> Machine: ' + c.machine,
      '> Stack: ' + (c.stack || 'TBD'),
      '> Type: ' + c.projectType,
      '> Mode: ' + c.mode,
      '> Agent: ' + c.agent,
      '> Status: 🟡 In Progress',
      '',
      '## Build Phases',
      '| Phase | What | Status |',
      '|---|---|---|',
      '| Phase 0 | Scaffold | 🟡 In Progress |',
      '| Phase 1 | project_objective.md | 🔵 Planned |',
      '| Phase 2 | architecture.md | 🔵 Planned |',
      '| Phase 3 | Core build | 🔵 Planned |',
      '| Phase 4 | Testing | 🔵 Planned |',
      '| Phase 5 | CI/CD pipeline | 🔵 Planned |',
      '| Phase 6 | Deployment | 🔵 Planned |',
      '| Phase 7 | Close-out + docs | 🔵 Planned |',
      '',
      '## Links',
      '| Resource | URL |',
      '|---|---|',
      '| This repo | https://github.com/ddevMetal/' + c.name + ' |',
      '| CM_theBuilder | https://github.com/ddevMetal/devops_meng |',
      'RMEOF',
      '',
      '# Step 13 - First commit and push',
      'git add -A',
      'git commit -m "init: ProjectBuilder scaffold"',
      'git branch -M main',
      'git push -u origin main',
      '',
      '# Step 14 - Tag repo as active',
      'gh repo edit ' + c.name + ' --add-topic active',
      '',
      '# Step 15 - Update devops_meng ROADMAP.md',
      'cd ~/Git/devops_meng',
      'nano ROADMAP.md',
      '# Add this line to the Project Registry table:',
      '# | `' + c.name + '` | ' + c.category + ' | 🔵 Planned | ' + c.machine + ' | None yet |',
      '# Set status to Planned',
      'git add -A',
      'git commit -m "update: add ' + c.name + ' to registry"',
      'git push',
      'cd ~/Git/' + c.name,
      '',
      '# Assigned agent: ' + c.agent,
      '# Mode: ' + c.mode,
      '# Type: ' + c.projectType,
    ].join('\n')
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8">
      <h2 className="text-white font-bold text-lg mb-4">New Project</h2>
      <div className="flex flex-col gap-4 mb-4">
        <input type="text" placeholder="Project name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2" />
        <input type="text" placeholder="Stack (e.g. React, Node.js)" value={stack} onChange={e => setStack(e.target.value)} className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2" />
        <select value={machine} onChange={e => setMachine(e.target.value)} className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2">
          <option value="GitHub Pages">GitHub Pages</option>
          <option value="Machine 2 - Fedora">Machine 2 - Fedora</option>
        </select>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Project Type</p>
          <div className="flex gap-4">
            {['real-world', 'experimental'].map(type => (
              <label key={type} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input type="radio" value={type} checked={projectType === type} onChange={e => setProjectType(e.target.value)} />
                {type === 'real-world' ? 'Real World' : 'Experimental'}
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Mode</p>
          <div className="flex gap-4">
            {['automated', 'hand-held'].map(m => (
              <label key={m} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input type="radio" value={m} checked={mode === m} onChange={e => setMode(e.target.value)} />
                {m === 'automated' ? 'Automated' : 'Hand-held'}
              </label>
            ))}
          </div>
        </div>
        <select value={category} onChange={e => setCategory(e.target.value)} className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2">
          <option>Utility Tool</option>
          <option>Backend API</option>
          <option>Content Platform</option>
          <option>Collaborative SaaS</option>
          <option>Enterprise</option>
        </select>
        <select value={agent} onChange={e => setAgent(e.target.value)} className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2">
          <option>Agent PM</option>
          <option>Agent Dev</option>
          <option>Agent Learn</option>
          <option>Agent Ops</option>
          <option>Agent Review</option>
        </select>
      </div>
      <button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded">
        Generate Checklist
      </button>
      {checklist && (
        <div className="mt-6 bg-gray-950 border border-gray-800 rounded p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">CLI Checklist - {checklist.name}</p>
          <pre className="text-xs text-green-400 whitespace-pre-wrap">{buildChecklist(checklist)}</pre>
        </div>
      )}
    </div>
  )
}

export default NewProjectForm
