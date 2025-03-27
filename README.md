# Mindful Connect - Backend API

![Project Live Link](https://mc-frontend-8848.onrender.com)

## Overview

This is the backend API for Mindful Connect, a comprehensive mental wellness platform that connects users with therapists and provides AI-driven support. The API handles therapist data management, search functionality, and matching algorithms.

## Features

- **Therapist Management**: CRUD operations for therapist profiles
- **Advanced Search**: Find therapists based on multiple criteria:
  - Specializations (CBT, Trauma Therapy, etc.)
  - Geographic location
  - Gender preferences
  - Experience levels
  - Session modes (online, in-person, hybrid)
  - Insurance acceptance
  - Budget ranges
  - Cultural sensitivities
- **MongoDB Integration**: Robust data storage and retrieval
- **RESTful Architecture**: Standard API design for easy integration

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object data modeling for MongoDB
- **Cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
/
├── config/           # Configuration files
│   └── db.js         # Database connection setup
├── models/           # MongoDB models
│   └── Therapist.js  # Therapist schema and model
├── routes/           # API routes
│   └── therapists.js # Therapist route handlers
├── server.js         # Express application setup
├── .env              # Environment variables (not in repo)
└── package.json      # Project dependencies
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/mindful-connect-backend.git
   cd mindful-connect-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://your-mongodb-connection-string
   ```

4. Start the server:
   ```
   npm start
   ```

5. The API will be available at `http://localhost:5000`

## API Endpoints

### Therapists

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/therapists` | Get therapists with optional filters |
| POST | `/api/therapists` | Create one or multiple therapist records |
| DELETE | `/api/therapists/:id` | Delete a therapist by ID |

## Request & Response Examples

### GET /api/therapists

**Query Parameters:**
- `specialty`: Therapist specialization (e.g., "CBT")
- `location`: City name
- `gender`: Therapist's gender
- `experience`: Minimum years of experience
- `therapyType`: Session mode (e.g., "Online", "In-Person")
- `page`: Page number for pagination (default: 1)
- `limit`: Results per page (default: 10)

**Example Request:**
```
GET /api/therapists?specialty=CBT&gender=Female&experience=5
```

**Example Response:**
```json
{
  "total": 2,
  "page": 1,
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "Jane Smith",
      "age": 35,
      "gender": "Female",
      "therapySpecialization": ["CBT", "Mindfulness Therapy"],
      "experience": 7,
      "experienceLevel": "Expert",
      "sessionModes": ["Online", "In-Person"],
      "location": {
        "city": "Nairobi",
        "country": "Kenya"
      },
      // Additional fields omitted for brevity
    },
    // Additional therapists
  ]
}
```

### POST /api/therapists

**Request Body:**
```json
{
  "name": "John Doe",
  "age": 42,
  "gender": "Male",
  "maritalStatus": "Married",
  "therapySpecialization": ["Trauma Therapy", "CBT"],
  "experience": 12,
  "experienceLevel": "Expert",
  "sessionModes": ["Online", "Hybrid"],
  "location": {
    "city": "Nairobi",
    "country": "Kenya"
  },
  "availability": [
    {
      "day": "Monday",
      "timeSlots": ["09:00-10:00", "14:00-15:00"]
    },
    {
      "day": "Wednesday",
      "timeSlots": ["10:00-11:00", "15:00-16:00"]
    }
  ],
  "languages": ["English", "Swahili"],
  "insuranceAccepted": true,
  "insuranceCoverage": "Partial",
  "acceptedInsuranceProviders": ["Provider A", "Provider B"],
  "budgetRange": "Ksh 3,000 - Ksh 5,000",
  "culturalSensitivity": "No Preference",
  "concerns": ["Anxiety", "Depression"],
  "hourlyRate": 4000,
  "paymentMethods": ["Mobile Payment", "Credit Card"],
  "contact": {
    "email": "john.doe@example.com",
    "phone": "0712345678"
  }
}
```

**Response:**
```json
{
  "message": "Therapist added successfully",
  "data": {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    // All therapist data included here
  }
}
```

## Database Schema

The Therapist model includes the following fields:

- **name**: Therapist's full name
- **age**: Therapist's age
- **gender**: Gender (Male, Female, Non-Binary, Other)
- **maritalStatus**: Marital status (Single, Married)
- **therapySpecialization**: Array of specializations
- **experience**: Years of experience
- **experienceLevel**: Level of expertise (Beginner, Intermediate, Expert)
- **sessionModes**: Array of session types (Online, In-Person, Hybrid)
- **location**: Object with city, state, and country
- **availability**: Array of days and available time slots
- **languages**: Array of languages spoken
- **insuranceAccepted**: Boolean indicating if insurance is accepted
- **budgetRange**: Price range for sessions
- **culturalSensitivity**: Cultural or religious specialization
- **concerns**: Array of mental health concerns addressed
- **contact**: Object with email and phone information

## Error Handling

The API returns appropriate status codes and error messages:

- **400**: Bad Request - Invalid input
- **404**: Not Found - Resource doesn't exist
- **500**: Server Error - Unexpected server issues

## Deployment

This API can be deployed to cloud platforms like:

- Heroku
- AWS Elastic Beanstalk
- Google Cloud Run
- Digital Ocean

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

[MIT License](LICENSE)

## Contact

For questions or support, please contact [my email](monicahwamuhu2@gmail.com)
