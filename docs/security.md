# security.md
> **Platform:** CM_theBuilder
> **Type:** Base security blueprint — applies to ALL projects
> **Version:** 1.0 — Built from cm-project-registry benchmark
> **Last Updated:** 2026-05-05
> **Status:** 🟢 Active

---

## How to Use This File

### For a human (you):
1. Read this file before starting any new project
2. Use Section 7 as security checklist for every project
3. Create `n-security.md` in each project that extends this file

### For an AI:
1. Read this file before writing any code
2. Enforce all rules without exception
3. Flag any violation immediately
4. Project-level `n-security.md` extends this — never replaces it

---

## Section 1 — Core Security Principles

| # | Principle | Rule |
|---|---|---|
| **1** | **Never hardcode secrets** | No passwords, API keys, tokens in code — ever |
| **2** | **Input validation at entry point** | Always validate before processing |
| **3** | **Least privilege** | Only give minimum access needed |
| **4** | **Defence in depth** | Multiple layers of security — not just one |
| **5** | **Fail securely** | Errors should not expose system details |
| **6** | **Keep dependencies updated** | Run `npm audit` or equivalent regularly |

---

## Section 2 — Secrets Management

| Rule | Detail |
|---|---|
| Never hardcode secrets in code | Use environment variables |
| Always use `.env` file for local secrets | Never commit `.env` to git |
| Always add `.env` to `.gitignore` | Before first commit |
| Always use GitHub Secrets for CI/CD | Never put secrets in `.yml` files |
| Always use dedicated SSH key for GitHub Actions | Never reuse personal keys |

### Required `.gitignore` entries (minimum):
```
node_modules/
.env
*.log
.DS_Store
dist/
```

### Required GitHub Secrets for CI/CD:
| Secret | Purpose |
|---|---|
| `SSH_PRIVATE_KEY` | SSH into deployment server |
| `SSH_HOST` | Server IP or hostname |
| `SSH_USER` | Server username |
| `TAILSCALE_AUTH_KEY` | Join Tailscale network |

---

## Section 3 — Input Validation Rules

| Rule | Detail |
|---|---|
| Always validate at entry point | Never trust user input |
| Check required fields exist | Return 400 if missing |
| Check field types | Return 400 if wrong type |
| Sanitize string inputs | Remove dangerous characters |
| Never pass raw input to database | Always sanitize first |

### Standard error responses:
| Scenario | HTTP Code | Response |
|---|---|---|
| Missing required fields | 400 | `{ error: "Missing fields", missing: [...] }` |
| Invalid field type | 400 | `{ error: "Invalid field type", field: "..." }` |
| Resource not found | 404 | `{ error: "Not found" }` |
| Server error | 500 | `{ error: "Internal server error" }` |

---

## Section 4 — API Security

| Rule | Detail |
|---|---|
| Configure CORS properly | Never use `origin: '*'` in production |
| Add rate limiting | Prevent request flooding |
| Add API authentication | Before going public |
| Never expose stack traces | Catch all errors |
| Log all requests | For audit trail |

### CORS — Development vs Production:
```javascript
// Development — internal only via Tailscale
cors({ origin: '*' })

// Production — restrict to specific domain
cors({ origin: 'https://yourdomain.com' })
```

### Rate limiting — minimum setup:
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100                   // max 100 requests per window
});
app.use(limiter);
```

---

## Section 5 — Docker Security

| Rule | Detail |
|---|---|
| Never run container as root | Add `USER node` to Dockerfile |
| Always use specific image version | Never use `latest` tag |
| Always use `--restart always` | Keep container running |
| Scope passwordless sudo to docker only | Never give full sudo |
| Docker runs on Machine 2 only | Never Machine 1 |

### Non-root Docker user setup:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
USER node          # ← always add this
CMD ["node", "src/server.js"]
```

### Passwordless sudo scoped to docker:
```bash
echo "cm ALL=(ALL) NOPASSWD: /usr/bin/docker" | sudo tee /etc/sudoers.d/cm-docker
```

---

## Section 6 — Network Security

| Rule | Detail |
|---|---|
| Keep API private via Tailscale during development | Never expose to public internet until ready |
| Use SSL/TLS when going public | Let's Encrypt is free |
| Never expose unnecessary ports | Only open what is needed |
| Use environment variables for IPs | Never hardcode Tailscale IPs in code |

---

## Section 7 — Security Checklist (Use for Every Project)

### Before first commit:
- [ ] `.gitignore` created with `node_modules/`, `.env`, `*.log`
- [ ] No hardcoded secrets in any file
- [ ] No API keys or passwords in code

### Before first deployment:
- [ ] GitHub Secrets configured
- [ ] Dedicated SSH key generated for GitHub Actions
- [ ] Passwordless sudo scoped to docker only on server
- [ ] `tailscale/github-action@v2` added to CI/CD pipeline
- [ ] Input validation on all POST/PUT endpoints
- [ ] CORS configured
- [ ] `npm audit` run — 0 high/critical vulnerabilities

### Before going public:
- [ ] CORS `origin: '*'` replaced with specific domain
- [ ] Rate limiting added
- [ ] API authentication added
- [ ] Docker container running as non-root user
- [ ] SSL/TLS certificate configured
- [ ] All hardcoded IPs moved to environment variables

---

## Section 8 — Known Gaps (Platform Level)

These gaps exist across all current projects — fix before public release:

| # | Gap | Priority | Affects |
|---|---|---|---|
| 1 | No API authentication | 🔴 High | cm-project-registry |
| 2 | No rate limiting | 🔴 High | cm-project-registry |
| 3 | CORS `origin: '*'` | 🟡 Medium | cm-project-registry |
| 4 | Docker runs as root | 🟡 Medium | cm-project-registry |
| 5 | Tailscale IP hardcoded in docs | 🟢 Low | cm-project-registry |

---

## Section 9 — How Sub Projects Use This File

Every project creates its own `n-security.md` that:
1. References this file as parent
2. Documents project-specific measures
3. Lists project-specific gaps
4. Never overrides rules in this file

### Template header for `n-security.md`:
```markdown
# n-security.md
> **Inherits from:** main — security.md
> **Project:** [project name]
> All rules from main/security.md apply.
> Project-specific additions below only.
```

---

## Section 10 — Benchmark Reference

> This file was built from real findings in `cm-project-registry`.
> All rules here are validated from actual implementation experience.

| Source | Finding |
|---|---|
| `cm-project-registry` | CORS needs restriction before public |
| `cm-project-registry` | Input validation must be at entry point |
| `cm-project-registry` | Dedicated SSH key needed for CI/CD |
| `cm-project-registry` | Passwordless sudo must be scoped |
| `cm-project-registry` | Docker non-root user needed before public |
