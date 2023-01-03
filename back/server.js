const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/uploadFile", upload.single("file"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;

      res.send("File uploaded");
    }
  );
});
app.listen(5000, () => {
  console.log(`Server started...`);
});
