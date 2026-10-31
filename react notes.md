# React JS Notes

React JS is a JavaScript library used to develop a **SPA (Single Page Application)**.

---

## 1. SPA vs MPA

### Single Page Application (SPA)

1. Has only one HTML page
2. Rendering time is very less
3. It continues the request (no fresh start)
4. Examples: Instagram, Gmail, LinkedIn

### Multi Page Application (MPA)

1. Has multiple HTML pages
2. Rendering time is more
3. It starts from scratch on every request
4. Examples: W3Schools, Javatpoint, etc.

---

## 2. Library vs Framework

### Library

1. A library is a collection of predefined code
2. Rules are fewer
3. Examples: React JS, Moment JS, jQuery

### Framework

1. A framework is a collection of libraries
2. Rules are more
3. Examples: Angular JS, Vue JS, Next JS

---

## 3. History of React JS

- React JS was introduced by Facebook in **2011** by **Jordan Walke**
- Facebook used it internally for 2 years
- Instagram started using it in **2012**
- It was declared open source in **May 2013**

---

## 4. Features of React JS

1. A JavaScript library
2. Component-based architecture
3. Open source
4. Used to build SPAs
5. Declarative
6. Unidirectional (one-way) data binding
7. Uses the Virtual DOM

---

## 5. Installation of a React Project

| Step | Command / Action | Purpose |
|------|------------------|---------|
| 1 | `npm create vite@latest` | Install the latest Vite way of creating a React project |
| 2 | `project-name` | Enter a project name |
| 3 | Select a framework | Select **React** (3rd option) |
| 4 | Select a variant | Select **JavaScript** (3rd option) |
| 5 | Select a linter | Select **ESLint** (2nd option) |
| 6 | `cd projectName` | Enter the project folder |
| 7 | `npm install` | Install node modules |
| 8 | `npm run dev` | Start the development server |

---

## 6. Virtual DOM Concept

### Real DOM

The document that end users can see in the browser.

### Virtual DOM

A copy (clone) of the Real DOM.

> **NOTE:** Any updates made in a React component do not reflect directly on the Real DOM or UI. React does all the manipulation in the Virtual DOM first and then renders only those changes into the Real DOM.

### Reconciliation

The process of comparing the Virtual DOM with the Real DOM and rendering all the updated components into the Real DOM.

### Diffing Algorithm

The algorithm used to achieve the reconciliation process.

### Patching

The process of updating the missing/changed nodes in the DOM tree.

---



## 7. Folder Structure

```
node_modules
public
src
package.json
package-lock.json
index.html
```

| Item | Description |
|------|-------------|
| `index.html` | Entry point of the project |
| `node_modules` | Contains all the predefined code (**do not touch**) |
| `public` | Contains all media required for the React app |
| `package.json` and `package-lock.json` | Act as the directory of the project; give information about the libraries present in the project |
| `src` | Source folder where we write the code |

Inside `src`, two important files are maintained:

1. `main.jsx` – the root file
2. `App.jsx` – the parent / top-level component

---
