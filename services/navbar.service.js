const NavBar = require('../model/navbar.model');

exports.read = function () {
    return new Promise(function (resolve, reject) {
            NavBar.find((err, result) => {
                if (err) reject(err);
                resolve({navPages: result});
            });
        }
    );
};

exports.readById = function (id) {
    return new Promise(function (resolve, reject) {
            NavBar.findById(id, (err, result) => {
                if (err) reject(err);
                resolve({editElement: result});
            });
        }
    );
};

exports.update = function (req) {
    return new Promise(function (resolve, reject) {
            NavBar.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );

};

exports.create = function (req, next) {
    let navbar = new NavBar(
        {
            name: req.body.name,
            slug: req.body.slug
        }
    );
    navbar.save(function (err) {
        if (err) {
            console.log(err);
        }
        next();
    })
};


exports.delete = function (req) {
    return new Promise(function (resolve, reject) {
            NavBar.findByIdAndRemove(req.params.id, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );
};

