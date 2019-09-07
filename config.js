exports.brands = [
    'aviator',
    'blueberry',
    'bulldog',
    'cake',
    'caribbean',
    'clouds',
    'celeste',
    'diable',
    'dopely',
    'eevee',
    'flowers',
    'forest',
    'graylord',
    'haze',
    'holy',
    'kino',
    'laser',
    'lavandula',
    'lemon',
    'lime-sports',
    'lollipop',
    'mint',
    'nature',
    'phalawon',
    'pumpkin',
    'naisu',
    'paradise-orange',
    'purple-skies',
    'reverse-sky',
    'sky',
    'shadz',
    'spring-melody',
    'strawberry',
    'tosca',
    'wood',
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
        require('./pages/frontjs'),
        require('./pages/stepped'),
        require('./pages/rueda')
    ]
};
