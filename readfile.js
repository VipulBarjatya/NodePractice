const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    console.log("starter file deleted");
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    console.log("file written");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nPleasure to meet you"
    );
    console.log("file appended");
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promisecomplete.txt")
    );
    console.log("file renamed");
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promisecomplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (error) {}
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Hello...");

// Callback hell

// fs.writeFile(
//   path.join(__dirname, "files", "new.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("write Complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "new.txt"),
//       "\n\n Yes It is.",
//       (err) => {
//         if (err) throw err;
//         console.log("append Complete");

//         fs.rename(
//           path.join(__dirname, "files", "new.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
