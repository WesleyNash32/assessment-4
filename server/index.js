const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortunes } = require('./controller')
const { postName } = require('./controller')
const { putDino } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortunes);
app.post("/api/post/name", postName);
app.put("/api/put/dino", putDino)


app.listen(4000, () => console.log("Server running on 4000"));