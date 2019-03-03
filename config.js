exports.db = function () {
    return {
        dbName: 'mocking',
        protocol: 'mongodb://',
        url: 'localhost:27017/'
    }
};

exports.server = function () {
    return {
        port: 3125
    }
};

exports.router = function () {
    return {
        home: {
            path: '/',
            view: 'home',
            layout: 'main'
        },
        bonseo: {
            path: '/bonseo/',
            view: 'pages/bonseo/index',
            layout: 'main',
            pages: {
                services: {
                    path: 'servicios',
                    view: 'pages/bonseo/services'
                },
                diy: {
                    path: 'hazlo-tu-mismo',
                    view: 'pages/bonseo/diy'
                },
                courses: {
                    path: 'cursos',
                    view: 'pages/bonseo/courses'
                }
            }
        },
        cp: {
            path: '/cp',
            view: 'pages/cp/index',
            layout: 'main'
        },
        iberojet: {
            path: '/iberojet',
            view: 'pages/iberojet/index',
            layout: 'abtasty'
        },
        lmg: {
            path: '/lmg',
            view: 'pages/lmg/index',
            layout: 'main'
        },
        pyf: {
            path: '/pyf',
            view: 'pages/pyf/index',
            layout: 'main'
        },
        vostok: {
            path: '/vostok',
            view: 'pages/vostok/index',
            layout: 'main'
        }
    }
};
