# dev_environment.md

> **Usage:** Reference file for any AI (LLM) or project context. Describes the full development environment, machines, tools, and working modes of the developer.
> **Last Updated:** 2026-05-05

---

## Section 1 — Developer Profile

| Field                      | Detail                                                        |
| -------------------------- | ------------------------------------------------------------- |
| **Username (Machine 1)**   | `ddevmetal`                                                   |
| **Username (Machine 2)**   | `cm`                                                          |
| **Tailscale Network Name** | `ddev`                                                        |
| **Tailscale Account**      | `ddevmetal2@gmail.com`                                        |
| **Primary Focus**          | CLI (Command Line Interface) learning, Linux, DevOps          |
| **Background**             | Mid-career switcher, CS (Computer Science) student — Big Data |

---

## Section 2 — Working Modes

| Mode                      | Trigger                      | Behaviour                                                       |
| ------------------------- | ---------------------------- | --------------------------------------------------------------- |
| **Default — CLI Learner** | Nothing said                 | Pure terminal. Step-by-step. Hand-held. No shortcuts.           |
| **Expert Build**          | "lets be an expert to build" | AI builds with minimal user involvement. Skip systematic steps. |
| **Mode 3**                | TBD (To Be Defined)          | To be defined later.                                            |

> **Rule:** Never skip CLI (Command Line Interface) learner mode unless the user explicitly switches mode.

---

## Section 3 — Network Map

```
ddev — Tailscale VPN (Virtual Private Network) Network
├── teos-s24-ultra   →   100.102.212.45   (Machine 1)
└── fedora           →   100.68.195.73    (Machine 2)
```

Both machines are connected and accessible via SSH (Secure Shell) through Tailscale.

---

## Section 4 — Machine 1: Samsung S24 Ultra (DEX)

| Field                     | Detail                                       |
| ------------------------- | -------------------------------------------- |
| **Device**                | Samsung S24 Ultra                            |
| **Mode**                  | DEX (Samsung DeX) — desktop mode via monitor |
| **Environment**           | Termux + Proot Distro Debian (arm64)         |
| **OS (Operating System)** | Debian stable, arm64 architecture            |
| **Hostname (Tailscale)**  | `teos-s24-ultra`                             |
| **Tailscale IP**          | `100.102.212.45`                             |
| **User**                  | `ddevmetal`                                  |
| **Shell**                 | Bash                                         |

### Languages & Runtimes

| Tool       | Version         |
| ---------- | --------------- |
| Python     | 3.13.5          |
| Node.js    | v20.19.2        |
| Java       | OpenJDK 21.0.10 |
| TypeScript | 6.0.2           |

### Package Managers

| Tool                           | Version |
| ------------------------------ | ------- |
| npm (Node Package Manager)     | 9.2.0   |
| pip (Python Package Installer) | 25.1.1  |

### Editors

| Editor        | Available        |
| ------------- | ---------------- |
| nvim (NeoVim) | ✅               |
| nano          | ✅               |
| micro         | ✅               |
| vim           | ✅               |
| gedit         | ❌ Not installed |

### Network Tools

| Tool               | Available        |
| ------------------ | ---------------- |
| Tailscale          | ✅ (Termux side) |
| ssh (Secure Shell) | ✅               |
| curl               | ✅               |
| wget               | ✅               |
| gh (GitHub CLI)    | ✅               |

### Version Control

| Tool | Version |
| ---- | ------- |
| git  | 2.47.3  |

### ⚠️ Limitations

| Limitation    | Detail                                              |
| ------------- | --------------------------------------------------- |
| **No Docker** | Kernel limitation — Docker cannot run on DEX/Termux |
| **No sudo**   | Proot environment — no real root access             |

---

## Section 5 — Machine 2: Fedora (Desktop — 24/7 Server)

| Field                             | Detail                                                      |
| --------------------------------- | ----------------------------------------------------------- |
| **Device**                        | Mini CPU (Central Processing Unit) — Desktop                |
| **OS (Operating System)**         | Fedora Linux 43 Workstation, x86_64                         |
| **CPU (Central Processing Unit)** | Intel Core i3-6100U @ 2.30GHz                               |
| **CPU Cores**                     | 2 physical cores, 2 threads per core = 4 logical CPUs total |
| **RAM (Random Access Memory)**    | 7.5GB total, ~2.2GB available                               |
| **Swap**                          | 7.5GB total                                                 |
| **Storage**                       | 192GB total — 40GB used, 143GB free                         |
| **Hostname (Tailscale)**          | `fedora`                                                    |
| **Tailscale IP**                  | `100.68.195.73`                                             |
| **User**                          | `cm`                                                        |
| **Shell**                         | Bash                                                        |

### Languages & Runtimes

| Tool    | Version            |
| ------- | ------------------ |
| Python  | 3.14.3             |
| Node.js | v24.15.0 (via nvm) |
| Java    | OpenJDK 25.0.2     |

### Package Managers

| Tool                               | Available                   |
| ---------------------------------- | --------------------------- |
| pip (Python Package Installer)     | ✅                          |
| pip3                               | ✅                          |
| npm via nvm (Node Version Manager) | ✅                          |
| dnf (Dandified YUM)                | ✅ — Fedora package manager |

### Editors

| Editor                      | Available      |
| --------------------------- | -------------- |
| gedit                       | ✅             |
| nvim (NeoVim)               | ✅             |
| nano                        | ✅             |
| micro                       | ✅             |
| vim                         | ✅             |
| VSCode (Visual Studio Code) | ✅ via Flatpak |

### Docker Setup

| Field                 | Detail                                        |
| --------------------- | --------------------------------------------- |
| **Docker installed**  | ✅ Yes                                        |
| **Docker service**    | Enabled on boot via `systemctl enable docker` |
| **Docker sudo**       | Passwordless sudo configured for `cm` user    |
| **Container restart** | `--restart always` flag used                  |

### Network Tools

| Tool               | Available |
| ------------------ | --------- |
| Tailscale          | ✅        |
| ssh (Secure Shell) | ✅        |

### Version Control

| Tool | Version |
| ---- | ------- |
| git  | 2.53.0  |

---

## Section 6 — Machine Roles & Responsibilities

| Machine                       | Role                                                           | Status          |
| ----------------------------- | -------------------------------------------------------------- | --------------- |
| **Machine 1 — S24 Ultra DEX** | Primary dev terminal — where all coding and learning happens   | 🟢 Active       |
| **Machine 2 — Fedora**        | 24/7 server — Docker host, CI/CD deploy target, future backend | 🟢 Always On    |
| **Machine 3 — Windows 11**    | Normal work only — excluded from all dev workflows             | ⚪ Not relevant |

> **Rule:** If a task exceeds Machine 1's capability — offload to Machine 2 via SSH through Tailscale.
> **Docker rule:** Always build and run Docker containers on Machine 2 — never Machine 1.

---

## Section 7 — Machine 3: Windows 11 Laptop (Excluded)

| Field         | Detail                                      |
| ------------- | ------------------------------------------- |
| **OS**        | Windows 11                                  |
| **Role**      | Normal work only — not used for development |
| **Tailscale** | ❌ Not connected                            |
| **Dev Tools** | Not relevant                                |

---

## Section 8 — Cross-Machine Access

| From               | To                 | Method                                           |
| ------------------ | ------------------ | ------------------------------------------------ |
| Machine 1 (DEX)    | Machine 2 (Fedora) | `ssh fedora` via Tailscale                       |
| Machine 2 (Fedora) | Machine 1 (DEX)    | `ssh teos-s24-ultra` via Tailscale               |
| GitHub Actions     | Machine 2 (Fedora) | SSH via Tailscale + `tailscale/github-action@v2` |
| Machine 3 (Laptop) | Any                | ❌ Not connected                                 |

---

## Section 9 — AI Instruction Rules (for this environment)

1. Default mode is always **CLI learner** — pure terminal, step-by-step.
2. Always specify which machine a command targets.
3. If a tool is not installed, guide the user to install via correct package manager:
   - Machine 1: `apt install` (Advanced Package Tool)
   - Machine 2: `dnf install` (Dandified YUM)
4. Never assume GUI tools are available — default to CLI tools.
5. Always use SSH via Tailscale for cross-machine access.
6. **Never run Docker on Machine 1** — always Machine 2.
7. When switching machines, always state clearly which machine.
