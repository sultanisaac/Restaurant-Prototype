# 🛠️ GitHub Issues & Project Tracking Guide

This document defines the **Standard Operating Procedure (SOP)** for AI Dev Agents when interacting with the **Dapur Pusaka Nusantara** repository. AI agents must follow this guide in every new session to maintain project discipline.

---

## 🏗️ 1. Core Philosophy
*   **No Issue, No Work**: No code should be written without a corresponding GitHub Issue.
*   **Atomic Updates**: Every chat session should represent progress on an issue (create, update, or close).
*   **Single Source of Truth**: The GitHub Issue board is the heartbeat of the project's milestones.

---

## 🚦 2. Operational Workflow

### Phase A: Discovery
1.  **Read Active Issues**: At the start of a session, the AI agent must list all open issues (`list_issues`) to check the current backlog.
2.  **Verify Context**: Ensure the current task aligns with an existing issue or milestone.

### Phase B: Execution
1.  **Creation**: If a new task is requested that isn't tracked, the AI agent **must** create an issue (`issue_write`) with:
    *   **Title**: Clear, action-oriented (e.g., `FEAT: Implement JSON-LD Structured Data`).
    *   **Body**: Include a task-list (`- [ ]`) of the steps planned.
    *   **Labels**: Apply relevant labels (`enhancement`, `bug`, `seo`, `documentation`).
2.  **Updating**: During the task, the agent should update the issue description with progress (checking off tasks) or add comments (`add_issue_comment`) if roadblocks occur.

### Phase C: Completion
1.  **Closure**: Once a task is finished and verified, the agent must close the issue (`issue_write` with `state: 'closed'`).
2.  **PR Linking**: If the agent creates a Pull Request, it must include `Closes #IssueNumber` in the PR body to automate closure.

---

## 🏷️ 3. Labeling System
*   `enhancement`: New features or UI improvements.
*   `bug`: Technical glitches or design inconsistencies.
*   `SEO`: Traditional search engine optimization.
*   `AEO/GEO`: Answer & Generative Engine optimization (AI-specific).
*   `documentation`: README, Guides, or Implementation plans.
*   `high-priority`: Critical fixes needed for production readiness.

---

## 📝 4. Issue Template (AI Standard)
When creating an issue, the AI should use this structure:
```markdown
## 🎯 Goal
A one-sentence summary of what we are achieving.

## 🛠️ Task List
- [ ] Sub-task 1
- [ ] Sub-task 2
- [ ] Verification

## 🔗 Technical Context
Mention specific files (e.g., `src/data/menu.ts`) or dependencies involved.
```

---

## 🚨 5. Final Reminder for AI Agents
**Before you start coding based on a user prompt:**
1.  **Check**: Is there an issue for this?
2.  **Create**: If not, create it now.
3.  **Reference**: Always mention the issue number (e.g., "Working on #12") in your status updates.
