Back_End files for movie review website. For front-end files go to https://github.com/Vennela-Vasireddy/Movie_Review

Backend Structure:

index.js:
Manages database connection using MongoClient.
Starts the server on port 8000.

server.js:
Creates an Express app for handling requests.
Configures middleware (cors, body-parser).
Mounts routes for reviews API.
Handles 404 errors for unmatched routes.

reviewDAO.js:
Provides functions to interact with the MongoDB database for reviews: addReview, getReview, updateReview, deleteReview, getReviewsByMovieId
DAO - (Data Access Objects) encapsulates database interactions.

reviews.controller.js:
Defines controller methods for handling API requests: apiPostReview, apiGetReview, apiUpdateReview, apiDeleteReview, apiGetReviews

reviews.route.js:
Defines API endpoints using Express router:
/api/v1/reviews/movie/:id (GET)
/api/v1/reviews/new (POST)
/api/v1/reviews/:id (GET, PUT, DELETE)

Server and API Connection:
index.js starts the server using the app instance from server.js.
server.js mounts the reviews API routes defined in reviews.route.js.
reviews.route.js maps API endpoints to controller methods in reviews.controller.js.
reviews.controller.js interacts with the database using functions from reviewDAO.js.

Frontend and API Interaction:
Frontend sends requests to the API endpoints (e.g., to fetch, create, update, or delete reviews).
Reviews API routes (in reviews.route.js) receive the requests.
Controller methods (in reviews.controller.js) process the requests and interact with the database using DAO functions.
DAO functions (in reviewDAO.js) perform database operations (e.g., querying, inserting, updating, or deleting reviews).
Controller methods send responses back to the front end with the requested data or status updates.
Frontend receives responses and updates the user interface accordingly.

Key Points:
Express handles incoming requests and routes them to appropriate controllers.
Controllers act as intermediaries between routes and data access.
DAOs (Data Access Objects) encapsulate database interactions.
Middleware (like cors and body-parser) add functionality to the Express app.
Frontend communicates with the backend through API calls.
