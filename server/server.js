const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const uploadDirectory = path.join(__dirname, "uploads");
app.use(express.static(uploadDirectory));

if(!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (request, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });
app.post('/upload', upload.single('video'), (request, response) => {
    try{
        if (!request.file){
            throw new Error('No file uploaded');
        }
        response.status(200).json({ 
            success: true, 
            message: 'Video uploaded successfully', 
            path: request.file.path
        });
    } 
    catch(error){
        console.error('Error uploading video:', error.message);
        response.status(500).json({ 
            success: false, 
            message: 'Error uploading video: ' + error.message 
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });