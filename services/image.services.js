exports.create = function (req, next) {
    console.log(req.body.file);
    const images = req.body.file.map((file) => {
        return {
            filename: file.filename,
            originalname: file.originalname,
            alt: ' ',
            title: ' ',
            description: ' '
        }
    });
    Image.insertMany(images, (err, result) => {
        if (err) console.log(err);
        next();
    })
};

exports.readById = function (req, next) {
    Image.findOne({_id: req.params.id}, (err, image) => {
        if (err) return res.sendStatus(404);
        next(fs.createReadStream(path.resolve(UPLOAD_PATH, image.filename)).pipe(res));
    })
};