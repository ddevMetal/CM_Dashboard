# ROADMAP.md

> **Project:** CM_Dashboard
> **Platform:** CM_theBuilder
> **Purpose:** Master entry point for CM_Dashboard. Read this first before any session.
> **Last Updated:** 2026-05-05
> **Status:** 🟡 In Progress

---

## Section 1 — What Is This Project

`CM_Dashboard` is the **central UI (User Interface)** for CM_theBuilder platform.

| Field            | Detail                                                      |
| ---------------- | ----------------------------------------------------------- |
| **Project Name** | CM_Dashboard                                                |
| **Type**         | Content Platform — Static Site                              |
| **Category**     | Frontend UI                                                 |
| **Purpose**      | Central view of all projects, CI/CD status, pipeline health |
| **Machine**      | GitHub Pages — free static hosting                          |
| **Stack**        | React + Vite + Tailwind CSS                                 |

---

## Section 2 — Why This Project Exists

| Goal                     | Detail                                             |
| ------------------------ | -------------------------------------------------- |
| **Central control view** | See all projects and their status in one place     |
| **Portfolio piece**      | Demonstrates full stack thinking to employers      |
| **Learning vehicle**     | Learn React + Vite + Tailwind through real project |
| **Platform foundation**  | V1 static → V2 dynamic → V3 real-time              |
| **Agent interface**      | Future — agents update dashboard automatically     |

---

## Section 3 — How to Use This Repo With Any AI

Load files in this exact order every session:

1. `ROADMAP.md` ← this file
2. `docs/conventions.md`
3. `docs/consideration_for_design.md`
4. `docs/dev_environment.md`
5. `docs/security.md`
6. `docs/agent_config.md`
7. `docs/handoff.md`
8. `docs/context.md`
9. `docs/project_objective.md`

> Say: **"You are Agent Dev. Resume from context.md — continue where we left off."**

---

## Section 4 — Project Structure

```
CM_Dashboard/
├── ROADMAP.md                        ← you are here
├── README.md                         ← GitHub overview
├── Dockerfile                        ← container definition
├── docker-compose.yml                ← multi-container setup
├── .gitignore                        ← node_modules, .env, dist
├── .github/
│   └── workflows/
│       ├── ci.yml                    ← CI pipeline
│       └── cd.yml                    ← CD — deploy to GitHub Pages
├── docs/
│   ├── context.md                    ← session history
│   ├── project_objective.md          ← what we are building
│   ├── architecture.md               ← design decisions
│   ├── dev_environment.md            ← machines + tools
│   ├── consideration_for_design.md   ← design framework
│   ├── conventions.md                ← standards + rules
│   ├── security.md                   ← security blueprint
│   ├── agent_config.md               ← agent roles
│   └── handoff.md                    ← communication bridge
└── src/
    ├── main.jsx                      ← entry point
    ├── App.jsx                       ← root component
    ├── components/
    │   ├── Header.jsx                ← top bar
    │   ├── MetricCards.jsx           ← summary stats
    │   ├── ProjectCard.jsx           ← single project row
    │   ├── ProjectList.jsx           ← list of all projects
    │   ├── ProjectDetail.jsx         ← detail panel on click
    │   └── NewProjectForm.jsx        ← create new project
    ├── data/
    │   └── projects.json             ← hardcoded project data (V1)
    └── styles/
        └── index.css                 ← global styles
```

---

## Section 5 — Dashboard Features (V1)

| Feature                  | Description                                         | Status   |
| ------------------------ | --------------------------------------------------- | -------- |
| **Summary metrics**      | Total projects, live, in progress, machines online  | 🔵 Build |
| **Project registry**     | List of all projects with status badges             | 🔵 Build |
| **Project detail**       | Click project → see phases, stack, endpoints, notes | 🔵 Build |
| **Search**               | Filter projects by name                             | 🔵 Build |
| **Status filter**        | Filter by Live / In Progress / Planned              | 🔵 Build |
| **New Project form**     | Fill form → get CLI checklist                       | 🔵 Build |
| **Infrastructure panel** | Machine status, running services                    | 🔵 Build |

---

## Section 6 — Dashboard Versions

| Version            | Data source                             | Features                            | Hosting      |
| ------------------ | --------------------------------------- | ----------------------------------- | ------------ |
| **V1 — Static**    | `projects.json` — manual update         | All above features                  | GitHub Pages |
| **V2 — Dynamic**   | `cm-project-registry` API — auto update | + Last commit, CI/CD live status    | GitHub Pages |
| **V3 — Real-time** | WebSocket + backend                     | + Live updates, agent activity feed | Machine 2    |

---

## Section 7 — Build Phases

| Phase       | What Gets Built                                     | Status          |
| ----------- | --------------------------------------------------- | --------------- |
| **Phase 0** | Scaffold — folder structure, docs, CI/CD            | ✅ Complete     |
| **Phase 1** | `project_objective.md` — define what dashboard does | 🔵 Next         |
| **Phase 2** | `architecture.md` — component design                | 🔵 Planned      |
| **Phase 3** | `src/data/projects.json` — hardcoded data           | 🔵 Planned      |
| **Phase 4** | Core components — Header, MetricCards, ProjectCard  | 🔵 Planned      |
| **Phase 5** | ProjectList + search + filter                       | 🔵 Planned      |
| **Phase 6** | ProjectDetail — click to expand                     | 🔵 Planned      |
| **Phase 7** | NewProjectForm — create project checklist           | 🔵 Planned      |
| **Phase 8** | GitHub Pages deployment via CI/CD                   | 🔵 Planned      |
| **Phase 9** | Connect to cm-project-registry API (V2)             | 🔵 Blocked — V2 |

---

## Section 8 — Agent Assignment

| Task                                | Agent          |
| ----------------------------------- | -------------- |
| Session management, context loading | Agent PM       |
| Building React components           | Agent Dev      |
| Learning React + Vite + Tailwind    | Agent Learn    |
| GitHub Pages deployment             | Agent Ops      |
| Code review before merge            | Agent Review   |
| Sync with cm-project-registry       | Agent Registry |

---

## Section 9 — Tech Stack Details

| Tool               | Purpose                      | Version |
| ------------------ | ---------------------------- | ------- |
| **React**          | UI component framework       | 18+     |
| **Vite**           | Fast build tool + dev server | 5+      |
| **Tailwind CSS**   | Utility-first styling        | 3+      |
| **GitHub Pages**   | Free static hosting          | —       |
| **GitHub Actions** | CI/CD — auto deploy on push  | —       |

---

## Section 10 — GitHub Pages Setup

```
Push to main branch
      ↓
GitHub Actions runs cd.yml
      ↓
Builds React app with Vite
      ↓
Deploys dist/ folder to gh-pages branch
      ↓
Live at: https://ddevmetal.github.io/CM_Dashboard
```

---

## Section 11 — Findings Log (Blind Spots)

| #   | Finding  | Action |
| --- | -------- | ------ |
| —   | None yet | —      |

---

## Section 12 — Links

| Resource           | URL                                       |
| ------------------ | ----------------------------------------- |
| **This repo**      | https://github.com/ddevMetal/CM_Dashboard |
| **Live dashboard** | https://ddevmetal.github.io/CM_Dashboard  |
| **CM_theBuilder**  | https://github.com/ddevMetal/devops_meng  |
| **API**            | http://100.68.195.73:3000/projects        |
