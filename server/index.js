const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortunes } = require('./controller')
const { postName } = require('./controller')
const { postDino } = require('./controller')
const { postDrink } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortunes);
app.post("/api/post/name", postName);
app.post("/api/post/dino", postDino);
app.post("/api/post/drink", postDrink)



app.listen(4000, () => console.log("Server running on 4000"));