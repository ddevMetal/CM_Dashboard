# handoff.md
> **Document Type:** Inter-chat Communication Bridge
> **Governed by:** CM_theBuilder (main)
> **Version:** 0.2 — Added #file_request section
> **Last Updated:** 2026-05-05
> **Status:** 🟡 Active

---

## #header

| Field | Detail |
|---|---|
| **From** | |
| **To** | |
| **Date** | |
| **Session Reference** | |
| **Priority** | 🔴 High / 🟡 Medium / 🔵 Low |

---

## #governance

> These principles govern ALL communication between main and sub.
> Sub cannot override these principles.
> Changes to governance must come from main only.

### Principle1main — Decision Hierarchy
| # | Principle |
|---|---|
| **1** | `main` (CM_theBuilder) has final say on all architecture decisions |
| **2** | `sub` handles project-level decisions only |
| **3** | `sub` cannot override `main` decisions |
| **4** | File naming: `conventions.md` (main) vs `n-conventions.md` (sub) |
| **5** | Polymorphism — same file type, different scope |
| **6** | When `main` sends instructions 1,2,3 — `sub` must return results for 1,2,3 |
| **7** | If `sub` does additional steps — must declare them and show results |
| **8** | `handoff.md` is the only official communication bridge |

### Principle2blueprint — File Inheritance
| Level | File | Scope |
|---|---|---|
| **main** | `conventions.md` | Applies to ALL projects |
| **main** | `security.md` | Applies to ALL projects |
| **main** | `dev_environment.md` | Applies to ALL projects |
| **sub** | `n-conventions.md` | Project specific — inherits from main |
| **sub** | `n-security.md` | Project specific — inherits from main |

> **Rule:** Sub files EXTEND main files — never replace them.
> **Rule:** If conflict — main wins.

### Principle3handoff — Communication Rules
| Rule | Detail |
|---|---|
| All formal decisions logged in `#decisions` | No exceptions |
| All instructions numbered in `#instructions` | Sub must respond to each number |
| Sub additional steps declared in `#responses` | With output shown |
| `#informal_chat` has no decision precedence | For nuance and context only |
| Incomplete `#responses` = handoff rejected | Sub must complete all items |
| File requests go in `#file_request` | Both main and sub can request files |

### Principle4files — File Movement Convention
| Rule | Detail |
|---|---|
| Always use `mv` not `cp` | Avoids duplicates like `readme(1).md` |
| Move from Downloads to repo directly | `mv /sdcard/Download/file.md ~/Git/repo/docs/` |
| Never keep files in Downloads after moving | Downloads stays clean |

---

## #instructions

> Written by: **main**
> Must be responded to by: **sub**
> Format: numbered list — sub responds with matching numbers

| # | Instruction | Priority | Expected Output |
|---|---|---|---|
| — | — | — | — |

---

## #responses

> Written by: **sub**
> Must address every number in `#instructions`
> Format: matching numbers + result + output

| # | Response | Status | Output |
|---|---|---|---|
| — | — | — | — |

> **Sub additional steps (if any):**

| # | Additional Step | Reason | Output |
|---|---|---|---|
| — | — | — | — |

---

## #file_request

> Used when either main or sub needs a file from the other.
> Requested files must be attached to next handoff response.
> Future: Agent PM handles this automatically.

| # | Requested By | File Needed | From | Reason | Status |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

---

## #decisions

> Formal decisions only.
> Both main and sub must agree before logging here.
> Once logged — cannot be changed without new handoff.

| # | Decision | Made By | Date |
|---|---|---|---|
| — | — | — | — |

---

## #pending

| # | Item | Waiting On | Priority |
|---|---|---|---|
| — | — | — | — |

---

## #files_changed

| File | Changed By | Type of Change |
|---|---|---|
| — | — | — |

---

## #informal_chat

> ⚠️ This section has NO decision-making precedence.
> Use for: nuance, context, thinking out loud, questions, observations.
> Nothing here is binding.

```
[main] — 

[sub] — 
```

---

## #status

| Field | Detail |
|---|---|
| **Handoff opened** | |
| **Handoff closed** | |
| **Closed by** | |
| **Next handoff reference** | |
