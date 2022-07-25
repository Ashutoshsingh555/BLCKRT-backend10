
import multer from 'multer';
import AWS from 'aws-sdk';
import multerS3 from 'multer-s3'

AWS.config.update({
    accessKeyId:  process.env.AWSACCESSKEY3,
    secretAccessKey:process.env.AWSSECRETKEY3,
    region:  process.env.AWSREGION3
})

const s3 = new AWS.S3();
const fileFilter = (req, file, cb) => {
    console.log(file)
    if ( file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml") || file.mimetype.includes("application/vnd.ms-excel'")) {
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}
// var maxSize = 2000 * 1024 * 1024;

var upload = multer({
    storage: multerS3({
        fileFilter,
        s3: s3,
        bucket: process.env.AWSBUCKET3,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'file' });
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }),
   
})

module.exports = upload;
// import config from './config';
// import multer from 'multer';



// const excelFilter = (req, file, cb) => {
//   if (
//     file.mimetype.includes("excel") ||
//     file.mimetype.includes("spreadsheetml") || file.mimetype.includes("application/vnd.ms-excel'")
//   ) {
//     cb(null, true);
//   } else {
//     cb("Please upload only excel file.", false);
//   }
// };
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + "/public/excelUploads/");
//   },
//   filename: (req, file, cb) => {
//     console.log(file.originalname);
//     cb(null, `${Date.now()}-hashingCoder-${file.originalname}`);
//   },
// });
// var uploadFile = multer({ storage: storage, fileFilter: excelFilter });
// module.exports = uploadFile;

