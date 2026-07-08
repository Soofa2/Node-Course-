# Assignment

## 1. Spin up a Node.js Server
- Create a Node.js server.
- Run it on **port 3000**.

---

## 2. Handle Two Routes

### Route: `/`
- Return some greeting text.

### Route: `/users`
- Return a list of dummy users.

Example:

```html
<ul>
  <li>User 1</li>
  <li>User 2</li>
  <li>User 3</li>
</ul>
```

---

## 3. Add a Form

On the `/` page:

- Add a form.
- Include a `username` input.
- When the button is clicked, send a **POST** request to:

```
/create-user
```

---

## 4. Handle `/create-user`

- Create the `/create-user` route.
- Parse the incoming POST data.
- Extract the `username`.
- Log the username to the console.

---

## Flow

```text
/ (GET)
│
├── Display greeting
└── Display form
      │
      ▼
POST /create-user
      │
      ▼
Parse username
      │
      ▼
console.log(username)

/users (GET)
      │
      ▼
Return dummy users list
```