import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/images')); // Save images in public/images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imagePath = `/images/${req.file.filename}`;
  res.json({ imagePath });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});