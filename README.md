# Multi-User Event Locator Application

## 📌 Overview
This project is a multi-user event locator application that allows users to discover, manage, and interact with events based on their location and preferences. It showcases backend development skills in Node.js and integrates various technologies like PostgreSQL with PostGIS, Redis/RabbitMQ, and React** to handle geospatial data, asynchronous tasks, and real-time notifications.

## 🎯 Features
### User Management
- Secure user registration and login** with password hashing.
- Users can set their location and preferred event categories.

### Event Management
- **CRUD operations** (Create, Read, Update, Delete) for events.
- Each event includes title, description, location (latitude/longitude), date/time, and category.

### Event Discovery & Filtering
- Users can search for events based on location (radius search using geospatial queries).
- Filter events by categories.
- Integration with **Google Maps API** to display event locations.

### Internationalization (i18n)
- Support for multiple languages (users can select their preferred UI language).

### Notifications System
- Message queuing system using Redis Pub/Sub or RabbitMQ to send notifications about upcoming events.
- (Optional) Delayed notifications closer to the event time.

### Additional Features
- Users can rate and review events.
- Ability to save favorite events.
- Real-time updates for event changes.

## 🛠️ Tech Stack
### Backend
- Node.js with Express.js (RESTful API)
- PostgreSQL with PostGIS (for geospatial queries)
- Redis/RabbitMQ (for asynchronous notifications)
- bcrypt.js (password hashing)
- Jest/Mocha (unit testing)

### Frontend
- React (with TypeScript)
- Tailwind CSS (for styling)
- i18next (for internationalization)
- Google Maps API (for event location visualization)

### Testing & Deployment
- Jest/Mocha for unit testing
- Docker (optional, for containerized deployment)
- CI/CD pipeline (GitHub Actions or similar)

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/MaryNayram/Event-Locator-App---Backend
 cd event-locator
```

### 2️⃣ Install Dependencies
```sh
 npm install  # Installs backend dependencies
 cd frontend && npm install  # Installs frontend dependencies
```


