const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    // Move the file deletion here, inside the callback function
    fs.unlink("./operations/data.txt", (unlinkErr) => {
      if (unlinkErr) {
        console.error("Error deleting the file: " + unlinkErr.message);
      } else {
        console.log("File deleted successfully.");
      }
    });
  }
});
