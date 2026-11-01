const express = require('express');
const app = express();

app.use(express.json());

// The endpoint your Roblox game will talk to
app.post('/roblox-data', (req, res) => {
    console.log("Received data from Roblox:", req.body);
    res.json({ status: "Success", message: "Hello from your cloud server!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
