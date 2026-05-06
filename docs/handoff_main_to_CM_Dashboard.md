# handoff_main_to_CM_Dashboard.md
> **Document Type:** Inter-chat Communication Bridge
> **Governed by:** CM_theBuilder (main)
> **Version:** 0.1
> **Last Updated:** 2026-05-06
> **Status:** 🟡 Active — Awaiting CM_Dashboard response

---

## #header

| Field | Detail |
|---|---|
| **From** | main — CM_theBuilder (devops_meng) |
| **To** | CM_Dashboard project chat |
| **Date** | 2026-05-06 |
| **Session Reference** | NewProjectForm update + CM_Dashboard V1 build |
| **Priority** | 🔴 High |

---

## #governance

### Principle1main — Decision Hierarchy
| # | Principle |
|---|---|
| **1** | `main` has final say on all architecture decisions |
| **2** | CM_Dashboard handles UI/frontend decisions only |
| **3** | CM_Dashboard cannot override main decisions |
| **4** | File naming: `conventions.md` (main) vs `dashboard-conventions.md` (sub) |
| **5** | Always use `handoff.md` as official communication bridge |
| **6** | When main sends instructions 1,2,3 — sub must return results for 1,2,3 |
| **7** | If sub does additional steps — must declare and show results |

### Principle2blueprint — File Inheritance
| Level | File | Scope |
|---|---|---|
| **main** | `conventions.md` | Applies to ALL projects |
| **main** | `security.md` | Applies to ALL projects |
| **dashboard** | `dashboard-conventions.md` | UI specific rules — inherits from main |
| **dashboard** | `dashboard-security.md` | Frontend security — inherits from main |

---

## #context

> Read this before starting any work.
> This is the full context of what CM_Dashboard is and how it fits into CM_theBuilder.

### What CM_theBuilder is:
- A personal development platform — single source of truth for all projects
- Manages projects via agents
- Generates blueprint `.md` files for consistency
- Shows dynamic dashboard for project tracking
- Appends to developer resume automatically (future)

### What CM_Dashboard is:
- The central UI (User Interface) for CM_theBuilder
- Shows all projects, their status, CI/CD health
- Allows creating new projects via a form
- V1 = static, data from `projects.json`
- V2 = dynamic, data from `cm-project-registry` API
- V3 = real-time, WebSocket updates

### Current ecosystem:
| Project | Status | Machine | API |
|---|---|---|---|
| `devops_meng` | 🟡 In Progress | M1 + M2 | — |
| `Project_Calculator` | 🟢 Live | M1 | — |
| `cm-project-registry` | 🟢 Live | M2 :3000 | http://100.68.195.73:3000/projects |
| `CM_Dashboard` | 🟡 In Progress | GitHub Pages | — |

### Tech stack decided:
- React 18 + Vite 5 + Tailwind CSS 3
- Hosted on GitHub Pages
- CI/CD via GitHub Actions

---

## #current_design

> This is what the prototype currently looks like.
> Review before making any changes.

### Components built so far (prototype only — not in repo yet):
| Component | What it does |
|---|---|
| `Header` | Top bar — platform name + user avatar |
| `MetricCards` | Summary stats — total, live, in progress, machines |
| `ProjectCard` | Single project row — clickable |
| `ProjectDetail` | Detail panel — phases, stack, endpoints, notes |
| `NewProjectForm` | Form to create new project — generates CLI checklist |

### Current NewProjectForm output (what it generates now):
```bash
# Step 1 — Create GitHub repo
gh repo create project-name --private

# Step 2 — Scaffold locally
cd ~/Git
mkdir project-name
cd project-name
git init
git remote add origin https://github.com/ddevMetal/project-name.git

# Step 3 — Create folder structure
mkdir -p docs src .github/workflows

# Step 4 — Create .gitignore
echo "node_modules/
.env
dist/
*.log" > .gitignore

# Step 5 — First commit
git add -A
git commit -m "init: ProjectBuilder scaffold"
git branch -M main
git push -u origin main
```

---

## #instructions

> From: main
> Sub must respond to each numbered instruction.

| # | Instruction | Priority | Expected Output |
|---|---|---|---|
| **1** | Acknowledge governance principles and context above | 🔴 High | Confirmation |
| **2** | Add `Project Type` field to `NewProjectForm` — Radio: `[Real World]` `[Experimental]` | 🔴 High | Updated component code |
| **3** | Add `Mode` field — Radio: `[Automated]` `[Hand-held]` | 🔴 High | Updated component code |
| **4** | Add `Category` dropdown — options: `Utility Tool`, `Backend API`, `Content Platform`, `Collaborative SaaS`, `Enterprise` | 🔴 High | Updated component code |
| **5** | Add `Agent` dropdown — options: `Agent PM`, `Agent Dev`, `Agent Learn`, `Agent Ops`, `Agent Review` | 🟡 Medium | Updated component code |
| **6** | Update generated CLI checklist to include these missing steps: | 🔴 High | Updated checklist output |
| | 6a. `gh repo edit --add-topic active` | | |
| | 6b. Copy shared docs from devops_meng: `cp ~/Git/devops_meng/docs/* docs/` | | |
| | 6c. Add CI/CD placeholder content — never empty | | |
| | 6d. Create `handoff.md` from template | | |
| | 6e. Create `n-security.md` — project specific security | | |
| | 6f. Update `devops_meng` ROADMAP.md — add to project registry | | |
| | 6g. State which agent is assigned to this project | | |
| **7** | Show updated prototype with all changes applied | 🔴 High | Working prototype |
| **8** | Confirm all changes follow `conventions.md` rules | 🟡 Medium | Confirmation |

---

## #responses

> To be filled by: CM_Dashboard chat

| # | Response | Status | Output |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |

---

## #file_request

| # | Requested By | File Needed | From | Reason | Status |
|---|---|---|---|---|---|
| 1 | CM_Dashboard | `conventions.md` | main | Reference for component naming | 📎 In docs/ folder |
| 2 | CM_Dashboard | `security.md` | main | Frontend security reference | 📎 In docs/ folder |

---

## #decisions

| # | Decision | Made By | Date |
|---|---|---|---|
| 1 | CM_Dashboard V1 = static React + Vite + Tailwind | main | 2026-05-06 |
| 2 | Data source for V1 = `projects.json` — manual update | main | 2026-05-06 |
| 3 | Hosted on GitHub Pages — free | main | 2026-05-06 |
| 4 | NewProjectForm generates CLI checklist — not automation yet | main | 2026-05-06 |
| 5 | Automation comes in Phase 3 with Agent PM | main | 2026-05-06 |
| 6 | Project Type + Mode + Category + Agent fields required in form | main | 2026-05-06 |

---

## #pending

| # | Item | Waiting On | Priority |
|---|---|---|---|
| 1 | NewProjectForm updates — 8 instructions | CM_Dashboard chat | 🔴 High |
| 2 | Full V1 build — all components | CM_Dashboard chat | 🔴 High |
| 3 | GitHub Pages deployment | After V1 complete | 🟡 Medium |
| 4 | Connect to cm-project-registry API (V2) | After V1 deployed | 🔵 Low |

---

## #files_changed

| File | Changed By | Type of Change |
|---|---|---|
| `src/components/NewProjectForm.jsx` | CM_Dashboard | Update — add fields + checklist |
| `src/data/projects.json` | CM_Dashboard | Create — hardcoded project data |
| `docs/project_objective.md` | CM_Dashboard | Create — define dashboard objective |
| `docs/architecture.md` | CM_Dashboard | Create — component design |

---

## #informal_chat

> ⚠️ No decision-making precedence.

```
[main] — This handoff covers two things:
1. Fix the NewProjectForm to match our full ProjectBuilder convention
2. Start building CM_Dashboard V1 properly from Phase 1

The prototype we built shows the vision — now make it real.
Follow the ROADMAP.md phases in order.
Do not skip Phase 1 (project_objective.md) and Phase 2 (architecture.md)
before writing any component code.

Key principle: CM_Dashboard is the face of CM_theBuilder.
It must look professional enough to show an employer.

[CM_Dashboard] —
```

---

## #status

| Field | Detail |
|---|---|
| **Handoff opened** | 2026-05-06 |
| **Handoff closed** | Pending |
| **Closed by** | Pending |
| **Next handoff reference** | V1 completion report |
