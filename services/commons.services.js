const _ = require('lodash');
const brands = require('../config').brands;
const router = require('../config').router();

exports.read = function (config) {
    return new Promise(function (resolve) {
            resolve({
                activePageSlug: config.path,
                layout: config.layout ? config.layout : 'main',
                brands: brands,
                router: router
            });
        }
    );
};

exports.join = function (values) {
    var model = {
        brands: brands,
        router: router,
        components: require('../components/index'),
        mock: require('../settings/mock')
    };
    if (typeof values !== 'array') {
        values = [values];
    }
    _.forEach(values, function (value) {
        Object.assign(model, model, value)
    });
    console.log('hola');
    return model;
};

exports.getPromises = function (page) {
    return _.map(page.services.read, function (service) {
        return service();
    });
};