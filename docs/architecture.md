# architecture.md

> **Project:** CM_Dashboard
> **Platform:** CM_theBuilder
> **Purpose:** Component blueprint — defines every component, what it does, and how they connect.
> **Last Updated:** 2026-05-06
> **Status:** 🟡 In Progress

---

## Section 1 — Architecture Style

| Field            | Detail                         |
| ---------------- | ------------------------------ |
| **Category**     | Content Platform — Static Site |
| **Style**        | Static Generation (SSG)        |
| **Pattern**      | Component-Based Architecture   |
| **Architecture** | Jamstack                       |
| **Data flow**    | One direction — top down       |

> **Plain English:** The dashboard is a static website. Data flows from one source (`projects.json`) downward into components. No data goes back up to a server.

---

## Section 2 — How Data Flows

```
projects.json  ← single source of truth
      |
      ↓
   App.jsx     ← root — loads data, passes it down
      |
      ↓
  ┌───────────────────────────────────┐
  │                                   │
Header.jsx   ProjectList.jsx     MetricCards.jsx
                  │
                  ↓
            ProjectCard.jsx      ← one card per project
                  │
                  ↓
          ProjectDetail.jsx      ← expands on click
```

> **Plain English:** `App.jsx` is the brain. It reads `projects.json` and hands the data to every component that needs it. Components just display what they receive — they don't fetch data themselves.

---

## Section 3 — Component Map

| Component          | File                 | What It Does                                             |
| ------------------ | -------------------- | -------------------------------------------------------- |
| **App**            | `App.jsx`            | Root component — loads data, holds state, renders layout |
| **Header**         | `Header.jsx`         | Top bar — shows platform name and navigation             |
| **MetricCards**    | `MetricCards.jsx`    | Summary row — total projects, live, in progress, planned |
| **ProjectList**    | `ProjectList.jsx`    | Full list of projects — includes search and filter       |
| **ProjectCard**    | `ProjectCard.jsx`    | One row per project — name, status badge, stack          |
| **ProjectDetail**  | `ProjectDetail.jsx`  | Expanded panel — shows phases, endpoints, notes          |
| **NewProjectForm** | `NewProjectForm.jsx` | Form — fills in details, outputs CLI checklist           |

---

## Section 4 — Component Details

### App.jsx

- **Role:** Root — the parent of everything
- **Reads:** `src/data/projects.json`
- **Passes down to:** MetricCards, ProjectList, Header
- **Holds state:** selected project, search term, status filter

> **Plain English:** Think of App.jsx as the manager. It has all the data and tells each component what to show.

---

### Header.jsx

- **Role:** Top navigation bar
- **Receives:** nothing (static display)
- **Shows:** Platform name `CM_theBuilder`, dashboard title

---

### MetricCards.jsx

- **Role:** Summary statistics row
- **Receives:** full project list from App.jsx
- **Shows:** 4 cards — Total / Live / In Progress / Planned
- **Calculates:** counts by filtering the project list by status

---

### ProjectList.jsx

- **Role:** Displays all projects, handles search and filter
- **Receives:** full project list from App.jsx
- **Contains:** search input + status filter dropdown + list of ProjectCard components
- **Passes down to:** ProjectCard (one per project)

---

### ProjectCard.jsx

- **Role:** One row for a single project
- **Receives:** one project object from ProjectList.jsx
- **Shows:** project name, status badge, stack tags
- **On click:** tells App.jsx which project was selected → triggers ProjectDetail

---

### ProjectDetail.jsx

- **Role:** Expanded detail panel for a selected project
- **Receives:** one selected project object from App.jsx
- **Shows:** phases, stack, machine, endpoints, notes
- **Behaviour:** hidden until a project is clicked, then slides in

---

### NewProjectForm.jsx

- **Role:** Form to scaffold a new project
- **Receives:** nothing (standalone form)
- **Shows:** input fields — project name, stack, machine
- **On submit:** generates a CLI checklist the user can copy and run

---

## Section 5 — File Structure

```
src/
├── main.jsx                  ← entry point — mounts App into the browser
├── App.jsx                   ← root component
├── components/
│   ├── Header.jsx
│   ├── MetricCards.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectList.jsx
│   ├── ProjectDetail.jsx
│   └── NewProjectForm.jsx
├── data/
│   └── projects.json         ← all project data lives here
└── styles/
    └── index.css             ← global styles
```

---

## Section 6 — State Management

> **State** = data that can change and causes the UI to update.

| State             | Held In         | What It Controls                    |
| ----------------- | --------------- | ----------------------------------- |
| `projects`        | App.jsx         | full list loaded from projects.json |
| `selectedProject` | App.jsx         | which project is currently clicked  |
| `searchTerm`      | ProjectList.jsx | what the user typed in search       |
| `statusFilter`    | ProjectList.jsx | which status tab is active          |

> **Plain English:** State is like a variable that the UI watches. When it changes, the screen updates automatically.

---

## Section 7 — Component Communication Rules

| Rule                                   | Detail                                               |
| -------------------------------------- | ---------------------------------------------------- |
| Data flows **down only**               | Parent passes data to child via props                |
| Events flow **up only**                | Child tells parent something happened via a function |
| No component fetches its own data      | App.jsx is the only data loader                      |
| No component talks to another directly | All communication goes through App.jsx               |

> **Plain English:** Components don't talk to each other directly. They talk to App.jsx, which then updates everyone else.

---

## Section 8 — Props Reference

> **Props** = data passed from a parent component to a child component.

| Component        | Props It Receives                                                  |
| ---------------- | ------------------------------------------------------------------ |
| `MetricCards`    | `projects` — full list                                             |
| `ProjectList`    | `projects` — full list, `onSelect` — function to select a project  |
| `ProjectCard`    | `project` — single project object, `onSelect` — function           |
| `ProjectDetail`  | `project` — selected project object, `onClose` — function to close |
| `NewProjectForm` | none                                                               |

---

## Section 9 — Build Order (Phase 4 onwards)

Build components in this order — each one is testable before moving to the next:

| Order | Component            | Why This Order                                      |
| ----- | -------------------- | --------------------------------------------------- |
| **1** | `projects.json`      | Data must exist before any component can display it |
| **2** | `App.jsx`            | Root must exist before children                     |
| **3** | `Header.jsx`         | Simplest component — good warm-up                   |
| **4** | `MetricCards.jsx`    | Reads data — confirms data flow works               |
| **5** | `ProjectCard.jsx`    | Single item — build before the list                 |
| **6** | `ProjectList.jsx`    | Uses ProjectCard — depends on it                    |
| **7** | `ProjectDetail.jsx`  | Triggered by ProjectList — depends on it            |
| **8** | `NewProjectForm.jsx` | Standalone — can be built any time                  |
