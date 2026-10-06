# Execution Skill: Strict & Efficient Code Generation

This skill establishes strict runtime constraints and performance guidelines for AI coding agents (e.g., AntiGravity IDE, Cursor, Claude Dev, Bolt). It prevents environment tinkering, halts token waste, and enforces complete code deliverables.

## When to Apply
Apply this skill whenever you are executing code generation, component creation, refactoring, or bug-fixing tasks where efficiency, completeness, and non-breaking changes are required.

---

## Critical System Constraints (Strict Execution)

1. **Environment Lock:**
   - Do NOT install, update, or reconfigure system tools, package managers, or Node.js versions.
   - Use the existing workspace environment and packages as-is.

2. **Complete Code Only:**
   - Write fully functional, production-ready code in a single execution pass.
   - **STRICTLY PROHIBITED:** Placeholders, stub functions, and comments such as `// TODO`, `<!-- Insert code here -->`, or `// ... rest of the file`.

3. **Preserve & Scope:**
   - Preserve all existing working features, structures, layout logic, and styling.
   - Focus EXCLUSIVELY on the requested task. Do not refactor untouched files or clean up unrequested code.
   - Do not develop additional features if not said so.

4. **Concise Output:**
   - Skip long setups, pre-checks, or detailed explanations of what you intend to do.
   - Prioritize immediate file edits/writes and respond with a brief 1-2 sentence summary upon completion.

---

## Execution Workflow

1. Read the user's task requirement and analyze the existing codebase files.
2. Generate or update full file contents directly using the required file-writing tools.
3. Validate that no placeholder comments remain in the generated output.
4. Conclude immediately with a concise summary of modified files.