# COP4710 Final Project — University Database

A full-stack web app with a React frontend (Vite) and an Express/Node.js backend connected to a MySQL database.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- MySQL server running locally (or accessible remotely)

---

## Database Setup

1. Create a MySQL database and import the schema and seed data:

```bash
mysql -u <your_user> -p < db_proof/schema.sql
mysql -u <your_user> -p < db_proof/data.sql
```

---

## Environment Variables

Create a `.env` file in the **project root** (`COP4710-FINAL-PROJECT/.env`):

```env
HOST=localhost
DB_USER=your_mysql_username
PASSWORD=your_mysql_password
DATABASE=your_database_name
PORT=3000
```

---

## Backend

```bash
# From the project root
npm install

# Start the backend server (runs on port 3000 by default)
node Backend/src/server.js
```

The API will be available at `http://localhost:3000/api/`.

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server will be available at `http://localhost:5173` (default Vite port).

---

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `*` | `/api/students` | Student records |
| `*` | `/api/instructors` | Instructor records |
| `*` | `/api/courses` | Course records |
| `*` | `/api/staff` | Staff records |
| `*` | `/api/enrollments` | Enrollment records |
| `*` | `/api/grades` | Grade records |
| `*` | `/api/schedules` | Schedule records |
