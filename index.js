require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Mess Management Backend is Running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});