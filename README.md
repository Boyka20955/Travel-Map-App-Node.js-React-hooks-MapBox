# Travel-App-MapBox

A full-stack travel application that allows users to explore and share travel experiences on an interactive map. Users can register, login, and add pins to locations with reviews and ratings.

## Features

- **Interactive Map**: Powered by MapBox for smooth map interactions
- **User Authentication**: Secure registration and login system
- **Location Pins**: Add pins to map locations with titles, descriptions, and ratings
- **Reviews & Ratings**: Share travel experiences with star ratings
- **Real-time Updates**: View pins added by other users
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **React Map GL** - MapBox integration for React
- **Material-UI** - Component library
- **Axios** - HTTP client
- **Timeago.js** - Time formatting

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 18.0.0 or higher)
- npm or yarn
- MongoDB database
- MapBox account and access token

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Travel-App-MapBox
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

## Environment Variables

### Backend (.env file in backend directory)
Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URL=mongodb://localhost:27017/travelapp
# or your MongoDB Atlas connection string
```

### Frontend (.env file in frontend directory)
Create a `.env` file in the `frontend` directory with the following variables:

```env
REACT_APP_MAPBOX=your_mapbox_access_token_here
```

## Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on `http://localhost:8800`

2. **Start the frontend application:**
   ```bash
   cd frontend
   npm start
   ```
   The frontend application will run on `http://localhost:3000`

## API Endpoints

### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

### Pins
- `POST /api/pins` - Create a new pin
- `GET /api/pins` - Get all pins

## Project Structure

```
Travel-App-MapBox/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Pin.js
│   ├── routes/
│   │   ├── users.js
│   │   └── pins.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── login.css
│   │   │   └── register.css
│   │   ├── App.js
│   │   ├── app.css
│   │   └── index.js
│   ├── package.json
│   └── .env
├── .gitignore
├── TODO.md
└── README.md
```

## Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Explore Map**: Navigate the interactive map
3. **Add Pins**: Double-click on the map to add a new location pin
4. **Add Details**: Fill in title, description, and rating for your pin
5. **View Reviews**: Click on existing pins to view other users' reviews

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- MapBox for providing the mapping service
- Material-UI for the component library
- The open-source community for various packages used in this project
