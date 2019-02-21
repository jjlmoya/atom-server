const _ = require('lodash');
exports.read = function (config) {
    return new Promise(function (resolve) {
            resolve({
                activePageSlug: config.path,
                layout: config.layout ? config.layout : 'main'
            });
        }
    );
};

exports.join = function (values) {
    let model = {};
    if (typeof values !== 'array') {
        values = [values];
    }
    _.forEach(values, function (value) {
        Object.assign(model, model, value)
    });
    console.log(model);
    return model;
};

exports.getPromises = function (page) {
    return _.map(page.services.read, service => {
        return service();
    });
};