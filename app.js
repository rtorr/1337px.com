const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.redirect('https://lynnandtonic.com/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
