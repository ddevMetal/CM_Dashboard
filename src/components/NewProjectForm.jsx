import { useState } from 'react'

function NewProjectForm() {
  const [name, setName] = useState('')
  const [stack, setStack] = useState('')
  const [machine, setMachine] = useState('GitHub Pages')
  const [checklist, setChecklist] = useState(null)

  function handleSubmit() {
    if (!name) return
    setChecklist({
      name,
      stack,
      machine,
    })
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8">
      <h2 className="text-white font-bold text-lg mb-4">New Project</h2>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Stack (e.g. React, Node.js)"
          value={stack}
          onChange={e => setStack(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2"
        />
        <select
          value={machine}
          onChange={e => setMachine(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2"
        >
          <option value="GitHub Pages">GitHub Pages</option>
          <option value="Machine 2 — Fedora">Machine 2 — Fedora</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
      >
        Generate Checklist
      </button>

      {checklist && (
        <div className="mt-6 bg-gray-950 border border-gray-800 rounded p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            CLI Checklist — {checklist.name}
          </p>
          <pre className="text-xs text-green-400 whitespace-pre-wrap">{`
# Step 1 — Create GitHub repo
gh repo create ${checklist.name} --private

# Step 2 — Scaffold locally
cd ~/Git
mkdir ${checklist.name}
cd ${checklist.name}
git init
git remote add origin https://github.com/ddevMetal/${checklist.name}.git

# Step 3 — Create folder structure
mkdir -p docs src .github/workflows

# Step 4 — Create .gitignore
echo "node_modules/\n.env\ndist/\n*.log" > .gitignore

# Step 5 — First commit
git add -A
git commit -m "init: ProjectBuilder scaffold"
git branch -M main
git push -u origin main

# Stack: ${checklist.stack}
# Machine: ${checklist.machine}
          `}</pre>
        </div>
      )}
    </div>
  )
}

export default NewProjectForm
