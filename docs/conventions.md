# conventions.md

> **Platform:** CM_theBuilder
> **Purpose:** Defines the standard conventions every project must follow to ensure consistency across all chats, tools, agents, and machines.
> **Rule:** Any AI reading this file must enforce these conventions without exception.
> **Last Updated:** 2026-05-05

---

## How to Use This File

### For a human (you):

1. Read Section 1 to Section 6 before starting any new project
2. Use Section 7 as a checklist every time you initialize a new project
3. If confused on any step — paste this file into any AI and ask for guidance

### For an AI:

1. Read this entire file before responding to any project-related request
2. Enforce all conventions listed here without exception
3. If user deviates from convention — flag it and correct it
4. Use Section 7 as the project initialization checklist

---

## Section 1 — File Naming Convention

| Type                | Convention                                 | Example                            |
| ------------------- | ------------------------------------------ | ---------------------------------- |
| **Master file**     | UPPERCASE                                  | `ROADMAP.md`                       |
| **Doc files**       | snake_case (lowercase + underscore)        | `dev_environment.md`               |
| **Project folders** | PascalCase (capital first letter per word) | `Project_Calculator`               |
| **Config files**    | snake_case                                 | `agent_config.md`                  |
| **Docker files**    | Standard Docker naming                     | `Dockerfile`, `docker-compose.yml` |
| **Pipeline files**  | snake_case                                 | `ci.yml`, `cd.yml`                 |
| **Branch names**    | kebab-case (lowercase + hyphen)            | `feature/add-login`                |

---

## Section 2 — Git Commit Message Convention

Every commit must follow this format:

```
prefix: short description
```

| Prefix    | When to Use                  | Example                                |
| --------- | ---------------------------- | -------------------------------------- |
| `init:`   | First commit / project setup | `init: ProjectBuilder scaffold`        |
| `add:`    | New file or feature added    | `add: README.md`                       |
| `fix:`    | Bug fix                      | `fix: login validation error`          |
| `update:` | Modifying existing file      | `update: context.md session progress`  |
| `remove:` | Deleting something           | `remove: unused config file`           |
| `docs:`   | Documentation only changes   | `docs: update ROADMAP.md phases`       |
| `docker:` | Docker related changes       | `docker: add Dockerfile for dashboard` |
| `ci:`     | CI/CD pipeline changes       | `ci: add GitHub Actions workflow`      |

---

## Section 3 — Branch Naming Convention

| Branch     | Purpose                    | Example              |
| ---------- | -------------------------- | -------------------- |
| `main`     | Production ready code only | `main`               |
| `dev`      | Active development branch  | `dev`                |
| `feature/` | New feature being built    | `feature/add-login`  |
| `fix/`     | Bug fix branch             | `fix/login-error`    |
| `docs/`    | Documentation updates      | `docs/update-readme` |

> **Rule:** Never push directly to `main`. Always use `dev` or `feature/` branches first.

---

## Section 4 — Project Status Convention

Used in dashboard and ROADMAP.md to track every project:

| Symbol | Status      | Meaning                     |
| ------ | ----------- | --------------------------- |
| 🔵     | Planned     | Not started yet             |
| 🟡     | In Progress | Actively being built        |
| 🟢     | Live        | Deployed and running        |
| 🔴     | Blocked     | Waiting on dependency       |
| ⚪     | Paused      | On hold                     |
| 🟠     | Review      | Ready for review or testing |
| ❌     | Failed      | CI/CD pipeline failed       |

> **Scalable:** Add new status symbols as needed — just update this file and `ROADMAP.md`.

---

## Section 5 — Project Folder Structure Convention

Every project must follow this exact structure:

```
Project_Name/
├── ROADMAP.md                        ← master entry point
├── README.md                         ← GitHub overview
├── Dockerfile                        ← container definition
├── docker-compose.yml                ← multi-container setup (if needed)
├── .gitignore                        ← always include before first commit
├── .github/
│   └── workflows/
│       ├── ci.yml                    ← CI (Continuous Integration) pipeline
│       └── cd.yml                    ← CD (Continuous Delivery) pipeline
├── docs/
│   ├── context.md                    ← session history + resume point
│   ├── project_objective.md          ← what we are building
│   ├── dev_environment.md            ← machines + tools
│   ├── consideration_for_design.md   ← design framework
│   ├── conventions.md                ← this file
│   ├── agent_config.md               ← agent rules
│   └── architecture.md              ← added when design is decided
└── src/                              ← source code lives here
    └── (project code)
```

---

## Section 6 — Docker Convention

Every project must be containerized (packaged using Docker).

> ⚠️ **Docker runs on Machine 2 (Fedora) only — NOT Machine 1 (DEX/Termux) due to kernel limitations.**

### Rule 1 — Every project has a Dockerfile:

```dockerfile
# Example Dockerfile structure
FROM base-image
WORKDIR /app
COPY . .
RUN install dependencies
CMD run the app
```

### Rule 2 — Dashboard uses docker-compose.yml:

```yaml
# Example docker-compose structure
services:
  dashboard:
    build: .
    ports:
      - "3000:3000"
  project_x:
    build: ./Project_X
    ports:
      - "4000:4000"
```

### Rule 3 — CI/CD builds and deploys via Docker:

```
git push
      ↓
GitHub Actions runs tests
      ↓
SSH into Machine 2 via Tailscale
      ↓
Pull latest code + restart Docker container
```

### Rule 4 — Migration is always Docker-based:

> To move to any new machine:
>
> 1. Install Docker
> 2. Install git
> 3. `git clone` your repo
> 4. `docker-compose up`
> 5. Done ✅

---

## Section 7 — Project Initialization Checklist

Use this EVERY time you start a new project. Do not skip any step.

### Step 1 — Create GitHub repo:

- [ ] Go to github.com or use `gh repo create`
- [ ] Create new **private** repo named `Project_Name`
- [ ] Do NOT initialize with README

### Step 2 — Scaffold locally on Machine 1:

```bash
cd ~/Git
mkdir Project_Name
cd Project_Name
git init
git remote add origin https://github.com/ddevMetal/Project_Name.git
```

### Step 3 — Create folder structure:

```bash
mkdir -p docs src .github/workflows
touch ROADMAP.md README.md Dockerfile docker-compose.yml
touch docs/context.md docs/project_objective.md docs/architecture.md
touch .github/workflows/ci.yml .github/workflows/cd.yml
```

### Step 4 — Create .gitignore BEFORE first commit:

```bash
cat > .gitignore << 'EOF'
node_modules/
.env
.DS_Store
dist/
*.log
EOF
```

### Step 5 — Add CI/CD placeholder content BEFORE first commit:

```bash
cat > .github/workflows/ci.yml << 'EOF'
name: CI Pipeline
on:
  push:
    branches: [ main, dev ]
  pull_request:
    branches: [ main ]
jobs:
  placeholder:
    runs-on: ubuntu-latest
    steps:
      - run: echo "CI pipeline placeholder — not yet implemented"
EOF

cat > .github/workflows/cd.yml << 'EOF'
name: CD Pipeline
on: [workflow_dispatch]
jobs:
  placeholder:
    runs-on: ubuntu-latest
    steps:
      - run: echo "CD pipeline placeholder — not yet implemented"
EOF
```

### Step 6 — Copy shared docs from CM_theBuilder:

```bash
cp ~/Git/devops_meng/docs/dev_environment.md docs/
cp ~/Git/devops_meng/docs/consideration_for_design.md docs/
cp ~/Git/devops_meng/docs/conventions.md docs/
cp ~/Git/devops_meng/docs/agent_config.md docs/
```

### Step 7 — First commit and push:

```bash
git add -A
git commit -m "init: ProjectBuilder scaffold"
git branch -M main
git push -u origin main
```

### Step 8 — Update CM_theBuilder ROADMAP.md:

- [ ] Add new project to Project Registry table
- [ ] Set status to 🔵 Planned
- [ ] Commit and push to `devops_meng`

### Step 9 — Verify checklist:

- [ ] Repo exists on GitHub
- [ ] `.gitignore` exists with `node_modules/` entry
- [ ] `ci.yml` + `cd.yml` have placeholder content — NOT empty
- [ ] All default `docs/` files present
- [ ] `Dockerfile` exists
- [ ] Project listed in CM_theBuilder `ROADMAP.md`

---

## Section 8 — CI/CD Pipeline Convention

### GitHub Actions + Tailscale SSH deployment:

| Rule                                                 | Detail                                              |
| ---------------------------------------------------- | --------------------------------------------------- |
| Always add `tailscale/github-action@v2` step         | Required for SSH into Machine 2 via Tailscale       |
| Always generate dedicated SSH key for GitHub Actions | Never reuse existing keys                           |
| Always configure passwordless sudo for docker        | Required on deployment server before pipeline setup |
| Tailscale account                                    | `ddevmetal2@gmail.com`                              |

### Passwordless sudo setup on Machine 2:

```bash
echo "cm ALL=(ALL) NOPASSWD: /usr/bin/docker" | sudo tee /etc/sudoers.d/docker-nopasswd
```

### Dedicated GitHub Actions SSH key setup:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
# Add private key to GitHub repo secrets as SSH_PRIVATE_KEY
```

---

## Section 9 — Coding Standards

| Standard                        | Rule                                        |
| ------------------------------- | ------------------------------------------- |
| **Language default**            | Python unless specified                     |
| **Node.js indentation**         | 2 spaces                                    |
| **Python indentation**          | 4 spaces                                    |
| **Comments**                    | Every function must have a comment          |
| **File size**                   | Max 200 lines — split if larger             |
| **Variable naming**             | camelCase for JS, snake_case for Python     |
| **Class naming**                | PascalCase for all languages                |
| **Input validation**            | Always at entry point — never deep in logic |
| **Always `cd` to project root** | Before writing files with `cat >`           |

---

## Section 10 — Consistency Rules (The Apple Definition)

| Rule                        | Detail                                  |
| --------------------------- | --------------------------------------- |
| **Same file structure**     | Every project follows Section 5 exactly |
| **Same naming**             | Every file follows Section 1 exactly    |
| **Same commit style**       | Every commit follows Section 2 exactly  |
| **Same status labels**      | Every status follows Section 4 exactly  |
| **Same Docker approach**    | Every project follows Section 6 exactly |
| **Same docs/ files**        | Every project copies from CM_theBuilder |
| **Same AI resume process**  | Always load files in Section 11 order   |
| **Always .gitignore first** | Before any first commit                 |
| **Never empty CI/CD files** | Always add placeholder content          |

---

## Section 11 — How to Resume Any Project With Any AI

Load files in this exact order every session:

1. `ROADMAP.md`
2. `docs/conventions.md` ← this file
3. `docs/consideration_for_design.md`
4. `docs/dev_environment.md`
5. `docs/agent_config.md`
6. `docs/context.md`
7. `docs/project_objective.md`

> Say: **"Resume from context.md — continue where we left off."**
