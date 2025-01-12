# **M-Treat Full-Stack Application**

M-Treat is a full-stack application for managing patient records and authentication. The backend is built with Django and Django REST Framework, while the frontend is developed using React. The application features RESTful APIs and a modern, responsive user interface.

---

## **Description**

M-Treat allows patients to manage their records and  accounts efficiently. It supports functionalities like creating, reading, updating, and deleting patient records and user authentication with secure token-based login.

---

## **Demo**

To explore or contribute to the project, follow the setup instructions below.

---

## **Setup/Installation Requirements**

To get started, you need the following:

- Python 3.10 or later installed on your system.
- Node.js (v18 or later).
- PostgreSQL for managing patient and user data.
- A terminal (Linux, macOS, or Windows) for running the application.

---

## **Setup Steps**

### **Clone the Repository**

1. Go to the repository URL: `https://github.com/E-ugine/M-TREAT-HEALTH`.
2. Copy the SSH URL.
3. In your terminal, navigate to your preferred directory and run:
   ```bash
   git clone <SSH URL>
   cd M-TREAT-HEALTH
   ```

---

### **Install Dependencies**

#### **Backend**

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Set up a virtual environment:
   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. Install required Python libraries using pip:
   ```bash
   pip install -r requirements.txt
   ```

#### **Frontend**

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   # Or, if using Yarn:
   yarn install
   ```

---

### **Run Migrations (Backend)**

1. Navigate back to the backend directory:
   ```bash
   cd ../backend
   ```

2. Migrate the database to create the necessary tables:
   ```bash
   python manage.py migrate
   ```

3. Create a superuser to access the admin panel:
   ```bash
   python manage.py createsuperuser
   ```

---

### **Run the Application**

#### **Backend**

Start the Django development server:
```bash
python manage.py runserver
```

The backend API will be running at `http://127.0.0.1:8000/`.

#### **Frontend**

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Start the development server:
   ```bash
   npm start
   # Or, if using Yarn:
   yarn start
   ```

The frontend will be running at `http://localhost:5173`.

---

## **Test the Application**

### **API Testing**

Use Postman or Insomnia to test the backend endpoints. Some key endpoints include:

#### **Authentication**
- `POST /api/auth/login/`: Authenticate a user and return a token.

#### **Patients**
- `GET /api/patients/`: Retrieve all patients.
- `POST /api/patients/`: Create a new patient.
- `GET /api/patients/<id>/`: Retrieve a specific patient.
- `PUT /api/patients/<id>/`: Update a specific patient.

### **Frontend Testing**

Interact with the frontend interface to ensure all features are working correctly, including user registration, login, and patient management.

---

## **Models**

The application uses the following models:

### **Patient**
Represents a patient with attributes like:
- `id`: Unique identifier for the patient.
- `name`: Full name of the patient.
- `email`: Contact email.
- `phone`: Contact number.

### **User**
Represents a user with attributes like:
- `username`: Unique username.
- `email`: Contact email.
- `password`: Hashed password for authentication.

---

## **Relationships**

- A **User** can manage multiple **Patients**.
- Patients are linked to Users for record-keeping.

---

## **Technologies Used**

### **Backend**
- Django
- Django REST Framework
- PostgreSQL

### **Frontend**
- React
- Redux
- TailwindCSS

---

## **Deployment**

### Backend
1. Set `DEBUG = False` in `settings.py` for production.
2. Use a production-ready server like Gunicorn and a reverse proxy like Nginx.
3. Set up a production database and update your `.env` file.

### Frontend
1. Build the frontend for production:
   ```bash
   npm run build
   ```
2. Deploy the `build/` files to a static hosting provider (e.g., Netlify, Vercel).

---

## **Contributing**

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For questions or suggestions, contact:
- **Email**: agollaeugine@gmail.com.com
- **GitHub**: [E-ugine](https://github.com/E-ugine)

