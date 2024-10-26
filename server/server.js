// server.js
// import our node modules
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// setup the server
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

//test endpoint works
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//endpoint to get messages
app.get("/message", async function (req, res) {
  // select all of the guestbooks
  const result = await db.query("SELECT * FROM wedding_guestbook");
  const guests = result.rows;
  // send guestbook to the client
  res.json(guests);
});

//endpoint for posted messages
app.post("/message", async (req, res) => {
  const guestName = req.body.guest;
  const guestMsg = req.body.message;
  console.log(guestName, guestMsg);
  const result = await db.query(
    "INSERT INTO wedding_guestbook (guest, message) VALUES ($1, $2) RETURNING *",
    [guestName, guestMsg]
  );

  res.json(result);
});

//endpoint to delete messages
app.delete('/message/:id', async (req, res) => {
  const messageId = req.params.id;

  try {
    // Execute SQL query to delete the message with the matching id
    const result = await pool.query('DELETE FROM messages WHERE id = $1', [messageId]);

    if (result.rowCount > 0) {
      res.status(200).json({ success: true, message: 'Message deleted' });
    } else {
      res.status(404).json({ success: false, message: 'Message not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
