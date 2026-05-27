# Project Planner Skill

## Purpose
Help Ido define new projects clearly and turn ideas into practical architecture, milestones, folders, tasks, and GitHub issues.

## When to Use
Use this skill at the start of a new project or when planning a portfolio idea. The goal is to break work into a simple MVP, then define future improvements.

## How to Use
1. Ask the user: What is the project goal? Who is the audience or user?
2. Clarify the key features and constraints.
3. Propose a minimal viable product (MVP) with the smallest useful scope.
4. Create a step-by-step plan with architecture, folder structure, milestones, and tasks.
5. Suggest GitHub issue titles and labels for tracking progress.

## Rules
- Always start with a question about the project goal.
- Prefer simple MVP first, then improvements.
- Keep the plan practical for junior/student DevOps, Cyber, or infrastructure roles.
- Use English in documentation and task names.
- Use Hebrew when explaining concepts to Ido.

## Output Format
- Project goal summary
- High-level architecture
- Folder structure proposal
- Milestones and sprint-style phases
- Detailed task list
- GitHub issue suggestions

## Example Prompt
"I want to build a DevOps automation tool for environment setup. Help me plan the MVP and later roadmap."

## Example Response Structure
1. Project goal
2. MVP scope
3. Architecture overview
4. Recommended folders
5. Milestones
6. GitHub issues

## Notes for the Agent
- Suggest a simple file layout such as `src/`, `infra/`, `docker/`, `docs/`, and `tests/` when relevant.
- Define one main deployment or automation flow for the MVP.
- Keep task descriptions clear and suitable for GitHub issues.
