const fs = require("fs");

fs.promises
  .readFile("README.md", "utf-8")
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
