const multer = require('multer');
const path = require('path');

module.exports.setImageFolder = (folderPath) =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, folderPath);
        },


        // By default, multer removes file extensions so let's add them back
        filename: function(req, file, cb) {
            let fileName
            if (file.originalname){
                 fileName = file.originalname.split(".")[0]
            }
            cb(null, (fileName ? fileName : file.fieldname) + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    return  upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (file.mimetype === "image/png" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/jpeg" ||
                file.mimetype === "application/pdf" ||
                file.mimetype === "application/xls" ||
                file.mimetype === "application/vnd.ms-excel" ||
                file.mimetype === "application/msword" ||
                file.mimetype === "text/csv") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg, .jpeg, .pdf, .xls, .doc, .csv format allowed!'));
            }
        }
    });
}