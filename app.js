const express = require("express");
const app = express();

app.use(express.json());

// Array
const user = [];

// CREATE - Add user
app.post("/user", (req, res) => {
    user.push(req.body);

    res.status(201).json({
        message: "User created successfully",
        data: req.body
    });
});

// READ - Get all users
app.get("/user", (req, res) => {
    res.status(200).json({
        message: "User fetched successfully",
        data: user
    });
});

// UPDATE - Update username
app.put("/user/:index", (req, res) => {
    const index = req.params.index;

    if (!user[index]) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user[index].username = req.body.username;

    res.status(200).json({
        message: "Username updated successfully",
        data: user[index]
    });
});

// DELETE - Delete user
app.delete("/user/:index", (req, res) => {
    const index = req.params.index;

    if (!user[index]) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully"
    });
});

module.exports = app;