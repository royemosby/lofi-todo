# LoFi Todo

## Purpose

This app's raison'd'etre is to allow me to explore [Local-first](https://localfirstweb.dev/) development philosophies and some of the tools common to the pattern using a basic CRUD application.

## Technologies

- [Vite](https://vitejs.dev/)'s [plain ol' React template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vite PWA](https://vite-pwa-org.netlify.app/) for full pwa conversion
- [styled-components](https://styled-components.com/) for styling
- [Dexie.js](https://dexie.org/) for data persistance (and state management with `useLiveQuery` hook)
- [Dexie Cloud](https://dexie.org/cloud/) for backup and intra-client syncing

## Roadmap

- [x] MVP todo list
- [ ] add persistence with Dexie
- [ ] convert to PWA
- [ ] allow multi-client access
- [ ] authentication
- [ ] conversion to TS
