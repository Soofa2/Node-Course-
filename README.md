# Node.js Course — Maximilian Schwarzmüller

Hands-on code, exercises, and notes following Maximilian Schwarzmüller's [Node.js](https://www.udemy.com/course/nodejs-the-complete-guide/) course. Each section builds on the previous one, starting from bare-metal Node.js and progressing to Express.js.

---

## Structure

```
00-Back-end-from-first-princiapal/   Theory: how the web works under the hood
01-UnderstandingTheBasics /           Vanilla Node.js — http module, routing, request/response
02-Debugging/                         Same app with debugger setup & nodemon
03-ExpressJS/                         Express.js — middleware, routing, static files, views
package.json                          Root-level Express dependency (shared)
```

---

## Section Breakdown

### `00-Back-end-from-first-princiapal/` — Backend Fundamentals

> [!NOTE]
> This folder contains concise, plain-English explanations of core backend concepts, written with the help of **DeepSeek** (an AI assistant) to break down complex topics in an accessible way. It's a reference you can return to anytime to refresh fundamentals without re-watching hours of video.

| File | Topics |
|------|--------|
| `001-HTTP.md` | HTTP protocol, methods, status codes, headers, statelessness |
| `002-DNS&TCP.md` | DNS resolution, TCP 3-way handshake, TLS, UDP vs TCP |

### `01-UnderstandingTheBasics /` — Vanilla Node.js

Building a web server from scratch with Node's built-in `http` module.

| File | Purpose |
|------|---------|
| `app.js` | Server entry — creates `http.createServer` on port 3000 |
| `routes.js` | Request handler — parses URL/method, serves HTML, handles form POST |
| `message.txt` | Output file written by the POST handler |
| `moduleSummary.md` | Key takeaways: event loop, async execution, Buffer / chunk parsing |
| `moduleAssignment/` | **Assignment**: server with `/` (greeting + form), `/users` (dummy list), `POST /create-user` (parse + log username) |

### `02-Debugging/` — Debugging

Identical code to section 01, but with:

- `nodemon` as a dev dependency for auto-restart
- Debugging configuration ready (launch.json / VS Code breakpoints)

### `03-ExpressJS/` — Express.js

Reimplementing the server with Express — cleaner routing, middleware pattern, static files.

| Path | Purpose |
|------|---------|
| `app.js` | Main Express app — registers middleware, routes, 404 fallback |
| `routes/admin.js` | `GET /add-product` + `POST /admin/product` |
| `routes/shop.js` | `GET /` — serves shop page |
| `util/path.js` | Helper to get the project root directory |
| `views/` | Static HTML templates (shop, add-product, 404) |
| `assignment/` | **Assignment 1**: Express app with 2 middleware functions, `/` and `/users` routes |
| `assignement_2/` | **Assignment 2**: Express serving 2 HTML files with static CSS — full setup with routes, views, public assets |

---

## Running the Code

Each section has its own `package.json` (except section 01 which uses no dependencies). Install deps and start:

```bash
cd 03-ExpressJS
npm install
npm start
```

Section 02 and 03 use `nodemon` for auto-reloading. Express runs on **port 3000** by default.
