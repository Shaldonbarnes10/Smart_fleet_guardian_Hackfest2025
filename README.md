# Smart Fleet Guardian

**Smart Fleet Guardian** is a predictive maintenance system designed to enhance fleet management by forecasting potential failures before they happen.
Using machine learning and real-time data monitoring, it helps fleet operators improve vehicle reliability, reduce downtime, and optimize maintenance schedules.

---

## 🚀 Features
- Predictive maintenance alerts using a Random Forest Machine Learning model
- Dashboard to monitor real-time fleet health and performance
- Historical data visualization for better decision-making
- Automated maintenance scheduling recommendations
- Scalable system architecture built for growing fleets

---

## 🛠️ Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL
- **Machine Learning**: Random Forest Algorithm
- **APIs**: RESTful APIs for frontend-backend communication

---

## 📦 Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-fleet-guardian.git
   cd smart-fleet-guardian
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Database Setup**
   - Install PostgreSQL
   - Create the necessary tables and seed initial data (scripts available in `/backend/db`)

5. **Environment Variables**
   Create a `.env` file in both frontend and backend with necessary environment variables:
   ```
   DATABASE_URL=your_postgresql_connection_url
   PORT=backend_server_port
   FRONTEND_URL=http://localhost:3000
   ```

---

## 📊 Machine Learning Model
- The Random Forest model is trained using historical fleet data (mileage, usage patterns, sensor readings, etc.)
- Predictions are made server-side and results are sent to the dashboard in real-time.

---

## ✨ Future Enhancements
- Live vehicle telematics integration
- Driver behavior analysis
- Mobile app version
- AI-driven maintenance cost optimization

---

## 🗀️ Screenshots
> (Insert screenshots or system architecture diagram here)

---

## 🤝 Contribution Guidelines
We welcome contributions!  
If you'd like to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Submit a pull request

---

## 👥 Team
- **Shaldon Barnes**

*(Add teammates if needed)*

---

## 📄 License
This project is licensed under the **MIT License** — see the LICENSE file for details.

---

# 🚚💨 *Smart Fleet Guardian: Keep your fleet moving smarter, not harder.*



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
