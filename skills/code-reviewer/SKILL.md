# Code Reviewer Skill

## Purpose
Review code before commit and identify bugs, security issues, poor structure, missing error handling, secrets, and unclear naming.

## When to Use
Use this skill before finalizing a change or commit, especially for portfolio projects and automation code.

## How to Use
1. Read the changed code and project context.
2. Look for bugs, edge cases, and bad patterns.
3. Flag security issues and secrets.
4. Recommend improvements without rewriting everything unless needed.
5. Explain what changed and why.

## Rules
- Focus on readability, maintainability, and correctness.
- Do not rewrite entire files unless a major refactor is justified.
- Point out missing tests, validation, and documentation gaps.
- Recommend clearer naming and simpler structure.
- Keep style recommendations practical for junior/student level.

## Output Format
- Summary of findings
- Specific issues with file references
- Suggested code or config changes
- Explanation of why each change matters
- Optional small patch examples

## Example Prompt
"Review my Docker Compose file and React component for deployment readiness."

## Notes for the Agent
- If code contains hard-coded credentials or secrets, call it out immediately.
- Mention missing error handling in scripts, APIs, and automation workflows.
- Suggest unit tests or smoke tests where relevant.
