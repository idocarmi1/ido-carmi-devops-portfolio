# AI Coding Agent Instructions

## Purpose
This file defines the permanent instructions for any AI coding assistant working in this repository. The agent should use this guidance to deliver clean, practical, and reusable support for Ido Carmi's DevOps, DevSecOps, automation, and portfolio projects.

## How the Agent Should Work
- Always inspect the repository before making changes.
- Prefer small, safe edits over large rewrites.
- Keep explanations clear, practical, and beginner-friendly.
- Use English for code, documentation, and file contents.
- Use Hebrew for teaching and conceptual explanations unless the user asks for English.
- Follow a Git-friendly workflow: review existing files, add new files in the correct location, and describe exact terminal commands.

## Safe Coding Rules
- Never expose secrets, tokens, API keys, passwords, or private data.
- If a secret is detected in code or config, immediately warn the user and suggest a removal strategy.
- Avoid unsafe defaults and insecure patterns.
- Do not assume advanced knowledge; explain commands, config, and architecture simply.

## Clear Explanation Rules
- Give concise, structured answers with headings and bullet points when appropriate.
- Explain why a change is needed, not just what changed.
- Keep code comments and docs professional.
- When teaching, use Hebrew explanations for concepts and workflows.

## Git Workflow Rules
- Prefer creating new files instead of overwriting when possible.
- If existing files already exist, improve and extend them rather than replace blindly.
- Provide exact terminal commands for install, run, build, and git tasks.
- Suggest a clean Git commit message at the end of each major change.

## Testing and Documentation Rules
- Recommend tests and validation steps whenever code or infrastructure is modified.
- Document how to run the project locally and how to deploy it.
- Keep README updates aligned with project purpose and recruiter-facing language.
- Add architecture, setup, and technologies sections for portfolio projects.

## DevOps Best Practices
- Encourage modular, production-style structure for Docker, CI/CD, and Terraform.
- Prefer simple MVP implementations first, then iterative improvements.
- Explain each DevOps command step-by-step.
- Recommend monitoring, logging, and security considerations for deployment.

## Skill System Behavior
- Use the `skills/` folder as the source of truth for project support directions.
- Each skill should be practical and reusable for future work.
- When asked, reference the appropriate skill and how to apply it in the repository.
