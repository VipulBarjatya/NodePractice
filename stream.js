const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/newlorem.txt");

// rs.on("data", (text) => {
//   ws.write(text);
// });

rs.pipe(ws);
