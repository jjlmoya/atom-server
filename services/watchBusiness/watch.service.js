const Watch = require('../../model/watch.model');
const PathToService = './';
exports.dependences = {
    ColorsService: require(PathToService + 'color.services'),
    MaterialsService: require(PathToService + 'material.services'),
    CrownService: require(PathToService + 'crown.services'),
    BackCaseServices: require(PathToService + 'backCase.services'),
    CoatingServices: require(PathToService + 'coating.services'),
    BrandService: require(PathToService + 'brand.services'),
    GenderService: require(PathToService + 'gender.services'),
    IlluminationService: require(PathToService + 'illumination.services'),
    MechanismService: require(PathToService + 'mechanism.services'),
    WatchHandService: require(PathToService + 'watchHands.services'),
    TimeNumbersService: require(PathToService + 'timeNumbers.services'),
    TimeFormatService: require(PathToService + 'timeFormat.service'),
    DisplayService: require(PathToService + 'display.services'),
    CalendarService: require(PathToService + 'calendar.services'),
    ClosureService: require(PathToService + 'closure.services')
};


exports.create = function (req, next) {
    let watch = createWatch(req.body);
    watch.save(function (err) {
        if (err) {
            console.log('Fail saving to BD');
        }
        next();
    })
};

exports.read = function () {
    return new Promise(function (resolve, reject) {
            Watch.find((err, result) => {
                if (err) reject(err);
                resolve({watchList: result});
            });
        }
    );
};


exports.readById = function (id) {
    return new Promise(function (resolve, reject) {
            Watch.findById(id, (err, result) => {
                if (err) reject(err);
                resolve({editElement: result});
            });
        }
    );
};

exports.update = function (req) {
    return new Promise(function (resolve, reject) {
            Watch.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );

};


exports.delete = function (req) {
    return new Promise(function (resolve, reject) {
            Watch.findByIdAndRemove(req.params.id, function (err) {
                if (err) return reject();
                resolve();
            });
        }
    );
};


let createWatch = function (body) {
    return new Watch(
        {
            gender: body.gender,
            price: body.price
        }
    )
};


