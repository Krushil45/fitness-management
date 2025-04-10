# 🏋️‍♂️ Fitness Management System

A full-stack Fitness Management System that demonstrates how **Node.js**, **AngularJS**, and **MongoDB** work together to build a dynamic web application. Users can book services, view suggested workout plans, and contact the admin for inquiries or support.

---

## 🚀 Features

- 📋 **Service Booking**: Users can book various fitness-related services.
- 💪 **Workout Suggestions**: Smart recommendations based on fitness goals.
- 📩 **Contact Admin**: Contact form to get in touch with the system administrator.
- 📊 **MongoDB Integration**: For storing service bookings and contact messages.

---

## 📂 Project Structure

FITNESSMANAGEMENTSYSTEM/ │ ├── node_modules/ # Node dependencies ├── public/ # Static files served │ ├── booking.html │ ├── contact.html │ ├── ex.html │ ├── gym1.jpg │ ├── gym2.jpg │ ├── gym3.jpg │ ├── gym4.jpg │ ├── services.html │ ├── table.html │ └── workouts.html │ ├── package.json # Project metadata ├── package-lock.json # Exact dependency tree ├── script.js # Client-side logic ├── server.js # Node.js Express server

---

## 🛠️ Technologies Used

| Frontend         | Backend        | Database    |
|------------------|----------------|-------------|
| AngularJS        | Node.js        | MongoDB     |
| HTML, CSS        | Express.js     | Mongoose    |

---
## ⚙️ How to Run the Project

Install Backend Dependencies
cd backend
npm install

---

Start the Backend Server
node app.js

---

Serve the Frontend
If you're using AngularJS without CLI:
cd frontend

# Serve using a live server extension or any static server (e.g., http-server)
Or if integrated with Express:
# Backend should already serve frontend static files

---

🌐 Environment Variables
Create a .env file in the backend/ folder (if needed):
PORT=5000
MONGO_URI=mongodb://localhost:27017/fitness_db

---

📬 API Endpoints
Method	Endpoint	Description
POST	/api/bookings	Book a service
GET	/api/workouts	Get workout suggestions
POST	/api/contact	Send message to admin

---

📸 Screenshots
Home :- ![image](https://github.com/user-attachments/assets/04fad336-c8bb-4202-8c5c-8e1d69e9ffcd)
Services :- ![image](https://github.com/user-attachments/assets/97bed408-7b72-4c67-9936-44e7284420c4)

---

🧠 Purpose
This project is built as a learning demonstration for how a MERN-like architecture (MongoDB, Express.js, AngularJS, Node.js) can be used to develop a functional full-stack web application. It’s ideal for educational or demo purposes.

---
👨‍💻 Author
Krushil Kapupara
https://www.linkedin.com/in/krushil-kapupara || https://github.com/Krushil45

---

📄 License
This project is licensed under the MIT License. Feel free to use and modify it!

---

Let me know if you'd like this customized more for deployment (like on Vercel or Render), or want to include actual screenshots, environment setup, or `.env.example`.
Let me know if you'd like to:
- Add MongoDB or any database for storing bookings
- Connect the contact form with a real backend
- Style with Tailwind or Bootstrap

I'd be happy to help you level it up!
