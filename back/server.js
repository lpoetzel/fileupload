const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/uploadFile", upload.single("file"), uploadFiles);

function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Successfully uploaded file" });
}
app.listen(5000, () => {
  console.log(`Server started...`);
});
