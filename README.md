
# 📱 React Native Task Manager App

A simple task management mobile app built with **React Native** and **Express.js** backend. Users can add, update, delete, and view tasks.

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- View task list
- Backend API with Express.js and PostgreSQL

---

## 🛠️ Tech Stack

**Frontend:**
- React Native
- Expo (optional)
- React Hooks
- Fetch API

**Backend:**
- Express.js
- Sequelize ORM
- PostgreSQL

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/amitdhiman07/TodoApp.git
cd TaskApp
```

### 2. Install dependencies

```bash
npm install
```

---

## 📲 Running the App

### For React Native (Expo)

```bash
npx expo start
```

- Scan QR code from Expo Go app on your Android/iOS device

---

## 🌐 Backend Setup

Go to the `server` directory if you have one or configure Express inside the root.

### Install dependencies

```bash
npm install express sequelize pg pg-hstore cors
```

### Run backend server

```bash
node server.js 
or
nodemon server.js
```

Make sure PostgreSQL is running and you’ve created a database (with a `Task` model).

---


---

## 🔗 API Endpoints

| Method | Route              | Description        |
|--------|--------------------|--------------------|
| GET    | /api/tasks         | Fetch all tasks    |
| POST   | /api/tasks         | Add new task       |
| PATCH  | /api/tasks?id=1    | Update a task      |
| DELETE | /api/tasks?id=1    | Delete a task      |

---

## 🌍 Deployment (Free)

- 📦 APK: Use `eas build -p android` and share the APK
- 🌐 Web: Convert using `expo export:web` and deploy via:
  - [Vercel](https://vercel.com)
  - [Netlify](https://netlify.com)
  - [Firebase Hosting](https://firebase.google.com/products/hosting)

---

## 📌 Author

- Name: *Amit Dhiman*
- GitHub: [@amitdhiman07](https://github.com/amitdhiman07)

---


