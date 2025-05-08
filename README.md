<!-- README.md -->

<h1 align="center">zen-debug</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/skyzzkl/zen-debug/main/assets/logo.png" alt="zenthra logo" width="80" />
</p>

<p align="center">
  A simple, fast and colorful logging tool for Node.js applications.<br/>
  With distinct levels, automatic timestamps and an intuitive API.
</p>

<p align="center">
  <!-- Linha 1: GitHub e Licença -->
  <a href="https://github.com/skyzzkl/zen-debug">
    <img src="https://img.shields.io/badge/GitHub-Repo-lightgrey?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
  <a href="https://creativecommons.org/licenses/by-nd/4.0/">
    <img src="https://img.shields.io/badge/license-CC--BY--ND--4.0-lightgrey?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTguNzUuNzVWMmguOTg1Yy4zMDQgMCAuNjAzLjA4Ljg2Ny4yMzFsMS4yOS43MzZjLjAzOC4wMjIuMDguMDMzLjEyNC4wMzNoMi4yMzRhLjc1Ljc1IDAgMCAxIDAgMS41aC0uNDI3bDIuMTExIDQuNjkyYS43NS43NSAwIDAgMS0uMTU0LjgzOGwtLjUzLS41My41MjkuNTMxLS4wMDEuMDAyLS4wMDIuMDAyLS4wMDYuMDA2LS4wMDYuMDA1LS4wMS4wMS0uMDQ1LjA0Yy0uMjEuMTc2LS40NDEuMzI3LS42ODYuNDVDMTQuNTU2IDEwLjc4IDEzLjg4IDExIDEzIDExYTQuNDk4IDQuNDk4IDAgMCAxLTIuMDIzLS40NTQgMy41NDQgMy41NDQgMCAwIDEtLjY4Ni0uNDVsLS4wNDUtLjA0LS4wMTYtLjAxNS0uMDA2LS4wMDYtLjAwNC0uMDA0di0uMDAxYS43NS43NSAwIDAgMS0uMTU0LS44MzhMMTIuMTc4IDQuNUguMTYyYy0uMzA1IDAtLjYwNC0uMDc5LS44NjgtLjIzMWwtMS4yOS0uNzM2YS4yNDUuMjQ1IDAgMCAwLS4xMjQtLjAzM0g4Ljc1VjEzaDIuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTYuNWEuNzUuNzUgMCAwIDEgMC0xLjVoMi41VjMuNWgtLjk4NGEuMjQ1LjI0NSAwIDAgMC0uMTI0LjAzM2wtMS4yODkuNzM3Yy0uMjY1LjE1LS41NjQuMjMtLjg2OS4yM2gtLjE2MmwyLjExMiA0LjY5MmEuNzUuNzUgMCAwIDEtLjE1NC44MzhsLS41My0uNTMuNTI5LjUzMS0uMDAxLjAwMi0uMDAyLjAwMi0uMDA2LjAwNi0uMDE2LjAxNS0uMDQ1LjA0Yy0uMjEuMTc2LS40NDEuMzI3LS42ODYuNDVDNC41NTYgMTAuNzggMy44OCAxMSAzIDExYTQuNDk4IDQuNDk4IDAgMCAxLTIuMDIzLS40NTQgMy41NDQgMy41NDQgMCAwIDEtLjY4Ni0uNDVsLS4wNDUtLjA0LS4wMTYtLjAxNS0uMDA2LS4wMDYtLjAwNC0uMDA0di0uMDAxYS43NS43NSAwIDAgMS0uMTU0LS44MzhMMi4xNzggNC41SDEuNzVhLjc1Ljc1IDAgMCAxIDAtMS41aDIuMjM0YS4yNDkuMjQ5IDAgMCAwIC4xMjUtLjAzM2wxLjI4OC0uNzM3Yy4yNjUtLjE1LjU2NC0uMjMuODY5LS4yM2guOTg0Vi43NWEuNzUuNzUgMCAwIDEgMS41IDBabTIuOTQ1IDguNDc3Yy4yODUuMTM1LjcxOC4yNzMgMS4zMDUuMjczczEuMDItLjEzOCAxLjMwNS0uMjczTDEzIDYuMzI3Wm0tMTAgMGMuMjg1LjEzNS43MTguMjczIDEuMzA1LjI3M3MxLjAyLS4xMzggMS4zMDUtLjI3M0wzIDYuMzI3WiIvPjwvc3ZnPg==" alt="License Badge" />
  </a>
</p>

<p align="center">
  <!-- Linha 2: Instalação -->
  <a href="https://www.npmjs.com/package/zen-debug">
    <img src="https://img.shields.io/npm/v/zen-debug?color=blue&style=for-the-badge&logo=npm" alt="NPM version" />
  </a>
  
  <a href="https://yarnpkg.com/package?q=zen-debug&name=zen-debug">
  <img src="https://img.shields.io/badge/yarn-add-blue?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn Add" />
  </a>
  
  <img src="https://img.shields.io/badge/pnpm-add-blue?style=for-the-badge&logo=pnpm&logoColor=white" alt="PNPM Add" />
</p>

<hr/>

<h2 align="center">About</h2>

<p align="center">
  <b>zen-debug</b> provides an efficient and beautiful solution for logging in your projects.
</p>

<ul>
  <li>Visual facilitation with colors</li>
  <li>Integrated timestamps</li>
  <li>Minimalist API</li>
  <li>Error and exception handling</li>
</ul>

<hr/>

<h2 align="center">Installation</h2>

```bash
# npm
npm install zen-debug

# yarn
yarn add zen-debug

# pnpm
pnpm add zen-debug
```

<hr/>

<h2 align="center">Usage example</h2>

<h4> ESM - ECMAScript (RECOMENDED) </h4>

```javascript
import log from "zen-debug";

log.info("server started.");
log.conn("client connected.");
log.warn("high memory usage.");
log.error("database inaccessible.");
```

<h4> CJS - CommonJS (RISKS OF ERROR) </h4>

```javascript
const log = require("zen-debug");

log.info("server started.");
log.conn("client connected.");
log.warn("high memory usage.");
log.error("database inaccessible.");
```

<hr/>

<h2 align="center">Logging methods</h2>

<table align="center">
  <thead>
    <tr>
      <th>Methods</th>
      <th>Descriptions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>log.info</code></td>
      <td>Normal information</td>
    </tr>
    <tr>
      <td><code>log.conn</code></td>
      <td>Connections and server</td>
    </tr>
    <tr>
      <td><code>log.warn</code></td>
      <td>Warning or alert</td>
    </tr>
    <tr>
      <td><code>log.error</code></td>
      <td>Errors or exceptions</td>
    </tr>
  </tbody>
</table>

<p align="center">
  <code>[2025-05-05T02:46:13.889Z][INFO]  Example log output</code>
</p>

<hr/>
<p align="center">
  Distributed under <a href="https://creativecommons.org/licenses/by-nd/4.0/">License CC-BY-ND-4.0</a><br>by skyzzk.
</p>
