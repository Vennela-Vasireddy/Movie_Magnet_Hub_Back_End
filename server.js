import express from "express";
import cors from "cors"; // Imports the CORS middleware to enable cross-origin requests.
// Middleware are functions that process requests before they reach routes.
import reviews from "./api/reviews.route.js"; // Imports the reviews API routes from a file named reviews.route.js.

const app = express(); // Creates an instance of the Express app.

app.use(cors()); // Applies CORS middleware to allow requests from different origins.
app.use(express.json()); // Parses incoming JSON data in request bodies.

app.use("/api/v1/reviews", reviews); //Mounts the reviews API routes defined in reviews.route.js at the path /api/v1/reviews.
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); // Handles unmatched routes, sending a 404 Not Found response with an error message.

export default app;


