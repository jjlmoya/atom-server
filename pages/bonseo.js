module.exports = {
    path: '/bonseo/',
    view: 'pages/bonseo/index',
    layout: 'main',
    brand: 'sky',
    name: 'Bonseo',
    logo: '/images/bonseo/logo.png',
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
};