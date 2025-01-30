## Contribution Guide

Thank you for considering contributing to our project! We appreciate your interest and look forward to collaborating with you. To ensure effective cooperation, please adhere to the guidelines provided in this document.

### Naming Conventions

#### Commit Messages

**Please follow this format for commit messages:**
>#### single change Format : 
> **Message** = \<type>(\<scope>): \<subject> <br>
> Types: new, add, fix, docs, style, refactor, test <br>
>**Examples:**
>- `new(home): created home page`
>- `add(auth): add login functionality`
>- `fix(navbar): resolve dropdown issue`

<br>

>#### Multiple changes Format : 
> **Message** = \<Action> <br>
> **Description** = list of single updates <br>
> Action: Major changes, Minor changes, Bug fixes  <br>
>**Examples:**
>- Message = `Minor changes`
>- Description = `-add(auth): add login functionality, -fix(navbar): resolve dropdown issue`

#### Component Naming
For React components:
- **Component Names:** Use PascalCase.
  Example: `UserProfile`, `LoginButton`
- **File Names:** Match the file name and use `.jsx` for pages and `.js` for components.
  Example: `UserProfile.jsx`