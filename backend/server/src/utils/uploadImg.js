var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'drfu1lwek',
    api_key: '297886628144434',
    api_secret: 'LsVIAEJtioTizkRbp3lkr5wuK2A',
});

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};

module.exports = (image) => { // image = > base64
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(image, opts, (error, result) => {
                if(result && result.secure_url){

                    console.log("secure url",result.secure_url);
                    return resolve(result.secure_url);
                }
                console.log("error",error);
                return reject({message: error.message});
            });
        });
}

module.exports.deleteImage = (image) => {
    return new Promise((resolve, reject) => {



        const url = image; // your image URL
        const publicId = url.split('/').pop().split('.')[0];

        cloudinary.uploader.destroy(publicId, function(error, result) {
                if (result && result.result === 'ok') {
                    console.log("Image deleted successfully");
                    return resolve({ message: "Image deleted successfully" });
                    }
                console.log("error in delete image", error);
                return reject({ message: error });
        });
        // cloudinary.uploader.destroy(image, (error, result) => {
        //     if (result && result.result === 'ok') {
        //         console.log("Image deleted successfully");
        //         return resolve({ message: "Image deleted successfully" });
        //     }
        //     console.log("error", error);
        //     return reject({ message: error });
        // });
    });
}

//Delete here:


/* 
const url = '...'; // your image URL
const publicId = url.split('/').pop().split('.')[0];

cloudinary.uploader.destroy(publicId, function(error, result) {
    console.log(result, error);
});

*/




























// const multer = require('multer');
// const { v2: cloudinary } = require('cloudinary');


// const storage = multer.diskStorage({});


// const checkFileType = (file, cb) => {
//     const filetypes = /jpeg|jpg|png/;
//     const extname = filetypes.test(file.originalname.toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
//     if (extname && mimetype) {
//         return cb(null, true);
//     } else {
//         cb('Error: Images only!');
//     }
// };


// const upload = multer({
//     storage: storage,
//     fileFilter: function(req, file, cb) {
//         checkFileType(file, cb);
//     },
// }).single('ResImg'); 

// cloudinary.config({
//     cloud_name: 'dk3muiuks',
//     api_key: '695946447985799',
//     api_secret: 'KBwZOqdZzs_E_pMq7v1iKtsGgc0'
// });


// const uploadImage = (req, res, next) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ error: err });
//         }
//         try {
//             const result = await cloudinary.uploader.upload(req.file.path);
//             req.imageURL = result.secure_url;
//             next();
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             res.status(500).json({ error: 'Server error while uploading image' });
//         }
//     });
// };

// module.exports = uploadImage;
