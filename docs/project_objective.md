# project_objective.md

> **Project:** CM_Dashboard
> **Platform:** CM_theBuilder
> **Purpose:** Defines what CM_Dashboard is, what it does, and what "done" looks like for V1.
> **Last Updated:** 2026-05-06
> **Status:** 🟡 In Progress

---

## Section 1 — What Is CM_Dashboard

CM_Dashboard is the **central control view** for the CM_theBuilder platform.

It is a static website that shows:

- All projects and their current status
- Summary metrics (total projects, how many are live, in progress, planned)
- Infrastructure status (which machines are online)
- A way to create a new project checklist

It is **read-only in V1** — no backend, no database, no login.
All data comes from a hardcoded file: `src/data/projects.json`.

---

## Section 2 — Who Uses It

| User                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| **You (developer)**       | See all your projects at a glance                   |
| **Employers / Reviewers** | See your portfolio and platform thinking            |
| **Future agents**         | V3 — agents will update the dashboard automatically |

---

## Section 3 — What It Shows (V1 Features)

| Feature                  | What It Does                                                   | Component                              |
| ------------------------ | -------------------------------------------------------------- | -------------------------------------- |
| **Summary metrics**      | Total projects, live count, in-progress count, machines online | `MetricCards.jsx`                      |
| **Project list**         | All projects displayed as rows with status badges              | `ProjectList.jsx`                      |
| **Project detail**       | Click a project → see phases, stack, endpoints, notes          | `ProjectDetail.jsx`                    |
| **Search**               | Type to filter projects by name                                | inside `ProjectList.jsx`               |
| **Status filter**        | Filter by Live / In Progress / Planned                         | inside `ProjectList.jsx`               |
| **New project form**     | Fill a form → get a CLI checklist to scaffold a new project    | `NewProjectForm.jsx`                   |
| **Infrastructure panel** | Machine status — Machine 1 and Machine 2 online/offline        | inside `App.jsx` or separate component |

---

## Section 4 — What It Does NOT Do in V1

| Out of Scope                | Why                                               |
| --------------------------- | ------------------------------------------------- |
| No live API calls           | V1 is static — data is hardcoded in projects.json |
| No login / authentication   | Not needed for a portfolio dashboard              |
| No real-time updates        | V3 feature — requires WebSocket + backend         |
| No CI/CD status from GitHub | V2 feature — requires cm-project-registry API     |
| No agent activity feed      | V3 feature                                        |

---

## Section 5 — Data Source (V1)

All dashboard data comes from one file:

```
src/data/projects.json
```

This file contains a list of all projects. Each project has:

| Field         | Type   | Example                          |
| ------------- | ------ | -------------------------------- |
| `id`          | string | `"cm-dashboard"`                 |
| `name`        | string | `"CM_Dashboard"`                 |
| `status`      | string | `"in-progress"`                  |
| `stack`       | array  | `["React", "Vite", "Tailwind"]`  |
| `machine`     | string | `"GitHub Pages"`                 |
| `description` | string | `"Central UI for CM_theBuilder"` |
| `phases`      | array  | list of phase objects            |
| `endpoints`   | array  | list of URLs                     |
| `notes`       | string | any extra notes                  |

---

## Section 6 — Definition of Done (V1)

V1 is complete when ALL of the following are true:

- [ ] Dashboard loads at `https://ddevmetal.github.io/CM_Dashboard`
- [ ] Summary metrics show correct counts from `projects.json`
- [ ] All projects from `projects.json` appear in the project list
- [ ] Search filters projects by name correctly
- [ ] Status filter works for Live / In Progress / Planned
- [ ] Clicking a project opens the detail panel
- [ ] New Project form generates a CLI checklist
- [ ] Infrastructure panel shows Machine 1 and Machine 2 status
- [ ] CI/CD pipeline deploys automatically on push to `main`
- [ ] No hardcoded secrets anywhere in the code

---

## Section 7 — Version Progression

| Version            | Data Source               | Key Addition                      | Hosting      |
| ------------------ | ------------------------- | --------------------------------- | ------------ |
| **V1 — Static**    | `projects.json`           | All features above                | GitHub Pages |
| **V2 — Dynamic**   | `cm-project-registry` API | Live CI/CD status, last commit    | GitHub Pages |
| **V3 — Real-time** | WebSocket + backend       | Agent activity feed, live updates | Machine 2    |

---

## Section 8 — Success Criteria

| Criteria            | Measure                                        |
| ------------------- | ---------------------------------------------- |
| **Functional**      | All V1 features work as described in Section 3 |
| **Deployed**        | Live on GitHub Pages via CI/CD                 |
| **Portfolio-ready** | Clean UI, no broken links, no console errors   |
| **Extensible**      | Easy to upgrade to V2 without rewriting V1     |
