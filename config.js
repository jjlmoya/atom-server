exports.db = function () {
    return {
        dbName: 'mocking',
        protocol: 'mongodb://',
        url: 'localhost:27017/'
    }
};

exports.brands = [
    'aviator',
    'diable',
    'forest',
    'graylord',
    'kino',
    'lime-sports',
    'lollipop',
    'mint',
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
        {
            path: '/',
            view: 'home',
            layout: 'main',
            name: 'Home'
        },
        {
            path: '/core/',
            view: 'pages/core/index',
            layout: 'main',
            name: 'Core',
            pages: [
                {
                    path: 'temas',
                    view: 'pages/core/theme',
                    name: 'Temas'
                }
            ],
        },
        {
            path: '/bonseo/',
            view: 'pages/bonseo/index',
            layout: 'main',
            brand: 'sky',
            name: 'Bonseo',
            pages: [
                {
                    path: 'servicios',
                    view: 'pages/bonseo/services',
                    name: 'Servicios'
                },
                {
                    path: 'hazlo-tu-mismo',
                    view: 'pages/bonseo/diy',
                    name: 'Hazlo tu mismo'
                }, {
                    path: 'cursos',
                    view: 'pages/bonseo/courses',
                    name: 'Cursos'

                }],
        },
        {
            path: '/cp/',
            view: 'pages/cp/index',
            layout: 'main',
            name: 'CP',
            brand: 'kino',
            pages: [
                {
                    path: 'guia-de-viaje',
                    view: 'pages/cp/guides',
                    name: 'Guías de Viaje'
                },
                {
                    path: 'guia-de-viaje/alemania',
                    view: 'pages/cp/guide',
                    name: 'Guía de Viaje: Alemania'
                }],
        },
        {
            path: '/iberojet',
            view: 'pages/iberojet/index',
            layout: 'abtasty',
            name: 'Iberojet',
            brand: 'purple-skies',
        },
        {
            path: '/lmg',
            view: 'pages/lmg/index',
            layout: 'main',
            name: 'LetMeGift',
            brand: 'diable',
        },
        {
            path: '/pyf',
            view: 'pages/pyf/index',
            layout: 'main',
            name: 'Plantas y Flores',
            brand: 'forest'
        },
        {
            path: '/vostok/',
            view: 'pages/vostok/index',
            name: 'Vostok',
            layout: 'main',
            brand: 'diable',
            pages: [
                {
                    path: 'product',
                    view: 'pages/vostok/product',
                    name: 'Producto'
                },
                {
                    path: 'search',
                    view: 'pages/vostok/search',
                    name: 'Buscador'
                }],
        }
    ]
};
