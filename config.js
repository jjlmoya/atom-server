exports.db = function () {
    return {
        dbName: 'mocking',
        protocol: 'mongodb://',
        url: 'localhost:27017/'
    }
};

exports.brands = [
    'aviator',
    'clouds',
    'celeste',
    'diable',
    'forest',
    'graylord',
    'kino',
    'lime-sports',
    'lollipop',
    'mint',
    'nature',
    'paradise-orange',
    'purple-skies',
    'reverse-sky',
    'sky'
];

exports.server = function () {
    return {
        port: 3125
    }
};

exports.router = function () {
    return [
        require('./pages/home'),
        require('./pages/core'),
        require('./pages/bonseo'),
        require('./pages/cp'),
        require('./pages/vostok'),
        require('./pages/purple'),
        require('./pages/lmg'),
        require('./pages/pyf'),
        require('./pages/frontjs')
    ]
};
