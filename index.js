const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// initialize a basic express api with a single method to receive cloud events for the account upgrade
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
const router = express.Router();
app.use("/", router);


router.post("/",async (req, res) => {

})

app.listen(3000, () => {
    'avaiting update events at http://localhost:3000/'
});
