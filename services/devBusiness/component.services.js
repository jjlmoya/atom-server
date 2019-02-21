const Component = require('../../model/component.model');

exports.read = function () {
    return new Promise(function (resolve, reject) {
            Component.find((err, result) => {
                if (err) reject(err);
                resolve({components: result});
            });
        }
    );
};

exports.readById = function (id) {
    return new Promise(function (resolve, reject) {
            Component.findById(id, (err, result) => {
                if (err) reject(err);
                resolve({editElement: result});
            });
        }
    );
};

exports.readBySlug = function (slug) {

    return new Promise(function (resolve, reject) {
        const query = { "ecommerce.slug": slug};
        console.log(query);
        Component.findOne(query, function (err, result) {
            if (err) return handleError(err);
            console.log(result);
            resolve({component: result});
        });
    });
};


exports.update = function (req) {
    return new Promise(function (resolve, reject) {
            Component.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );

};

exports.create = function (req, next) {
    let component = new Component({
        ecommerce: {
            image: req.body['ecommerce.image'],
            title: req.body['ecommerce.title'],
            description: req.body['ecommerce.description'],
            article: req.body['ecommerce.article'],
            price: req.body['ecommerce.price'],
            discount: req.body['ecommerce.discount'],
            slug: req.body['ecommerce.slug'].trim(),
            stock: req.body['ecommerce.stock']
        },
        name: req.body.name,
        keyFeatures: req.body.keyFeatures,
        videoUri: req.body.videoUri,
        tags: req.body.tags,
        comments: req.body.comments
    });
    component.save(function (err) {
        if (err) {
            console.log(err);
        }
        next();
    })
};


exports.delete = function (req) {
    return new Promise(function (resolve, reject) {
            Component.findByIdAndRemove(req.params.id, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );
};

