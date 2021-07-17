const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const TicTacToeController = require("./TicTacToeController");

app.use("/tictactoe", TicTacToeController);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});