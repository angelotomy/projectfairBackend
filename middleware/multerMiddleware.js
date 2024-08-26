const multer = require('multer')


//storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

//file-filter
const fileFilter = (req, file, callback) => {

    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        callback(null, true)
    }
    else {
        callback(null, false)
        return callback(new Error("only allows png,jpg or jpeg files"))
    }
}




const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig