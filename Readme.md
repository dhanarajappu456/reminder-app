### Reminder API Documentation

This API provides endpoints to manage reminders for users. Reminders consist of a user ID, date, time, mode, and message.

#### Base URL

The base URL for accessing the API endpoints is `http://localhost:7000`.

#### Live Deployment

This API is live and accessible at [Reminder App](https://reminder-app-pcrz.onrender.com) 🚀.

#### Authentication

Authentication is not required for accessing the provided endpoints.

#### Endpoints

1. **Test Endpoint**

   - **URL:** `/test`
   - **Method:** GET
   - **Description:** This endpoint is used to test the availability of the API.
   - **Response:** Returns a JSON object with a message "ok".

2. **Create Reminder**

   - **URL:** `/api/reminder`
   - **Method:** POST
   - **Description:** Allows users to create a new reminder.
   - **Request Body:**
     - `userId`: ID of the user for whom the reminder is created.
     - `date`: Date of the reminder.
     - `time`: Time of the reminder.
     - `mode`: Mode of the reminder (e.g., email, push notification).
     - `message`: Message associated with the reminder.
   - **Response:** Returns a JSON object with a message indicating the success or failure of the reminder creation.

3. **Get Reminders for a User**
   - **URL:** `/api/reminder/:userId`
   - **Method:** GET
   - **Description:** Retrieves all reminders associated with a specific user.
   - **Parameters:**
     - `userId`: ID of the user for whom reminders are fetched.
   - **Response:** Returns a JSON array containing all reminders associated with the specified user.

#### Error Handling

- If an error occurs during the processing of requests, the API will respond with an appropriate error message and status code.

#### Sample Usage

##### Create a Reminder

```http
POST /api/reminder HTTP/1.1
Content-Type: application/json

{
  "userId": "user123",
  "date": "2024-03-15",
  "time": "10:00 AM",
  "mode": "email",
  "message": "Meeting with client"
}
```

##### Get Reminders for a User

```http
GET /api/reminder/user123 HTTP/1.1
```

#### Dependencies

- **cors**: This middleware enables CORS (Cross-Origin Resource Sharing) for the API.
- **dotenv**: Allows loading environment variables from a `.env` file into `process.env`.
- **express**: Node.js web application framework used for building APIs.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.

#### Database

The API utilizes MongoDB as its database. Ensure the MongoDB connection string is provided in the `.env` file.

#### Running the Server

To start the server, run the following command:

Navigate to the backend folder

```
node index
```

#### Author

This API is developed and maintained by Dhanaraj S

#### Version

Current version: 1.0.0

#### License

This project is licensed under the [License Name] License.
