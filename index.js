
import app from "./server.js"; // Imports the Express app instance from server.js, responsible for handling requests and routes.
import mongodb from "mongodb"; // Imports the MongoDB driver for interacting with the database.
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient; // Represents a MongoDB client for connecting to the database.

// we never store password in a javascript file and push those to github, we use environment variables to store. So in replit we can use the tool secrets to store username and password values.
const mongo_username = process.env["Mongo_Username"];
const mongo_password = process.env["Mongo_Password"];
// it is the url for the database created on mongodb atlas
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster1.stphtm6.mongodb.net/?retryWrites=true&w=majority`;

//I'm using back tick. Back tick allows us to aceess js variables inside.

const port = 8000;
// We are running our server on a specific port that is 8000

// we will connect to db
MongoClient.connect(uri, {
  maxPoolSize: 50, // amount of people that can be connect to one time
  wtimeoutMS: 2500, // trying to connect before times out
  useNewUrlParser: true, // it should be true always
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
    // Catches connection errors and exits the process.
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => { // Starts the Express app using app.listen and logs a message indicating the server is listening.
      console.log(`listening on port ${port}`);
    });
  });
