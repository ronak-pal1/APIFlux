<p align="center">
<img src="https://github.com/ronak-pal1/APIFlux/blob/main/client/public/apifluxlogo.png" alt="API flux logo" width="150" />
</p>

# APIFlux: API Scheduling, Monitoring, and Statistics Platform

**HackFrost Hackathon Project**  
**Author:** Ronak Paul

---

## 🌟 Introduction

**APIFlux** is a comprehensive platform designed to simplify and enhance API management by providing real-time scheduling, monitoring, and statistical insights. Built with modern web technologies and workflow orchestration tools, APIFlux empowers developers to ensure their APIs perform optimally and meet compliance standards.

---

## 🚀 Features

- **API Scheduling**: Automate API calls at defined intervals.
- **API Monitoring**: Track API health,response times, hit, total requests with real-time insights.
- **Statistics Dashboard**: Visualize API performance metrics using an interactive UI.
- **Kestra Integration**: Seamlessly handle event-driven workflows and automation.
- **Alerts and Notifications**: Get instant notifications for API downtime or anomalies.

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, TailwindCSS, mui-icons, Vercel (for deploying)
- **Backend**: ExpressJS, AWS
- **Database**: MongoDB
- **Workflow Automation**: Kestra

---

## 🖥️ System Architecture

Below is the overall system design for APIFlux, showcasing the integration of Kestra for workflow automation:

![System Architecture](https://github.com/ronak-pal1/APIFlux/blob/main/client/src/assets/system-architecture.png)

---

## 🔗 Kestra

Kestra is utilized to handle workflow automation for:

1. **Streamlining Scheduling:** Automating periodic API checks.
2. **Improving Efficiency:** Reducing manual effort and ensuring reliable monitoring.
3. **Reduing Overload:** Kestra helps to reduce overhead by taking care of the all the pipelining by just a simple yaml file.

### Kestra Flow Example

The kestra flow in yaml you can find at **api_monitoring_kestra.yaml** file

---

## 📊 Dashboard Highlights

The platform's dashboard provides:

- API health for each of the scheduled APIs
- Response time hits and misses
- Scheduling more API for health checks
- Visualization through bargraph

---

## 🌍 Environment Variables

To configure **APIFlux**, the following environment variables are required:

### Backend Configuration

| Variable Name           | Description               | Example Value                      |
| ----------------------- | ------------------------- | ---------------------------------- |
| `MONGO_URI`             | MongoDB connection string | `mongodb://localhost:27017/api-db` |
| `ACCESS_TOKEN_SECRET`   | Secret for access token   | `abcd`                             |
| `ACCESS_TOKEN_EXPIRY`   | Expiry for access token   | `2d`                               |
| `REFRESH_TOKEN_SECRET ` | Secret for refresh token  | `abcdefg`                          |
| `REFRESH_TOKEN_EXPIRY ` | Expiry for refresh token  | `7d`                               |

### Frontend Configuration

| Variable Name      | Description          | Example Value           |
| ------------------ | -------------------- | ----------------------- |
| `VITE_BACKEND_URL` | Backend API endpoint | `http://localhost:3000` |

### Setting Up Environment Variables

1. Create a `.env` file in the respective directories (backend and frontend).
2. Add the environment variables based on the examples provided above.

---

## 🛠️ Local Setup

To set up **APIFlux** locally, follow these steps:

### Prerequisites

- Node.js (v14 or above)
- MongoDB
- Kestra installed locally

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ronak-paul/api-flux.git
   cd api-flux
   ```
2. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install
   # Frontend
   cd ../frontend
   npm install
   ```
3. Start the backend server:
   ```bash
   cd backend
   npx tsc
   node dist/index.js
   ```
4. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
   ```

Now **APIFlux** is setted up in your local system

---

## 🏆 Sustainability & Open-Source Best Practices

1. **Modular Code:** Components and workflows are reusable.
2. **Extensibility:** Add new monitoring tasks without breaking existing functionality.
3. **Transparency:** Project is open-sourced under MIT License.
4. **Resource Optimization:** Scheduled tasks minimize resource consumption.

---

## 📸 Screenshots

### Dashboard View

![dashboard view](https://github.com/ronak-pal1/APIFlux/blob/main/client/src/assets/dashboard.png)

### Statistics

![statistics](https://github.com/ronak-pal1/APIFlux/blob/main/client/src/assets/statistics.png)

---

## 🤝 Contributions

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes and push them to the branch.
4. Submit a Pull Request.
